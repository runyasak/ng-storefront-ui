import { NgDocPage } from '@ng-doc/core';
import BaseComponentsCategory from '../ng-doc.category';
import { ButtonSizesExampleComponent } from '../../../components/button-sizes-example.component';
import { ButtonVariantsExampleComponent } from '../../../components/button-variants-example.component';
import { ButtonAsLinkExampleComponent } from '../../../components/button-as-link-example.component';

const ButtonPage: NgDocPage = {
  title: 'Button',
  mdFile: './index.md',
  category: BaseComponentsCategory,
  demos: {
    ButtonSizesExampleComponent,
    ButtonVariantsExampleComponent,
    ButtonAsLinkExampleComponent,
  },
};

export default ButtonPage;
