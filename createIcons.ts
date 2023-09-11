const fs = require('fs');
const path = require('path');
const fsPromise = require('fs').promises;
const { optimize } = require('svgo');

const inputDirectoryPath = path.join(__dirname, 'assets/icons');

const outputDirectoryPath = path.join(__dirname, 'projects/ng-storefront-ui/src/lib/sf-icons');

const camelize = (s: string) => s.replace(/-./g, (x) => x[1].toUpperCase());

const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

const sfIconsExports: string[] = [];

const getSvg = async (svgName: string, doOptimiziation = false) => {
  const svgPath = path.join(inputDirectoryPath, svgName);
  let fileContent = await fsPromise.readFile(svgPath, 'utf8').catch(() => ({}));
  if (doOptimiziation) {
    try {
      fileContent = optimize(fileContent, {
        multipass: true,
        svg2js: {
          pretty: true,
        },
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeUselessStrokeAndFill: false,
              },
            },
          },
        ],
      }).data;
    } catch (error) {
      console.error('Please install svgo for node in order to do optimization, ' + error);
    }
  }

  const fileName = svgName.split('.')[0];
  return {
    fileName: camelize(fileName),
    name: fileName,
    content: fileContent
      .substring(fileContent.indexOf('>') + 1, fileContent.lastIndexOf('<'))
      .replace(/"/g, "'") as string,
    attrs: {
      viewBox: /viewBox="([^"]+)"/.exec(fileContent)?.[1],
    },
  };
};

const createSfIcon = (
  selector = '',
  name = '',
  content = '',
  attributes: { viewBox: string; dataTestId: string }
) => `
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from './sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: '${selector}',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: \`<sf-icon-base [size]="size" viewBox="${attributes.viewBox}" data-testid="${attributes.dataTestId}">
      ${content}      
    </sf-icon-base>\`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class ${name}Component {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
`;

const createExports = async (file: string, doOptimiziation = false) => {
  const splitFileName = file.split('.');

  if (splitFileName[splitFileName.length - 1] === 'svg') {
    const { fileName, name, content, attrs } = await getSvg(file, doOptimiziation);

    const capitializedCamelCaseName = capitalize(camelize(fileName));
    const attributes = { viewBox: attrs.viewBox ?? '0 0 24 24', dataTestId: name };

    const componentName = `SfIcon${capitializedCamelCaseName}`;

    const replaceSvgPathContent = content.replace('path', 'svg:path');

    const selector = `sf-icon-${name}`;

    await fsPromise.writeFile(
      `${outputDirectoryPath}/${selector}.component.ts`,
      createSfIcon(selector, componentName, replaceSvgPathContent, attributes)
    );

    sfIconsExports.push(selector);
  }
};

const createIconsUtils = async () => {
  const cloneSfIconsExports = [...sfIconsExports].sort();

  const utilsString = `export const sfIconSelectors = ${JSON.stringify(cloneSfIconsExports)
    .replaceAll(',', ', ')
    .replaceAll('"', "'")};\n`;

  return fsPromise.writeFile('projects/ng-storefront-ui/utils/sf-icon.utils.ts', utilsString);
};

const createIndexExports = () => {
  let exportsString = '';
  const cloneSfIconsExports = [...sfIconsExports];

  cloneSfIconsExports.sort();
  cloneSfIconsExports.forEach((selector) => {
    exportsString += `export * from './${selector}.component';\n\n`;
  });

  return fsPromise.writeFile(`${outputDirectoryPath}/index.ts`, exportsString);
};

const generateIconFiles = async (err: NodeJS.ErrnoException | null, files: string[]) => {
  if (err) {
    return console.log('Unable to get icons directory: ' + err);
  }

  if (!fs.existsSync(outputDirectoryPath)) {
    fs.mkdirSync(outputDirectoryPath);
  }

  for await (const file of files) {
    await createExports(file, true);
  }

  await createIndexExports();

  await createIconsUtils();

  console.log(`Creating icons has finished!`);
};

fs.readdir(inputDirectoryPath, generateIconFiles);
