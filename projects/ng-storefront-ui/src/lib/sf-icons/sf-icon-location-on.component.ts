
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-location-on',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="location-on">
      <svg:path d='M10 10c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Z'/><svg:path fill-rule='evenodd' d='M4 10.2c0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2s-8 3.22-8 8.2Zm2 0C6 6.386 8.842 4 12 4s6 2.386 6 6.2c0 1.073-.416 2.424-1.51 4.097-.986 1.51-2.465 3.191-4.486 5.042-2.025-1.851-3.506-3.532-4.494-5.042C6.416 12.623 6 11.273 6 10.2Z' clip-rule='evenodd'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconLocationOnComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
