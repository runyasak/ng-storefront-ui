import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleWrapperComponent } from 'src/app/components/example-wrapper/example-wrapper.component';
import { SfIconBaseComponent } from '@ng-storefront-ui';
import { Controls } from 'src/app/components/controls/controls.types';
import { SfIconSize } from '@ng-storefront-ui/components/sf-icon-base/sf-icon-base.type';
import { ControlService } from 'src/app/services/control.service';

@Component({
  standalone: true,
  imports: [CommonModule, ExampleWrapperComponent, SfIconBaseComponent],
  templateUrl: './example-sf-icon-base-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
})
export class ExampleSfIconBasePageComponent {
  controls: Controls = [
    {
      type: 'select',
      modelName: 'size',
      propDefaultValue: 'SfIconSize.base',
      propType: 'SfIconSize',
      options: Object.keys(SfIconSize),
    },
    {
      type: 'select',
      modelName: 'colorExample',
      description: '(not a prop) example showing possibility to change icons color',
      options: ['black', 'red', 'blue', 'green'],
    },
  ];

  prepareControlsData = this.controlService.prepareControls(this.controls, {
    size: SfIconSize.base,
    colorExample: 'black',
  });

  constructor(private controlService: ControlService) {}
}
