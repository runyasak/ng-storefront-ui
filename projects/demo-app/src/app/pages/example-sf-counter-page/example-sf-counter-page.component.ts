import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfCounterSize } from 'projects/ng-storefront-ui';
import { SfCounterComponent } from 'projects/ng-storefront-ui/src/lib/sf-counter/sf-counter.component';
import { Controls } from '../../components/controls/controls.types';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { ControlService } from '../../services/control.service';

@Component({
  standalone: true,
  imports: [CommonModule, SfCounterComponent, ExampleWrapperComponent],
  templateUrl: './example-sf-counter-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
})
export class ExampleSfCounterPageComponent {
  controls: Controls = [
    {
      type: 'text',
      modelName: 'value',
      propType: 'string',
    },
    {
      type: 'select',
      modelName: 'size',
      options: Object.keys(SfCounterSize),
      propDefaultValue: SfCounterSize.base,
      propType: 'SfCounterSize',
    },
    {
      type: 'boolean',
      modelName: 'pill',
      propType: 'boolean',
    },
    {
      type: 'select',
      modelName: 'fill',
      options: [
        'bg-white',
        'bg-neutral-100',
        'bg-primary-200',
        'bg-warning-200',
        'bg-negative-200',
      ],
      propType: '---',
      description: 'Only for demonstration purposes, background is controlled by custom class',
    },
  ];

  prepareControlsData = this.controlService.prepareControls(this.controls, {
    value: '123',
    size: SfCounterSize.base,
    pill: false,
    fill: 'bg-white',
  });

  constructor(private controlService: ControlService) {}
}
