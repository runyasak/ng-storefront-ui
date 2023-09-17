import { ChangeDetectionStrategy, Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfCheckboxComponent } from 'projects/ng-storefront-ui/src/lib/sf-checkbox/sf-checkbox.component';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { Controls } from '../../components/controls/controls.types';
import { ControlService } from '../../services/control.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, ExampleWrapperComponent, ReactiveFormsModule, SfCheckboxComponent],
  templateUrl: './example-sf-checkbox-page.component.html',
  providers: [ControlService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleSfCheckboxPageComponent {
  checkboxControl = new FormControl<boolean | null>(null);

  controls: Controls = [
    {
      type: 'boolean',
      modelName: 'value',
      propType: 'boolean',
    },
    {
      type: 'boolean',
      modelName: 'indeterminate',
      propType: 'boolean',
    },
    {
      type: 'boolean',
      modelName: 'invalid',
      propType: 'boolean',
    },
    {
      type: 'boolean',
      modelName: 'disabled',
      propType: 'boolean',
    },
  ];

  prepareControlsData = this.controlService.prepareControls(this.controls, {
    value: this.checkboxControl.value,
    indeterminate: false,
    invalid: false,
    disabled: false,
  });

  constructor(private controlService: ControlService) {
    effect(() => {
      if (this.prepareControlsData.state().invalid) {
        this.checkboxControl.markAsTouched();
        this.checkboxControl.setValidators(() => ({ example: true }));
        this.checkboxControl.setErrors({ example: true });
      } else {
        this.checkboxControl.markAsPristine();
        this.checkboxControl.clearValidators();
        this.checkboxControl.setErrors(null);
      }
    });

    effect(() => {
      if (this.prepareControlsData.state().disabled) {
        this.checkboxControl.disable();
      } else {
        this.checkboxControl.enable();
      }
    });

    effect(() => this.checkboxControl.setValue(this.prepareControlsData.state().value));
  }
}
