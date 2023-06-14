import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Controls } from 'src/app/components/controls/controls.types';
import { SfButtonComponent } from '@ng-storefront-ui/lib';
import { SfButtonVariant } from '@ng-storefront-ui/lib/components/sf-button/sf-button.type';
import { ControlService } from 'src/app/services/control.service';
import { ExampleWrapperComponent } from 'src/app/components/example-wrapper/example-wrapper.component';

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
