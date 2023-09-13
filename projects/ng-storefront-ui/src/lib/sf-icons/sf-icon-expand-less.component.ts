
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-expand-less',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="expand-less">
      <svg:path d='M17 15a.998.998 0 0 1-1.41 0l-3.885-3.875L7.82 15a.998.998 0 0 1-1.41-1.412l4.588-4.587a1 1 0 0 1 1.414 0L17 13.589A.998.998 0 0 1 17 15Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconExpandLessComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
