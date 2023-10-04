import { Component, HostBinding, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sf-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<input
    [id]="inputId"
    [ngModel]="value"
    [disabled]="disabled"
    class="h-[18px] min-w-[18px] border-2 rounded-sm appearance-none cursor-pointer text-gray-500 hover:indeterminate:text-primary-800 enabled:active:checked:text-primary-900 checked:text-primary-700 checked:bg-checked-checkbox-current border-current indeterminate:bg-indeterminate-checkbox-current indeterminate:text-primary-700 disabled:text-gray-300 hover:text-gray-300 disabled:cursor-not-allowed enabled:hover:border-primary-800 enabled:active:border-primary-900 enabled:hover:checked:text-primary-800 enabled:hover:indeterminate:text-primary-800 enabled:checked:text-primary-700 enabled:indeterminate:text-primary-700 enabled:focus-visible:outline enabled:focus-visible:outline-offset"
    [ngClass]="inputClass"
    type="checkbox"
    data-testid="checkbox"
    [indeterminate]="indeterminate"
    (blur)="onTouched($event)"
    (ngModelChange)="handleValueChange($event)"
  />`,
  styles: [
    `
      :host.ng-touched.ng-invalid > input {
        @apply border-negative-700 enabled:hover:border-negative-800 enabled:active:border-negative-900 indeterminate:bg-none;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SfCheckboxComponent),
    },
  ],
})
export class SfCheckboxComponent implements ControlValueAccessor {
  @Input() value: boolean | undefined;

  @Input() disabled: boolean = false;

  @Input() indeterminate: boolean = false;

  @Input() inputId: string = '';

  @Input() inputClass: string | string[] = '';

  @Input() onChange: (value: boolean) => void = () => {};

  @Input() onTouched: (value: FocusEvent) => void = () => {};

  @HostBinding('class') hostClass = 'contents';

  handleValueChange(value: boolean) {
    this.writeValue(value);
    this.onChange(value);
  }

  writeValue(value: boolean) {
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
