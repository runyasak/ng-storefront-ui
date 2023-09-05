import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfIconSize } from 'projects/ng-storefront-ui';
import { SfIconBaseComponent } from 'projects/ng-storefront-ui/src/lib/sf-icons/sf-icon-base/sf-icon-base.component';
import { Controls } from '../../components/controls/controls.types';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { ControlService } from '../../services/control.service';

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
