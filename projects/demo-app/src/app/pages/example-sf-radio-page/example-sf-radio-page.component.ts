import { ChangeDetectionStrategy, Component, OnInit, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfRadioComponent } from 'projects/ng-storefront-ui';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { Controls } from '../../components/controls/controls.types';
import { ControlService } from '../../services/control.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, ExampleWrapperComponent, ReactiveFormsModule, SfRadioComponent],
  templateUrl: './example-sf-radio-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
})
export class ExampleSfRadioPageComponent {
  controlService = inject(ControlService);

  radioControl = new FormControl();

  radioValue = signal('');

  controls: Controls = [
    {
      type: 'json',
      propType: 'array',
      modelName: 'radioOptions',
    },
    {
      type: 'boolean',
      modelName: 'disabled',
      propType: 'boolean',
    },
    {
      type: 'boolean',
      modelName: 'invalid',
      propType: 'boolean',
    },
  ];

  prepareControlsData = this.controlService.prepareControls(this.controls, {
    value: this.radioValue(),
    disabled: false,
    invalid: false,
    radioOptions: [
      {
        label: 'Label',
        value: 'value-1',
        name: 'radio',
      },
      {
        label: 'Label 2',
        value: 'value-2',
        name: 'radio',
      },
    ],
  });

  constructor() {
    effect(() => {
      if (this.prepareControlsData.state().invalid) {
        this.radioControl.markAsTouched();
        this.radioControl.setValidators(() => ({ example: true }));
        this.radioControl.setErrors({ example: true });
      } else {
        this.radioControl.markAsPristine();
        this.radioControl.clearValidators();
        this.radioControl.setErrors(null);
      }
    });

    effect(() => {
      if (this.prepareControlsData.state().disabled) {
        this.radioControl.disable();
      } else {
        this.radioControl.enable();
      }
    });
  }
}
