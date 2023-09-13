
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-arrow-upward',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="arrow-upward">
      <svg:path d='M12 20a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 19V7.825L6.125 12.7c-.2.2-.438.3-.713.3a.973.973 0 0 1-.712-.3.96.96 0 0 1-.3-.7c0-.267.1-.5.3-.7l6.6-6.6a.88.88 0 0 1 .325-.213 1.212 1.212 0 0 1 .763 0 .681.681 0 0 1 .312.213l6.6 6.6c.2.2.3.433.3.7 0 .267-.1.5-.3.7-.2.2-.438.3-.713.3a.973.973 0 0 1-.712-.3L13 7.825V19a.97.97 0 0 1-.287.712A.968.968 0 0 1 12 20Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconArrowUpwardComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
