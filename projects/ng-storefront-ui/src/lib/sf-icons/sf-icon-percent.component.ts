
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-percent',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="percent">
      <svg:path d='M8 11a3.372 3.372 0 0 1-2.475-1.025A3.372 3.372 0 0 1 4.5 7.5c0-.967.342-1.792 1.025-2.475A3.372 3.372 0 0 1 8 4c.967 0 1.792.342 2.475 1.025A3.372 3.372 0 0 1 11.5 7.5c0 .967-.342 1.792-1.025 2.475A3.372 3.372 0 0 1 8 11Zm0-2c.417 0 .77-.146 1.063-.438.291-.291.437-.645.437-1.062 0-.417-.146-.77-.438-1.063A1.447 1.447 0 0 0 8 6c-.417 0-.77.146-1.063.438A1.447 1.447 0 0 0 6.5 7.5c0 .417.146.77.438 1.063C7.229 8.854 7.582 9 8 9Zm9 11a3.372 3.372 0 0 1-2.475-1.025A3.372 3.372 0 0 1 13.5 16.5c0-.967.342-1.792 1.025-2.475A3.372 3.372 0 0 1 17 13c.967 0 1.792.342 2.475 1.025A3.372 3.372 0 0 1 20.5 16.5c0 .967-.342 1.792-1.025 2.475A3.372 3.372 0 0 1 17 20Zm0-2c.417 0 .77-.146 1.063-.438.291-.291.437-.645.437-1.062 0-.417-.146-.77-.438-1.063A1.446 1.446 0 0 0 17 15c-.417 0-.77.146-1.063.438A1.446 1.446 0 0 0 15.5 16.5c0 .417.146.77.438 1.063.291.291.645.437 1.062.437ZM5.2 19.3a.948.948 0 0 1-.275-.7.95.95 0 0 1 .275-.7L18.4 4.7a.948.948 0 0 1 .7-.275.95.95 0 0 1 .7.275.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7L6.6 19.3a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconPercentComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
