import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfButtonComponent, SfButtonVariant } from 'projects/ng-storefront-ui';
import { Controls } from '../../components/controls/controls.types';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { ControlService } from '../../services/control.service';

@Component({
  standalone: true,
  imports: [CommonModule, SfButtonComponent, ExampleWrapperComponent],
  templateUrl: './example-sf-button-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
})
export class ExampleSfButtonPageComponent {
  controls: Controls = [
    {
      type: 'text',
      modelName: 'SlotDefault',
      description: 'Only for demonstration purposes. Default slot',
    },
    {
      type: 'select',
      modelName: 'variant',
      options: Object.keys(SfButtonVariant),
    },
    {
      type: 'boolean',
      modelName: 'disabled',
    },
    {
      type: 'boolean',
      modelName: 'square',
      description: 'Add even paddings for icon-only usage',
    },
  ];

  prepareControlsData = this.controlService.prepareControls(this.controls, {
    SlotDefault: 'Hello',
    variant: SfButtonVariant.primary,
    disabled: false,
    square: false,
  });

  constructor(private controlService: ControlService) {}
}
