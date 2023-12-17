import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sf-accordion-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <details [open]="ngModel" data-testid="accordion-item" [ngClass]="parentClass">
      <summary
        [ngClass]="[
          summaryClass,
          'cursor-pointer list-none focus-visible:rounded-sm focus-visible:outline focus-visible:outline-offset [&::-webkit-details-marker]:hidden'
        ]"
        (click)="$event.preventDefault(); ngModelChange.next(!ngModel)"
      >
        <ng-content select="[summary]" />
      </summary>

      <ng-content></ng-content>
    </details>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfAccordionItemComponent {
  @Input() ngModel: boolean = false;

  @Input() parentClass: string = '';

  @Input() summaryClass: string = '';

  @Output() ngModelChange = new EventEmitter<boolean>();
}
