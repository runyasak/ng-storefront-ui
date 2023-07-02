import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleWrapperComponent } from 'src/app/components/example-wrapper/example-wrapper.component';
import { SfCounterComponent } from '@ng-storefront-ui';
import { Controls } from 'src/app/components/controls/controls.types';
import { SfCounterSize } from '@ng-storefront-ui/components/sf-counter/sf-counter.type';
import { ControlService } from 'src/app/services/control.service';

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
