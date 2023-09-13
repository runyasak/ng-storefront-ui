
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-unfold-more',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="unfold-more">
      <svg:path d='M8.225 8.325C8.042 8.142 7.95 7.9 7.95 7.6s.092-.542.275-.725L11.3 3.8a.88.88 0 0 1 .325-.213 1.212 1.212 0 0 1 .763 0 .682.682 0 0 1 .312.213l3.1 3.1c.183.183.27.42.262.712-.008.292-.104.53-.287.713-.183.183-.425.275-.725.275s-.542-.092-.725-.275L12 6 9.65 8.35c-.183.183-.42.27-.712.263a1.01 1.01 0 0 1-.713-.288ZM12 20.575a.941.941 0 0 1-.375-.075 1.315 1.315 0 0 1-.325-.2l-3.075-3.075c-.183-.183-.275-.425-.275-.725s.092-.542.275-.725c.183-.183.425-.275.725-.275s.542.092.725.275L12 18.1l2.35-2.35c.183-.183.42-.27.712-.262.292.008.53.104.713.287.183.183.275.425.275.725s-.092.542-.275.725L12.7 20.3a.92.92 0 0 1-.312.2c-.125.05-.255.075-.388.075Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconUnfoldMoreComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
