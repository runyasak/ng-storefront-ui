import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sf-accordion-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <details [open]="value" data-testid="accordion-item" [ngClass]="parentClass">
      <summary
        [ngClass]="[
          summaryClass,
          'cursor-pointer list-none focus-visible:rounded-sm focus-visible:outline focus-visible:outline-offset [&::-webkit-details-marker]:hidden'
        ]"
        (click)="$event.preventDefault(); handleValueChange(!value)"
        (blur)="onTouched($event)"
      >
        <ng-content select="[summary]" />
      </summary>

      <ng-content></ng-content>
    </details>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SfAccordionItemComponent),
    },
  ],
})
export class SfAccordionItemComponent implements ControlValueAccessor {
  @Input() value = false;

  @Input() disabled = false;

  @Input() parentClass: string = '';

  @Input() summaryClass: string = '';

  @Input() onChange: (value: boolean) => void = () => {};

  @Input() onTouched: (value: FocusEvent) => void = () => {};

  handleValueChange(value: boolean) {
    this.writeValue(value);
    this.onChange(value);
  }

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(onChange: (value: boolean) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: (value: FocusEvent) => void) {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
