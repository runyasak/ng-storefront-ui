import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
import { SfIconSize } from '../../types';

@Component({
  selector: 'sf-icon-add-shopping-cart',
  standalone: true,
  imports: [CommonModule, SfIconBaseComponent],
  template: `<sf-icon-base
    [size]="size"
    viewBox="0 0 24 24"
    data-testid="add-shopping-cart"
    [svgClass]="svgClass"
  >
    <svg:path
      d="M12 9a.968.968 0 0 1-.713-.287A.967.967 0 0 1 11 8V6H9a.968.968 0 0 1-.713-.287A.968.968 0 0 1 8 5c0-.283.096-.52.287-.713A.968.968 0 0 1 9 4h2V2a.97.97 0 0 1 .287-.712A.968.968 0 0 1 12 1a.97.97 0 0 1 .713.288A.968.968 0 0 1 13 2v2h2c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713A.968.968 0 0 1 15 6h-2v2c0 .283-.096.52-.287.713A.968.968 0 0 1 12 9ZM7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 17 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22ZM7 17c-.767 0-1.346-.33-1.737-.988-.392-.658-.396-1.312-.013-1.962L6.6 11.6 3 4H2a.968.968 0 0 1-.712-.288A.968.968 0 0 1 1 3c0-.283.096-.52.288-.712A.968.968 0 0 1 2 2h1.65c.183 0 .358.05.525.15a.93.93 0 0 1 .375.425L8.525 11h7.025l3.6-6.5A.973.973 0 0 1 20 4a.94.94 0 0 1 .863.487.937.937 0 0 1 .012.988L17.3 11.95c-.183.333-.43.592-.738.775A1.945 1.945 0 0 1 15.55 13H8.1L7 15h11a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.968.968 0 0 1 18 17H7Z"
    />
  </sf-icon-base>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfIconAddShoppingCartComponent {
  @Input() size: keyof typeof SfIconSize = SfIconSize.base;

  @Input() svgClass: string | string[] = '';
}
