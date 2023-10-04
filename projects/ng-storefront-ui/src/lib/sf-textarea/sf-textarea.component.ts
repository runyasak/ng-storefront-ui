import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfTextareaSize } from '../../types';

@Component({
  selector: '[sf-textarea]',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styles: [
    `
      :host.ng-touched.ng-invalid {
        @apply ring-2 ring-negative-700;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfTextareaComponent {
  @Input() size: keyof typeof SfTextareaSize = SfTextareaSize.base;

  sizeClasses = {
    [SfTextareaSize.sm]: ' h-[56px] py-[6px] pl-4 pr-3',
    [SfTextareaSize.base]: 'h-[64px] py-2 pl-4 pr-3',
    [SfTextareaSize.lg]: 'h-[72px], p-3 pl-4',
  };

  @HostBinding('class') get hostClass() {
    return [
      'px-4 bg-white rounded-md text-neutral-900 ring-inset hover:ring-primary-800 focus:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2 outline-none ring-1 ring-neutral-200',
      this.sizeClasses[this.size],
    ].join(' ');
  }

  @HostBinding('attr.data-testid') dataTestId = 'textarea';
}
