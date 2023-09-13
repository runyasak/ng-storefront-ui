
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-info',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="info">
      <svg:path d='M13.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11 16a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0v4Z'/><svg:path fill-rule='evenodd' d='M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8Z' clip-rule='evenodd'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconInfoComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
