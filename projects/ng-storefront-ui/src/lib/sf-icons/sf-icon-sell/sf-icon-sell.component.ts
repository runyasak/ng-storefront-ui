import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
import { SfIconSize } from '../../../types';

@Component({
  selector: 'sf-icon-sell',
  standalone: true,
  imports: [CommonModule, SfIconBaseComponent],
  template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="sell">
    <svg:path
      d="M14.25 21.4c-.383.383-.858.575-1.425.575-.567 0-1.042-.192-1.425-.575l-8.8-8.8a2.069 2.069 0 0 1-.6-1.45V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 4 2h7.15c.283 0 .55.054.8.162.25.109.467.255.65.438l8.8 8.825c.383.383.575.854.575 1.412a1.92 1.92 0 0 1-.575 1.413l-7.15 7.15ZM6.5 8c.417 0 .77-.146 1.062-.438C7.854 7.271 8 6.917 8 6.5c0-.417-.146-.77-.438-1.062A1.444 1.444 0 0 0 6.5 5c-.417 0-.77.146-1.062.438A1.444 1.444 0 0 0 5 6.5c0 .417.146.77.438 1.062.291.292.645.438 1.062.438Z"
    />
  </sf-icon-base>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfIconSellComponent {
  @Input() size: keyof typeof SfIconSize = SfIconSize.base;
}
