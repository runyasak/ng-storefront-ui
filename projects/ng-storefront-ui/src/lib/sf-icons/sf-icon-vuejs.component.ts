import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
import { SfIconSize } from '../../types';

@Component({
  selector: 'sf-icon-vuejs',
  standalone: true,
  imports: [CommonModule, SfIconBaseComponent],
  template: `<sf-icon-base
    [size]="size"
    viewBox="0 0 24 24"
    data-testid="vuejs"
    [svgClass]="svgClass"
  >
    <svg:path
      d="M18.526 2.3H14.75L12 6.65 9.643 2.3H1l11 18.843L23 2.3h-4.474ZM3.736 3.871h2.641L12 13.604l5.618-9.733h2.642L12 18.024 3.735 3.871Z"
    />
  </sf-icon-base>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfIconVuejsComponent {
  @Input() size: keyof typeof SfIconSize = SfIconSize.base;

  @Input() svgClass: string | string[] = '';
}
