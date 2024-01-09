import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Controls } from '../../components/controls/controls.types';
import { ControlService } from '../../services/control.service';
import { SfAccordionItemComponent, SfIconChevronLeftComponent } from 'projects/ng-storefront-ui';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    SfAccordionItemComponent,
    SfIconChevronLeftComponent,
    ExampleWrapperComponent,
    FormsModule,
  ],
  templateUrl: './example-sf-accordion-item-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
})
export class ExampleSfAccordionItemPageComponent {
  controls: Controls = [
    {
      type: 'boolean',
      modelName: 'ngModel',
      propType: 'boolean',
      propDefaultValue: false,
    },
  ];

  prepareControlsData = this.controlService.prepareControls(this.controls, {
    ngModel: false,
  });

  constructor(private controlService: ControlService) {}

  handleModelChange(ngModel: boolean) {
    this.prepareControlsData.state.update((value) => ({ ...value, ngModel }));
  }
}
