
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-grid-view',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="grid-view">
      <svg:path d='M5 11c-.55 0-1.021-.196-1.413-.588A1.925 1.925 0 0 1 3 9V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 5 3h4c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v4c0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0 1 9 11H5Zm0 10a1.93 1.93 0 0 1-1.413-.587A1.928 1.928 0 0 1 3 19v-4c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 5 13h4c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v4a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 9 21H5Zm10-10c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0 1 13 9V5c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 15 3h4c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v4c0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0 1 19 11h-4Zm0 10c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 13 19v-4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 15 13h4c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v4a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 19 21h-4ZM5 9h4V5H5v4Zm10 0h4V5h-4v4Zm0 10h4v-4h-4v4ZM5 19h4v-4H5v4Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconGridViewComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
