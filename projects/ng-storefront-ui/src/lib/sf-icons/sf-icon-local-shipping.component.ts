
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-local-shipping',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="local-shipping">
      <svg:path d='M6 20a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 3 17c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 1 15V6c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 3 4h12c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v2h2.5c.167 0 .317.033.45.1s.25.167.35.3l2.5 3.325a.883.883 0 0 1 .15.275c.033.1.05.208.05.325V16c0 .283-.096.52-.288.712A.965.965 0 0 1 22 17h-1c0 .833-.292 1.542-.875 2.125A2.893 2.893 0 0 1 18 20a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 15 17H9c0 .833-.292 1.542-.875 2.125A2.893 2.893 0 0 1 6 20Zm0-2a.968.968 0 0 0 .713-.288A.967.967 0 0 0 7 17a.967.967 0 0 0-.287-.712A.968.968 0 0 0 6 16a.968.968 0 0 0-.713.288A.967.967 0 0 0 5 17c0 .283.096.52.287.712.192.192.43.288.713.288ZM3 6v9h.8c.283-.3.608-.542.975-.725A2.701 2.701 0 0 1 6 14c.45 0 .858.092 1.225.275.367.183.692.425.975.725H15V6H3Zm15 12c.283 0 .52-.096.712-.288A.965.965 0 0 0 19 17a.965.965 0 0 0-.288-.712A.965.965 0 0 0 18 16a.965.965 0 0 0-.712.288A.965.965 0 0 0 17 17c0 .283.096.52.288.712A.965.965 0 0 0 18 18Zm-1-5h4.25L19 10h-2v3Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconLocalShippingComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
