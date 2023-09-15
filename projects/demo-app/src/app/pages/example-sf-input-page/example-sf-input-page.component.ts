import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { SfInputComponent, SfInputSize } from 'projects/ng-storefront-ui';
import { ControlService } from '../../services/control.service';
import { Controls } from '../../components/controls/controls.types';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, ExampleWrapperComponent, ReactiveFormsModule, SfInputComponent],
  templateUrl: './example-sf-input-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
})
export class ExampleSfInputPageComponent {
  inputControl = new FormControl();

  characterLimit = signal(12);

  inputValue = signal('');

  isAboveLimit = computed(() => this.inputValue().length > this.characterLimit());

  charsCount = computed(() => this.characterLimit() - this.inputValue().length);

  characterLimitClass = computed(() =>
    this.isAboveLimit() ? 'text-negative-700 font-medium' : 'text-neutral-500'
  );

  controls: Controls = [
    {
      type: 'select',
      modelName: 'size',
      propDefaultValue: 'SfInputSize.base',
      propType: 'SfInputSize',
      options: Object.keys(SfInputSize),
    },
    {
      type: 'text',
      propType: 'string',
      modelName: 'label',
    },
    {
      type: 'text',
      propType: 'string',
      modelName: 'placeholder',
    },
    {
      type: 'text',
      propType: 'string',
      modelName: 'helpText',
    },
    {
      type: 'text',
      propType: 'string',
      modelName: 'requiredText',
    },
    {
      type: 'text',
      propType: 'string',
      modelName: 'errorText',
    },
    {
      type: 'text',
      propType: 'number',
      modelName: 'characterLimit',
    },
    {
      type: 'boolean',
      propType: 'boolean',
      modelName: 'disabled',
    },
    {
      type: 'boolean',
      propType: 'boolean',
      modelName: 'required',
    },
    {
      type: 'boolean',
      propType: 'boolean',
      modelName: 'invalid',
      description: 'Support with Reactive Forms, `ng-invalid`',
    },
    {
      type: 'boolean',
      propType: 'boolean',
      modelName: 'readonly',
    },
  ];

  prepareControlsData = this.controlService.prepareControls(this.controls, {
    size: SfInputSize.base,
    disabled: false,
    required: false,
    invalid: false,
    readonly: false,
    placeholder: 'Placeholder text',
    helpText: 'Help text',
    requiredText: 'Required text',
    errorText: 'Error text',
    label: 'Label',
    characterLimit: this.characterLimit(),
    value: this.inputValue(),
  });

  constructor(private controlService: ControlService) {
    if (this.prepareControlsData.state().invalid) {
      setTimeout(() => {
        this.inputControl.setValue('');
        this.inputControl.markAsTouched();
        this.inputControl.setErrors({ example: true });
      });
    }

    effect(() => {
      if (this.prepareControlsData.state().invalid) {
        this.inputControl.markAsTouched();
        this.inputControl.setErrors({ example: true });
      } else {
        this.inputControl.setErrors(null);
        this.inputControl.markAsPristine();
      }
    });

    if (this.prepareControlsData.state().disabled) {
      setTimeout(() => {
        console.log('disabled !!');
        this.inputControl.markAsTouched();
        this.inputControl.disable();
      }, 1000);
    }

    effect(() => {
      if (this.prepareControlsData.state().disabled) {
        this.inputControl.disable();
      } else {
        this.inputControl.enable();
      }
    });
  }

  handleValueChange(value: string) {
    this.inputValue.set(value);
  }
}
