
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-remove-shopping-cart',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="remove-shopping-cart">
      <svg:path d='m15.823 12.995-2-2h1.725l2.75-5H8.823l-2-2h13.125c.383 0 .68.163.887.488.209.325.213.679.013 1.062l-3.55 6.4a2.07 2.07 0 0 1-.712.775c-.292.183-.546.275-.763.275Zm-8.825 9c-.55 0-1.02-.196-1.412-.588a1.926 1.926 0 0 1-.588-1.412c0-.55.196-1.02.588-1.413a1.926 1.926 0 0 1 1.412-.587c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.412a1.926 1.926 0 0 1-1.413.588Zm12.8.6-5.65-5.6h-6.55c-.733 0-1.292-.313-1.675-.938-.383-.624-.408-1.279-.075-1.962l1.05-2.15-1.8-4.05L1.373 4.17a.892.892 0 0 1-.262-.687.977.977 0 0 1 .287-.688.948.948 0 0 1 .7-.275.95.95 0 0 1 .7.275L21.223 21.22c.183.183.27.413.262.688a.977.977 0 0 1-.287.687.932.932 0 0 1-.688.275 1.02 1.02 0 0 1-.712-.275Zm-7.65-7.6-2-2h-1.55l-1 2h4.55Zm4.85 7c-.55 0-1.02-.196-1.413-.588a1.926 1.926 0 0 1-.587-1.412c0-.55.196-1.02.588-1.413a1.926 1.926 0 0 1 1.412-.587c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413s-.196 1.02-.588 1.412a1.926 1.926 0 0 1-1.412.588Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconRemoveShoppingCartComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
