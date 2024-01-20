import { NgDocPage } from '@ng-doc/core';
import BaseComponentsCategory from '../ng-doc.category';
import { BasicAccordionExampleComponent } from '../../../components/basic-accordion-example.component';
import { AccordionGroupExampleComponent } from '../../../components/accordion-group-example.component';

const AccordionItemPage: NgDocPage = {
  title: 'Accordion Item',
  mdFile: './index.md',
  category: BaseComponentsCategory,
  demos: { BasicAccordionExampleComponent, AccordionGroupExampleComponent },
};

export default AccordionItemPage;
