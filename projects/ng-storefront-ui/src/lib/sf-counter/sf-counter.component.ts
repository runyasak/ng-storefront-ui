import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfCounterSize } from '../../types/sf-counter.type';

@Component({
  selector: 'sf-counter',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfCounterComponent {
  @Input() size: keyof typeof SfCounterSize = SfCounterSize.base;

  @Input() pill = false;

  @HostBinding('class') get hostClass() {
    return [
      `inline-flex items-center before:content-['('] after:content-[')'] text-neutral-500`,
      this.sizeClasses.join(' '),
      this.pill
        ? 'rounded-full py-0.5 font-medium ring-1 ring-neutral-200 ring-inset before:content-none after:content-none'
        : '',
    ].join(' ');
  }

  @HostBinding('attr.data-testid') dataTestId = 'counter';

  get sizeClasses() {
    switch (this.size) {
      case SfCounterSize['3xs']:
        return ['text-3xs', this.pill ? 'px-1' : ''];
      case SfCounterSize['2xs']:
        return ['text-2xs', this.pill ? 'px-1.5' : ''];
      case SfCounterSize.xs:
        return ['text-xs', this.pill ? 'px-2' : ''];
      case SfCounterSize.sm:
        return ['text-sm', this.pill ? 'px-2.5' : ''];
      case SfCounterSize.lg:
        return ['text-lg', this.pill ? 'px-3.5' : ''];
      default:
        return ['text-base', this.pill ? 'px-3' : ''];
    }
  }
}
