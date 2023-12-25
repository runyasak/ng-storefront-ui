import { NgDocPage } from '@ng-doc/core';
import BaseComponentsCategory from '../ng-doc.category';
import { ButtonSizesExampleComponent } from '../../../components/button-sizes-example.component';

const ButtonPage: NgDocPage = {
  title: 'Button',
  mdFile: './index.md',
  category: BaseComponentsCategory,
  demos: { ButtonSizesExampleComponent },
};

export default ButtonPage;
