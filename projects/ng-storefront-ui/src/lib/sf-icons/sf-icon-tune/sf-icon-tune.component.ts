import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
import { SfIconSize } from '../../../types/sf-icon-base.type';

@Component({
  selector: 'sf-icon-tune',
  standalone: true,
  imports: [CommonModule, SfIconBaseComponent],
  template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="tune">
    <svg:path
      d="M4 19a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 18c0-.283.096-.52.288-.712A.965.965 0 0 1 4 17h4c.283 0 .521.096.713.288A.967.967 0 0 1 9 18a.97.97 0 0 1-.287.712A.968.968 0 0 1 8 19H4ZM4 7a.967.967 0 0 1-.712-.287A.968.968 0 0 1 3 6c0-.283.096-.521.288-.713A.967.967 0 0 1 4 5h8a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 6a.97.97 0 0 1-.287.713A.97.97 0 0 1 12 7H4Zm8 14a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 20v-4c0-.283.096-.521.288-.713A.967.967 0 0 1 12 15a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 16v1h7c.283 0 .52.096.712.288A.965.965 0 0 1 21 18c0 .283-.096.52-.288.712A.965.965 0 0 1 20 19h-7v1a.97.97 0 0 1-.287.712A.968.968 0 0 1 12 21Zm-4-6a.968.968 0 0 1-.713-.288A.967.967 0 0 1 7 14v-1H4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 12c0-.283.096-.521.288-.713A.967.967 0 0 1 4 11h3v-1a.97.97 0 0 1 .287-.713A.97.97 0 0 1 8 9a.97.97 0 0 1 .713.287A.97.97 0 0 1 9 10v4a.97.97 0 0 1-.287.712A.968.968 0 0 1 8 15Zm4-2a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 12c0-.283.096-.521.288-.713A.967.967 0 0 1 12 11h8a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 20 13h-8Zm4-4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 15 8V4c0-.283.096-.521.288-.713A.967.967 0 0 1 16 3a.97.97 0 0 1 .712.287c.192.192.288.43.288.713v1h3a.97.97 0 0 1 .712.287c.192.192.288.43.288.713a.968.968 0 0 1-.288.713A.967.967 0 0 1 20 7h-3v1c0 .283-.096.52-.288.712A.965.965 0 0 1 16 9Z"
    />
  </sf-icon-base>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfIconTuneComponent {
  @Input() size: keyof typeof SfIconSize = SfIconSize.base;
}