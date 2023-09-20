import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfInputSize } from '../../types';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sf-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <span
      class="flex items-center gap-2 px-4 bg-white rounded-md ring-1 text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2 ring-neutral-200"
      [ngClass]="[sizeClasses[this.size], wrapperClassString]"
    >
      <ng-content select="[prefix]" />
      <input
        data-testid="input-field"
        class="min-w-[80px] w-full text-base outline-none appearance-none text-neutral-900 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent"
        [ngModel]="value"
        [disabled]="disabled"
        [readOnly]="readOnly"
        [size]="1"
        [type]="type"
        [placeholder]="placeholder"
        [required]="required"
        (blur)="onTouched($event)"
        (ngModelChange)="handleValueChange($event)"
      />
      <ng-content select="[suffix]" />
    </span>
  `,
  styles: [
    `
      :host.ng-touched.ng-invalid > span {
        @apply ring-2 ring-negative-700;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SfInputComponent),
    },
  ],
})
export class SfInputComponent implements ControlValueAccessor {
  @Input() size: keyof typeof SfInputSize = SfInputSize.base;

  @Input() value: unknown = '';

  @Input() required: boolean = false;

  @Input() disabled: boolean = false;

  @Input() readOnly: boolean = false;

  @Input() type: string = '';

  @Input() placeholder: string = '';

  @Input() wrapperClass: string | string[] = '';

  @Input() onChange: (value: unknown) => void = () => {};

  @Input() onTouched: (value: unknown) => void = () => {};

  sizeClasses = {
    [SfInputSize.sm]: ' h-[32px]',
    [SfInputSize.base]: 'h-[40px]',
    [SfInputSize.lg]: 'h-[48px]',
  };

  get wrapperClassString() {
    return Array.isArray(this.wrapperClass) ? this.wrapperClass.join(' ') : this.wrapperClass;
  }

  handleValueChange(value: string) {
    this.writeValue(value);
    this.onChange(value);
  }

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(onChange: (value: unknown) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: (value: unknown) => void) {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
