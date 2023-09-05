import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Controls } from './controls.types';
import { SfButtonComponent } from 'projects/ng-storefront-ui';

@Component({
  selector: 'app-controls',
  standalone: true,
  templateUrl: './controls.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, SfButtonComponent],
})
export class ControlsComponent {
  @Input() controls: Controls = [];

  @Input() state = signal<{ [k: string]: unknown }>({});

  handleControlChange(newValue: unknown, modelName: string) {
    this.state.update((value) => ({ ...value, [modelName]: newValue }));
  }
}
