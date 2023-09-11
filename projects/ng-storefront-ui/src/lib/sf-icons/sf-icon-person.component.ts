
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-person',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="person">
      <svg:path d='M12 12c-1.1 0-2.042-.392-2.825-1.175C8.392 10.042 8 9.1 8 8s.392-2.042 1.175-2.825C9.958 4.392 10.9 4 12 4s2.042.392 2.825 1.175C15.608 5.958 16 6.9 16 8s-.392 2.042-1.175 2.825C14.042 11.608 13.1 12 12 12Zm6 8H6c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 4 18v-.8c0-.567.146-1.088.438-1.563A2.914 2.914 0 0 1 5.6 14.55a14.866 14.866 0 0 1 3.15-1.163A13.776 13.776 0 0 1 12 13c1.1 0 2.183.129 3.25.387 1.067.259 2.117.646 3.15 1.163.483.25.87.612 1.162 1.087.292.475.438.996.438 1.563v.8a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 18 20ZM6 18h12v-.8a.943.943 0 0 0-.137-.5.977.977 0 0 0-.363-.35 13.03 13.03 0 0 0-2.725-1.013 11.615 11.615 0 0 0-5.55 0A13.03 13.03 0 0 0 6.5 16.35a.97.97 0 0 0-.5.85v.8Zm6-8c.55 0 1.021-.196 1.413-.588C13.804 9.021 14 8.55 14 8c0-.55-.196-1.02-.587-1.412A1.927 1.927 0 0 0 12 6c-.55 0-1.02.196-1.412.588A1.923 1.923 0 0 0 10 8c0 .55.196 1.02.588 1.412.391.392.862.588 1.412.588Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconPersonComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
