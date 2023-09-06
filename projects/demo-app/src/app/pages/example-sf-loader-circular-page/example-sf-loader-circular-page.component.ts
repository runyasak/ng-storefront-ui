import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { SfLoaderCircularComponent, SfLoaderSize } from 'projects/ng-storefront-ui';
import { Controls } from '../../components/controls/controls.types';
import { ControlService } from '../../services/control.service';

@Component({
  standalone: true,
  imports: [CommonModule, ExampleWrapperComponent, SfLoaderCircularComponent],
  templateUrl: './example-sf-loader-circular-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
})
export class ExampleSfLoaderCircularPageComponent {
  controls: Controls = [
    {
      type: 'select',
      modelName: 'size',
      propType: 'SfLoaderSize',
      options: [...Object.keys(SfLoaderSize)],
      description: 'sets sizes of components',
    },
    {
      type: 'text',
      modelName: 'ariaLabel',
      propType: 'string',
      propDefaultValue: 'loading',
      description: 'sets text available for screen readers',
    },
  ];

  prepareControlsData = this.controlService.prepareControls(this.controls, {
    size: SfLoaderSize.lg,
    ariaLabel: 'loading',
  });

  constructor(private controlService: ControlService) {}
}
