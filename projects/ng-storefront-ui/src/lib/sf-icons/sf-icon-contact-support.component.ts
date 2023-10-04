import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
import { SfIconSize } from '../../types';

@Component({
  selector: 'sf-icon-contact-support',
  standalone: true,
  imports: [CommonModule, SfIconBaseComponent],
  template: `<sf-icon-base
    [size]="size"
    viewBox="0 0 24 24"
    data-testid="contact-support"
    [svgClass]="svgClass"
  >
    <svg:path
      d="m13 22-.25-3h-.25c-2.367 0-4.375-.825-6.025-2.475C4.825 14.875 4 12.867 4 10.5c0-2.367.825-4.375 2.475-6.025C8.125 2.825 10.133 2 12.5 2c1.183 0 2.287.22 3.312.662a8.6 8.6 0 0 1 2.701 1.825 8.588 8.588 0 0 1 1.824 2.7A8.279 8.279 0 0 1 21 10.5c0 2.533-.758 4.804-2.275 6.812C17.208 19.321 15.3 20.883 13 22Zm-.525-6.025c.283 0 .525-.1.725-.3.2-.2.3-.442.3-.725s-.1-.525-.3-.725c-.2-.2-.442-.3-.725-.3s-.525.1-.725.3c-.2.2-.3.442-.3.725s.1.525.3.725c.2.2.442.3.725.3ZM12.5 12.8c.183 0 .35-.067.5-.2a.988.988 0 0 0 .3-.55c.033-.217.125-.413.275-.588.15-.175.408-.445.775-.812.3-.3.55-.625.75-.975.2-.35.3-.725.3-1.125 0-.85-.287-1.488-.862-1.913C13.963 6.212 13.283 6 12.5 6c-.583 0-1.087.133-1.512.4a3.41 3.41 0 0 0-1.038 1 .617.617 0 0 0-.063.575c.075.2.23.342.463.425a.65.65 0 0 0 .5 0c.167-.067.317-.192.45-.375a1.67 1.67 0 0 1 .488-.45c.191-.117.429-.175.712-.175.45 0 .788.125 1.013.375.225.25.337.525.337.825 0 .283-.083.537-.25.762a6.18 6.18 0 0 1-.6.688c-.467.4-.78.725-.938.975-.158.25-.254.592-.287 1.025-.017.2.046.375.188.525.141.15.32.225.537.225ZM15 17v1.35c1.183-1 2.146-2.17 2.887-3.512A8.822 8.822 0 0 0 19 10.5c0-1.817-.629-3.354-1.887-4.613C15.854 4.629 14.317 4 12.5 4c-1.817 0-3.354.629-4.612 1.887C6.629 7.146 6 8.683 6 10.5c0 1.817.63 3.354 1.888 4.613C9.146 16.371 10.683 17 12.5 17H15Z"
    />
  </sf-icon-base>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfIconContactSupportComponent {
  @Input() size: keyof typeof SfIconSize = SfIconSize.base;

  @Input() svgClass: string | string[] = '';
}
