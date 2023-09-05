import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfLinkVariant } from '../../types/sf-link.type';

@Component({
  selector: '[sf-link]',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfLinkComponent {
  @Input() variant: keyof typeof SfLinkVariant = SfLinkVariant.primary;

  variantClasses = {
    [SfLinkVariant.primary]:
      'text-primary-700 underline hover:text-primary-800 active:text-primary-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm',
    [SfLinkVariant.secondary]:
      'underline hover:text-primary-800 active:text-primary-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm',
  };

  @HostBinding('class') get hostClass() {
    return [
      'focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm',
      this.variantClasses[this.variant],
    ].join(' ');
  }

  @HostBinding('attr.data-testid') dataTestId = 'link';
}
