
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-close',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="close">
      <svg:path d='M18.295 5.705a.998.998 0 0 1 0 1.41L13.41 12l4.885 4.885a.997.997 0 1 1-1.41 1.41L12 13.41l-4.885 4.885a.997.997 0 1 1-1.41-1.41L10.59 12 5.705 7.115a.997.997 0 0 1 1.41-1.41L12 10.59l4.885-4.885a.997.997 0 0 1 1.41 0Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconCloseComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
