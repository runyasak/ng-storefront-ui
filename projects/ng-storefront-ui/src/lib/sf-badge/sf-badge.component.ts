import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfBadgePlacement, SfBadgeVariant } from '../../types/sf-badge.type';

@Component({
  selector: 'sf-badge',
  standalone: true,
  imports: [CommonModule],
  template: '{{ displayValue }}',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfBadgeComponent {
  @Input() content: string | number = '';

  @Input() max = 99;

  @Input() placement: keyof typeof SfBadgePlacement = SfBadgePlacement['top-right'];

  @Input() variant: keyof typeof SfBadgeVariant = SfBadgeVariant['standard'];

  @HostBinding('class') get hostClass() {
    const placementClass = {
      'top-right': 'top-0 right-0 -translate-x-0.5 translate-y-0.5',
      'top-left': 'top-0 left-0 translate-x-0.5 translate-y-0.5',
      'bottom-right': 'bottom-0 right-0 -translate-x-0.5 -translate-y-0.5',
      'bottom-left': 'bottom-0 left-0 translate-x-0.5 -translate-y-0.5',
    };

    return [
      'block absolute py-0.5 px-1 bg-secondary-700 font-medium text-white text-[8px] leading-[8px] rounded-xl',
      this.isDot ? 'w-[10px] h-[10px]' : 'min-w-[12px] min-h-[12px]',
      placementClass[this.placement],
    ].join(' ');
  }

  @HostBinding('attr.data-testid') dataTestId = 'badge';

  get isDot() {
    return this.variant === 'dot';
  }

  get displayValue() {
    if (this.isDot) {
      return '';
    }

    if (!Number.isNaN(this.content) && Number(this.content) > this.max) {
      return `${this.max}+`;
    }

    return this.content;
  }
}
