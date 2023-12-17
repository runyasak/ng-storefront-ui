import { Component, HostBinding, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sf-radio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<input
    [id]="inputId"
    [ngModel]="value"
    [disabled]="disabled"
    class="h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-neutral-500 bg-clip-content p-[3px] checked:border-primary-700 checked:bg-primary-700 hover:border-primary-700 hover:checked:border-primary-800 hover:checked:bg-primary-800 focus-visible:outline focus-visible:outline-offset active:border-primary-900 active:checked:border-primary-900 active:checked:bg-primary-900 disabled:cursor-not-allowed disabled:border-disabled-500 disabled:checked:border-disabled-500 disabled:checked:bg-disabled-500"
    [ngClass]="inputClass"
    [value]="radioValue"
    type="radio"
    data-testid="radio"
    [name]="name"
    (blur)="onTouched($event)"
    (ngModelChange)="handleValueChange($event)"
  />`,
  styles: [
    `
      :host.ng-touched.ng-invalid > input {
        @apply border-negative-700 checked:bg-negative-700 hover:border-negative-800 hover:checked:bg-negative-800 active:border-negative-900 active:checked:bg-negative-900;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SfRadioComponent),
    },
  ],
})
export class SfRadioComponent implements ControlValueAccessor {
  @Input() value: string = '';

  @Input() radioValue: string = '';

  @Input() disabled: boolean = false;

  @Input() inputId: string = '';

  @Input() inputClass: string | string[] = '';

  @Input() name: string = '';

  @Input() onChange: (value: string) => void = () => {};

  @Input() onTouched: (value: FocusEvent) => void = () => {};

  @HostBinding('class') hostClass = 'contents';

  handleValueChange(value: string) {
    this.writeValue(value);
    this.onChange(value);
  }

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(onChange: (value: string) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: (value: FocusEvent) => void) {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
