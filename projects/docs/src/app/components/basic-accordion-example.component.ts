import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SfAccordionItemComponent } from 'ng-storefront-ui';

@Component({
  selector: 'docs-basic-accordion-example',
  standalone: true,
  imports: [SfAccordionItemComponent, FormsModule],
  template: `
    <div class="divide-y divide-solid rounded-md border border-neutral-200 text-neutral-900">
      @for (item of accordionItems; track $index) {
        <sf-accordion-item class="block" [(ngModel)]="opened[$index]">
          <p summary class="active:primary-100 bg-white p-4 font-medium hover:bg-primary-100">
            {{ item.summary }}
          </p>
          <p class="bg-white p-4">{{ item.details }}</p>
        </sf-accordion-item>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicAccordionExampleComponent {
  opened: number[] = [];

  accordionItems = [
    {
      id: 'acc-1',
      summary: 'Where is my order?',
      details:
        'We will inform you about the expected delivery time of your order in checkout and in your order confirmation email.',
    },
    {
      id: 'acc-2',
      summary: 'What if an item is out of stock?',
      details:
        "If an item you're interested in is sold out, you can register to be notified when your size is back in stock.",
    },
    {
      id: 'acc-3',
      summary: 'How do I cancel my order?',
      details:
        "If you made a mistake or simply changed your mind after placing an order, there's no need to fuss. As long as your parcel has yet to be picked and packed in our warehouse, you'll have the option to cancel.",
    },
  ];
}
