import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfTextareaComponent } from 'projects/ng-storefront-ui/src/lib/sf-textarea/sf-textarea.component';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { Controls } from '../../components/controls/controls.types';
import { SfTextareaSize } from 'projects/ng-storefront-ui';
import { ControlService } from '../../services/control.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ExampleWrapperComponent, SfTextareaComponent],
  templateUrl: './example-sf-textarea-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
})
export class ExampleSfTextareaPageComponent {
  characterLimit = signal(12);

  textareaValue = signal('');

  isAboveLimit = computed(() => this.textareaValue().length > this.characterLimit());

  charsCount = computed(() => this.characterLimit() - this.textareaValue().length);

  characterLimitClass = computed(() =>
    this.isAboveLimit() ? 'text-negative-700 font-medium' : 'text-neutral-500'
  );

  controls: Controls = [
    {
      type: 'select',
      modelName: 'size',
      propDefaultValue: 'SfTextareaSize.base',
      propType: 'SfTextareaSize',
      options: Object.keys(SfTextareaSize),
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
    size: SfTextareaSize.base,
    disabled: false,
    required: false,
    invalid: false,
    readonly: undefined,
    placeholder: 'Write something about yourself',
    helpText: 'Do not include personal or financial information.',
    requiredText: 'Required text',
    errorText: 'Error message',
    label: 'Description',
    characterLimit: this.characterLimit(),
    value: this.textareaValue(),
  });

  constructor(private controlService: ControlService) {}

  handleValueChange(value: string) {
    this.textareaValue.set(value);
  }
}
