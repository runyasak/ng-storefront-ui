
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SfIconBaseComponent } from '../sf-icon-base/sf-icon-base.component';
  import { SfIconSize } from '../../types';

  @Component({
    selector: 'sf-icon-youtube',
    standalone: true,
    imports: [CommonModule, SfIconBaseComponent],
    template: `<sf-icon-base [size]="size" viewBox="0 0 24 24" data-testid="youtube">
      <svg:path d='M22.54 6.42a2.764 2.764 0 0 0-1.944-1.957C18.88 4 12 4 12 4s-6.88 0-8.596.463A2.764 2.764 0 0 0 1.46 6.42C1 8.147 1 11.75 1 11.75s0 3.603.46 5.33a2.723 2.723 0 0 0 1.945 1.926c1.716.463 8.596.463 8.596.463s6.879 0 8.595-.463a2.723 2.723 0 0 0 1.945-1.926c.46-1.727.46-5.33.46-5.33s0-3.603-.46-5.33ZM9.75 15.021V8.48l5.75 3.271-5.75 3.271Z'/>      
    </sf-icon-base>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SfIconYoutubeComponent {
    @Input() size: keyof typeof SfIconSize = SfIconSize.base;
  }
