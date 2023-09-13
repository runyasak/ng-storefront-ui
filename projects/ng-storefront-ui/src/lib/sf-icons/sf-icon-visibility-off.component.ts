
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-visibility-off',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="visibility-off">
      <svg:path d='m19.3 16.5-3.2-3.2c.133-.283.233-.57.3-.862.067-.292.1-.605.1-.938 0-1.25-.437-2.313-1.312-3.188S13.25 7 12 7a4.19 4.19 0 0 0-.938.1 4.246 4.246 0 0 0-.862.3L7.65 4.85a11.106 11.106 0 0 1 2.1-.638A11.607 11.607 0 0 1 12 4c2.383 0 4.525.63 6.425 1.887 1.9 1.259 3.325 2.896 4.275 4.913.05.083.083.187.1.312s.025.255.025.388a1.987 1.987 0 0 1-.125.7c-.383.85-.862 1.642-1.437 2.375A10.48 10.48 0 0 1 19.3 16.5Zm-.2 5.4-3.5-3.45a12.06 12.06 0 0 1-1.762.413c-.592.091-1.205.137-1.838.137-2.383 0-4.525-.629-6.425-1.887-1.9-1.259-3.325-2.896-4.275-4.913a.813.813 0 0 1-.1-.313 2.919 2.919 0 0 1 0-.762.796.796 0 0 1 .1-.3c.35-.75.767-1.442 1.25-2.075A13.291 13.291 0 0 1 4.15 7L2.075 4.9a.933.933 0 0 1-.275-.688c0-.275.1-.512.3-.712a.948.948 0 0 1 .7-.275.95.95 0 0 1 .7.275l17 17c.183.183.28.413.288.688a.931.931 0 0 1-.288.712.948.948 0 0 1-.7.275.949.949 0 0 1-.7-.275ZM12 16c.183 0 .354-.008.512-.025.159-.017.33-.05.513-.1l-5.4-5.4a3.25 3.25 0 0 0-.1.513 4.895 4.895 0 0 0-.025.512c0 1.25.437 2.313 1.312 3.188S10.75 16 12 16Zm2.65-4.15-3-3c.95-.15 1.725.117 2.325.8.6.683.825 1.417.675 2.2Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconVisibilityOffComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
