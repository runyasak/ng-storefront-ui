import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleWrapperComponent } from 'src/app/components/example-wrapper/example-wrapper.component';
import { Controls } from 'src/app/components/controls/controls.types';
import { SfCounterComponent, SfListItemComponent } from '@ng-storefront-ui';
import { SfListItemSize } from '@ng-storefront-ui/components/sf-list-item/sf-list-item.type';
import { ControlService } from 'src/app/services/control.service';

@Component({
  standalone: true,
  imports: [CommonModule, ExampleWrapperComponent, SfCounterComponent, SfListItemComponent],
  templateUrl: './example-sf-list-item-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
})
export class ExamplesSfListItemPageComponent {
  controls: Controls = [
    {
      type: 'text',
      modelName: 'tag',
      description: 'Change a tag to any other tag',
    },
    {
      type: 'text',
      modelName: 'label',
      propType: 'string',
      description: 'Set label value',
    },
    {
      type: 'text',
      modelName: 'secondaryText',
      propType: 'string',
      description: 'Set secondary text',
    },
    {
      type: 'text',
      modelName: 'counter',
      propType: 'string',
      description: 'Set counter value',
    },
    // -----------------------------------------
    // [Todo]: will be used with sf-icon-tune later
    {
      type: 'text',
      modelName: 'slotPrefix',
      description: 'Custom component that could be placed before the element.',
      propType: 'string',
    },
    // -----------------------------------------
    // [Todo]: will be used with sf-icon-chevron-right later
    {
      type: 'text',
      modelName: 'slotSuffix',
      description: 'Custom component that could be placed after the element.',
      propType: 'string',
    },
    // -----------------------------------------
    {
      type: 'select',
      modelName: 'size',
      options: Object.keys(SfListItemSize),
      description: 'Set size variant',
    },
    {
      type: 'boolean',
      modelName: 'disabled',
      description: 'Show disabled state of component',
    },
    {
      type: 'boolean',
      modelName: 'selected',
      description: 'Show selected state of component',
    },
    {
      type: 'boolean',
      modelName: 'truncate',
      description: 'Show truncated version of secondary text',
    },
  ];

  prepareControlsData = this.controlService.prepareControls(this.controls, {
    label: 'Label',
    size: SfListItemSize.base,
    counter: '123',
    slotPrefix: undefined,
    slotSuffix: undefined,
    secondaryText: 'Secondary text',
    disabled: false,
    selected: false,
    truncate: false,
  });

  constructor(private controlService: ControlService) {}

  handleClick() {
    this.prepareControlsData.state.update((value) => ({
      ...value,
      selected: !value.selected,
    }));
  }
}
