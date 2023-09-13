import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { SfInputComponent, SfInputSize } from 'projects/ng-storefront-ui';
import { ControlService } from '../../services/control.service';
import { Controls } from '../../components/controls/controls.types';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ExampleWrapperComponent, SfInputComponent],
  templateUrl: './example-sf-input-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
})
export class ExampleSfInputPageComponent {
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

  constructor(private controlService: ControlService) {}

  handleValueChange(value: string) {
    this.inputValue.set(value);
  }
}
