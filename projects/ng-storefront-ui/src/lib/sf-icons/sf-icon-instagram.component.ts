import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
import { SfIconSize } from '../../types';

@Component({
  selector: 'sf-icon-instagram',
  standalone: true,
  imports: [CommonModule, SfIconBaseComponent],
  template: `<sf-icon-base
    [size]="size"
    viewBox="0 0 24 24"
    data-testid="instagram"
    [svgClass]="svgClass"
  >
    <svg:path
      d="M12.003 6.871a5.118 5.118 0 0 0-5.127 5.127 5.118 5.118 0 0 0 5.127 5.126 5.118 5.118 0 0 0 5.126-5.126 5.118 5.118 0 0 0-5.126-5.127Zm0 8.46a3.339 3.339 0 0 1-3.333-3.333 3.336 3.336 0 0 1 3.333-3.333 3.336 3.336 0 0 1 3.333 3.333 3.34 3.34 0 0 1-3.333 3.333Zm6.532-8.67c0 .665-.536 1.196-1.196 1.196a1.196 1.196 0 1 1 1.196-1.196Zm3.395 1.214c-.076-1.602-.442-3.02-1.615-4.19-1.169-1.169-2.588-1.534-4.19-1.615-1.65-.093-6.599-.093-8.25 0-1.597.076-3.016.442-4.19 1.611-1.173 1.169-1.534 2.588-1.614 4.19-.094 1.65-.094 6.599 0 8.25.076 1.601.441 3.02 1.615 4.19 1.173 1.168 2.588 1.534 4.19 1.614 1.65.094 6.599.094 8.25 0 1.601-.076 3.02-.442 4.189-1.615 1.169-1.169 1.535-2.588 1.615-4.19.094-1.65.094-6.594 0-8.245Zm-2.133 10.017a3.375 3.375 0 0 1-1.9 1.9c-1.316.523-4.44.402-5.894.402-1.455 0-4.583.116-5.894-.401a3.374 3.374 0 0 1-1.901-1.901c-.522-1.316-.402-4.44-.402-5.894 0-1.455-.116-4.582.402-5.894a3.374 3.374 0 0 1 1.9-1.901c1.317-.522 4.44-.402 5.895-.402 1.454 0 4.582-.116 5.894.402a3.374 3.374 0 0 1 1.9 1.9c.523 1.317.402 4.44.402 5.895 0 1.454.12 4.582-.402 5.894Z"
    />
  </sf-icon-base>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfIconInstagramComponent {
  @Input() size: keyof typeof SfIconSize = SfIconSize.base;

  @Input() svgClass: string | string[] = '';
}
