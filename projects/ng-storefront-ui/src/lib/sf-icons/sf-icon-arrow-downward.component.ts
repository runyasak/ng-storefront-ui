
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-arrow-downward',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="arrow-downward">
      <svg:path d='M12 19.575a1.1 1.1 0 0 1-.375-.063.872.872 0 0 1-.325-.212l-6.6-6.6c-.2-.2-.3-.438-.3-.713 0-.275.1-.512.3-.712.2-.2.433-.3.7-.3.267 0 .5.1.7.3l4.9 4.9v-11.2c0-.283.096-.517.288-.7A.99.99 0 0 1 12 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 5v11.175l4.9-4.9c.2-.2.433-.3.7-.3.267 0 .5.1.7.3.2.2.3.437.3.712 0 .275-.1.513-.3.713l-6.6 6.6c-.1.1-.208.17-.325.212a1.098 1.098 0 0 1-.375.063Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconArrowDownwardComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
