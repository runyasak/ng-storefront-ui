
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-sort',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="sort">
      <svg:path d='M4 18a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2H4ZM3 7a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 6a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H4Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconSortComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
