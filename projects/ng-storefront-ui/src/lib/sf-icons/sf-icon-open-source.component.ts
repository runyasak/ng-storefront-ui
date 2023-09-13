
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-open-source',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="open-source">
      <svg:path d='M12 2C5.913 2 1 6.913 1 13c0 3.887 1.98 7.407 5.28 9.46.073.073.22.073.293.073.074 0 .147-.073.22-.146l3.447-5.647a.387.387 0 0 0-.147-.513c-1.1-.66-1.76-1.834-1.76-3.154A3.631 3.631 0 0 1 12 9.407a3.631 3.631 0 0 1 3.667 3.666c0 1.394-.807 2.64-1.98 3.3l-.22.22c0 .074 0 .22.073.294l3.447 5.646c.073.147.22.147.293.147.073 0 .147 0 .147-.073C20.873 20.627 23 16.96 23 13.073 23 6.987 18.087 2 12 2Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconOpenSourceComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
