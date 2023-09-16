import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { SfSelectComponent } from 'projects/ng-storefront-ui/src/lib/sf-select/sf-select.component';
import { ControlService } from '../../services/control.service';
import { Controls } from '../../components/controls/controls.types';
import { SfSelectSize } from 'projects/ng-storefront-ui';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ExampleWrapperComponent,
    ReactiveFormsModule,
    SfSelectComponent,
  ],
  templateUrl: './example-sf-select-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
})
export class ExampleSfSelectPageComponent {
  selectControl = new FormControl();

  selectValue = signal('');

  controls: Controls = [
    {
      type: 'json',
      propType: 'array',
      modelName: 'options',
      description: 'Elements displayed in select options',
    },
    {
      type: 'text',
      propType: 'string',
      modelName: 'value',
      description: 'Selected value',
    },
    {
      type: 'text',
      propType: 'string',
      modelName: 'placeholder',
      description: 'Placeholder for select',
    },
    {
      type: 'boolean',
      propType: 'boolean',
      modelName: 'disabled',
      description: 'Disabled state',
    },
    {
      type: 'boolean',
      propType: 'boolean',
      modelName: 'required',
      description: 'Required state',
    },
    {
      type: 'boolean',
      propType: 'boolean',
      modelName: 'invalid',
      description: 'Support with Reactive Forms, `ng-invalid`',
    },
    {
      type: 'text',
      propType: 'string',
      modelName: 'label',
      description: 'Label for select',
    },
    {
      type: 'select',
      modelName: 'size',
      options: Object.keys(SfSelectSize),
      description: 'Select can have 3 sizes: `sm`, `base` or `lg`',
    },
  ];

  prepareControlsData = this.controlService.prepareControls(this.controls, {
    options: [
      { label: 'red', value: 'red' },
      { label: 'blue', value: 'blue' },
      { label: 'yellow', value: 'yellow' },
      { label: 'green', value: 'green' },
      { label: 'gray', value: 'gray' },
      { label: 'black', value: 'black' },
      { label: 'brown', value: 'brown' },
    ],
    value: this.selectValue(),
    placeholder: '-- Select --',
    disabled: false,
    required: false,
    invalid: false,
    label: 'Label',
    size: SfSelectSize.base,
  });

  constructor(private controlService: ControlService) {
    effect(() => {
      if (this.prepareControlsData.state().invalid) {
        this.selectControl.markAsTouched();
        this.selectControl.setValidators(() => ({ example: true }));
        this.selectControl.setErrors({ example: true });
      } else {
        this.selectControl.markAsPristine();
        this.selectControl.clearValidators();
        this.selectControl.setErrors(null);
      }
    });
  }

  handleValueChange(newValue: string) {
    this.selectValue.set(newValue);
  }
}
