import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
import { SfIconSize } from '../../types';

@Component({
  selector: 'sf-icon-visibility',
  standalone: true,
  imports: [CommonModule, SfIconBaseComponent],
  template: `<sf-icon-base
    [size]="size"
    viewBox="0 0 24 24"
    data-testid="visibility"
    [svgClass]="svgClass"
  >
    <svg:path
      d="M12 16c1.25 0 2.313-.437 3.188-1.312S16.5 12.75 16.5 11.5c0-1.25-.437-2.313-1.312-3.188S13.25 7 12 7c-1.25 0-2.313.437-3.188 1.312S7.5 10.25 7.5 11.5c0 1.25.437 2.313 1.312 3.188S10.75 16 12 16Zm0-1.8c-.75 0-1.387-.263-1.912-.788A2.602 2.602 0 0 1 9.3 11.5c0-.75.263-1.388.788-1.913A2.603 2.603 0 0 1 12 8.8c.75 0 1.388.262 1.913.787.525.525.787 1.163.787 1.913s-.262 1.387-.787 1.912A2.605 2.605 0 0 1 12 14.2Zm0 4.8c-2.317 0-4.433-.612-6.35-1.837-1.917-1.225-3.367-2.88-4.35-4.963a.813.813 0 0 1-.1-.313 2.919 2.919 0 0 1 0-.775.811.811 0 0 1 .1-.312c.983-2.083 2.433-3.737 4.35-4.962C7.567 4.613 9.683 4 12 4c2.317 0 4.433.613 6.35 1.838 1.917 1.225 3.367 2.879 4.35 4.962.05.083.083.187.1.312a2.936 2.936 0 0 1 0 .775.813.813 0 0 1-.1.313c-.983 2.083-2.433 3.738-4.35 4.963C16.433 18.388 14.317 19 12 19Z"
    />
  </sf-icon-base>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfIconVisibilityComponent {
  @Input() size: keyof typeof SfIconSize = SfIconSize.base;

  @Input() svgClass: string | string[] = '';
}
