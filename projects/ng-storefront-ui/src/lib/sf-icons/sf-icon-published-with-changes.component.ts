import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
import { SfIconSize } from '../../types';

@Component({
  selector: 'sf-icon-published-with-changes',
  standalone: true,
  imports: [CommonModule, SfIconBaseComponent],
  template: `<sf-icon-base
    [size]="size"
    viewBox="0 0 24 24"
    data-testid="published-with-changes"
    [svgClass]="svgClass"
  >
    <svg:path
      d="M14.175 2.225c2.25.5 4.117 1.65 5.6 3.45C21.258 7.475 22 9.583 22 12c0 1.517-.304 2.917-.913 4.2a10.03 10.03 0 0 1-2.487 3.3H20c.283 0 .52.096.712.288A.965.965 0 0 1 21 20.5c0 .284-.096.52-.288.712A.965.965 0 0 1 20 21.5h-4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 15 20.5v-4a.97.97 0 0 1 .288-.713A.967.967 0 0 1 16 15.5a.97.97 0 0 1 .712.287c.192.192.288.43.288.713v1.725a8.393 8.393 0 0 0 2.188-2.725c.541-1.066.812-2.233.812-3.5 0-1.916-.587-3.588-1.762-5.013-1.175-1.425-2.655-2.345-4.438-2.762a.99.99 0 0 1-.575-.35A.96.96 0 0 1 13 3.25c0-.333.117-.608.35-.825a.83.83 0 0 1 .825-.2Zm-4.35 19.55c-2.25-.5-4.117-1.65-5.6-3.45C2.742 16.525 2 14.417 2 12c0-1.517.304-2.917.913-4.2A10.03 10.03 0 0 1 5.4 4.5H4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 3.5a.97.97 0 0 1 .288-.713A.967.967 0 0 1 4 2.5h4a.97.97 0 0 1 .713.287A.97.97 0 0 1 9 3.5v4a.97.97 0 0 1-.287.713A.97.97 0 0 1 8 8.5a.97.97 0 0 1-.713-.287A.97.97 0 0 1 7 7.5V5.775a8.092 8.092 0 0 0-2.188 2.713C4.271 9.563 4 10.733 4 12c0 1.917.588 3.588 1.763 5.012 1.175 1.425 2.654 2.346 4.437 2.763a.99.99 0 0 1 .575.35.96.96 0 0 1 .225.625c0 .334-.117.608-.35.825a.83.83 0 0 1-.825.2Zm.75-5.6c-.133 0-.258-.02-.375-.062a.883.883 0 0 1-.325-.213L7.05 13.05a.976.976 0 0 1-.287-.688.928.928 0 0 1 .287-.712.948.948 0 0 1 .7-.275.95.95 0 0 1 .7.275l2.125 2.125L15.55 8.8c.2-.2.433-.296.7-.288.267.009.5.113.7.313.183.2.28.433.288.7a.918.918 0 0 1-.288.7L11.275 15.9a.88.88 0 0 1-.325.213 1.116 1.116 0 0 1-.375.062Z"
    />
  </sf-icon-base>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfIconPublishedWithChangesComponent {
  @Input() size: keyof typeof SfIconSize = SfIconSize.base;

  @Input() svgClass: string | string[] = '';
}
