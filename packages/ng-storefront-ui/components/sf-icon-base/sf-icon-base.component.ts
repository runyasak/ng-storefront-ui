import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfIconSize } from './sf-icon-base.type';

@Component({
  selector: 'sf-icon-base',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sf-icon-base.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfIconBaseComponent {
  @Input() content = '';

  @Input() size: keyof typeof SfIconSize = SfIconSize.base;

  @Input() viewBox = '';

  get sizeClasses() {
    switch (this.size) {
      case SfIconSize.xs:
        return 'w-4 h-4';
      case SfIconSize.sm:
        return 'w-5 h-5';
      case SfIconSize.lg:
        return 'w-8 h-8';
      case SfIconSize.xl:
        return 'w-10 h-10';
      case SfIconSize['2xl']:
        return 'w-14 h-14';
      case SfIconSize['3xl']:
        return 'w-24 h-24';
      case SfIconSize['4xl']:
        return 'w-48 h-48';
      default:
        return 'w-6 h-6';
    }
  }
}
