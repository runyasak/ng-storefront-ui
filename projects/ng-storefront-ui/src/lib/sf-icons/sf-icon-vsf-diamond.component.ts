import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
import { SfIconSize } from '../../types';

@Component({
  selector: 'sf-icon-vsf-diamond',
  standalone: true,
  imports: [CommonModule, SfIconBaseComponent],
  template: `<sf-icon-base
    [size]="size"
    viewBox="0 0 24 24"
    data-testid="vsf-diamond"
    [svgClass]="svgClass"
  >
    <svg:path
      d="M7.888 2.174c-.761.473-1.508 1.22-3 2.713-1.494 1.493-2.24 2.24-2.714 3a7.788 7.788 0 0 0 0 8.226c.473.76 1.22 1.506 2.712 2.999 1.494 1.494 2.24 2.24 3.002 2.714a7.787 7.787 0 0 0 8.224 0c.761-.474 1.508-1.22 3-2.713 1.494-1.493 2.24-2.24 2.714-3a7.788 7.788 0 0 0 0-8.225c-.474-.761-1.22-1.508-2.713-3-1.493-1.494-2.24-2.24-3-2.714a7.788 7.788 0 0 0-8.225 0Z"
    />
  </sf-icon-base>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfIconVsfDiamondComponent {
  @Input() size: keyof typeof SfIconSize = SfIconSize.base;

  @Input() svgClass: string | string[] = '';
}
