
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-vuestorefront',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="vuestorefront">
      <svg:path d='m9.747 2.824.839-.838a2 2 0 0 1 2.828 0l.838.838a2 2 0 0 1 0 2.828l-.838.839a2 2 0 0 1-2.828 0l-.839-.839a2 2 0 0 1 0-2.828Zm3.69 10.978 4.482-4.483a2 2 0 0 1 2.829 0L23 11.571l-11 11-11-11 2.276-2.276a1.999 1.999 0 0 1 2.827 0l4.506 4.507a1.998 1.998 0 0 0 2.828 0Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconVuestorefrontComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
