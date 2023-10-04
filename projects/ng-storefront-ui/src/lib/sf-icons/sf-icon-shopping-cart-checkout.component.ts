import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
import { SfIconSize } from '../../types';

@Component({
  selector: 'sf-icon-shopping-cart-checkout',
  standalone: true,
  imports: [CommonModule, SfIconBaseComponent],
  template: `<sf-icon-base
    [size]="size"
    viewBox="0 0 24 24"
    data-testid="shopping-cart-checkout"
    [svgClass]="svgClass"
  >
    <svg:path
      d="M7 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 7 18c.55 0 1.02.196 1.412.587C8.804 18.98 9 19.45 9 20s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 15 20c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 17 18c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 22ZM11.3 9.3a.948.948 0 0 1-.275-.7.95.95 0 0 1 .275-.7l.875-.9H9a.968.968 0 0 1-.713-.287A.968.968 0 0 1 8 6c0-.283.096-.52.287-.713A.968.968 0 0 1 9 5h3.175l-.9-.9a.916.916 0 0 1-.287-.7c.008-.267.112-.5.312-.7.2-.183.433-.28.7-.288.267-.008.5.088.7.288l2.6 2.6c.1.1.17.208.212.325.042.117.063.242.063.375s-.02.258-.063.375a.878.878 0 0 1-.212.325l-2.6 2.6a.977.977 0 0 1-.688.287.93.93 0 0 1-.712-.287ZM7 17c-.767 0-1.346-.33-1.737-.988-.392-.658-.396-1.312-.013-1.962L6.6 11.6 3 4H2a.968.968 0 0 1-.712-.288A.968.968 0 0 1 1 3c0-.283.096-.52.288-.712A.968.968 0 0 1 2 2h1.65c.183 0 .358.05.525.15a.93.93 0 0 1 .375.425L8.525 11h7.025l3.6-6.5A.973.973 0 0 1 20 4a.94.94 0 0 1 .863.487.937.937 0 0 1 .012.988L17.3 11.95c-.183.333-.43.592-.738.775A1.945 1.945 0 0 1 15.55 13H8.1L7 15h11a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.968.968 0 0 1 18 17H7Z"
    />
  </sf-icon-base>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfIconShoppingCartCheckoutComponent {
  @Input() size: keyof typeof SfIconSize = SfIconSize.base;

  @Input() svgClass: string | string[] = '';
}
