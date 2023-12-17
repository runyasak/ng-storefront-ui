import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  forwardRef,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfSelectSize, StyleClass } from '../../types';
import { SfIconExpandMoreComponent } from '../sf-icons';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sf-select',
  standalone: true,
  imports: [CommonModule, FormsModule, SfIconExpandMoreComponent],
  template: `
    <span class="relative flex flex-col rounded-md" [ngClass]="wrapperClass">
      <select
        class="cursor-pointer appearance-none rounded-md bg-transparent pl-4 pr-3.5 text-neutral-900 outline-none ring-1 ring-inset ring-neutral-300 hover:ring-primary-700 focus:ring-2 focus:ring-primary-700 active:ring-2 active:ring-primary-700 disabled:cursor-not-allowed disabled:bg-disabled-100 disabled:text-disabled-900 disabled:ring-disabled-200"
        data-testid="select-input"
        [required]="required"
        [disabled]="disabled"
        [ngClass]="{
          'py-1.5': size === sfSelectSizeEnum.sm,
          'py-2': size === sfSelectSizeEnum.base,
          'py-3 text-base': size === sfSelectSizeEnum.lg
        }"
        [ngModel]="value"
        (blur)="close($event)"
        (change)="close($event)"
        (click)="open()"
        (keydown.space)="open()"
        (ngModelChange)="handleValueChange($event)"
      >
        @if (placeholder) {
          <option
            disabled
            hidden
            class="bg-neutral-300 text-sm"
            value=""
            [ngClass]="{
              'text-base': size === sfSelectSizeEnum.lg
            }"
            data-testid="select-placeholder"
          >
            {{ placeholder }}
          </option>
        }

        <ng-content />
      </select>

      <ng-content select="[chevron]" />

      @if (!hasChevronContent()) {
        <sf-icon-expand-more
          [svgClass]="[
            'absolute -translate-y-1 pointer-events-none top-1/3 right-4 transition easy-in-out duration-0.5',
            disabled ? 'text-disabled-500' : 'text-neutral-500',
            isOpen() ? 'rotate-180' : ''
          ]"
        />
      }
    </span>
  `,
  styles: [
    `
      :host.ng-touched.ng-invalid select {
        @apply ring-2 !ring-negative-700;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SfSelectComponent),
    },
  ],
})
export class SfSelectComponent implements ControlValueAccessor {
  @Input() size: keyof typeof SfSelectSize = SfSelectSize.base;

  @Input() wrapperClass: StyleClass = '';

  @Input() value: unknown = '';

  @Input() placeholder: string = '';

  @Input() required = false;

  @Input() disabled = false;

  @Input() onChange: (value: unknown) => void = () => {};

  @Input() onTouched: (value: unknown) => void = () => {};

  sfSelectSizeEnum = SfSelectSize;

  isOpen = signal(false);

  constructor(private elRef: ElementRef) {}

  close(event: FocusEvent | Event) {
    this.onTouched(event);
    this.isOpen.set(false);
  }

  open() {
    this.isOpen.set(true);
  }

  hasChevronContent() {
    return !!this.elRef.nativeElement.querySelector('[chevron]');
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
