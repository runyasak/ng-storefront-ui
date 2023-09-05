import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfListItemComponent, SfListItemSize } from 'projects/ng-storefront-ui';
import { SfCounterComponent } from 'projects/ng-storefront-ui/src/lib/sf-counter/sf-counter.component';
import { SfIconTuneComponent } from 'projects/ng-storefront-ui/src/lib/sf-icons/sf-icon-tune/sf-icon-tune.component';
import { Controls } from '../../components/controls/controls.types';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { ControlService } from '../../services/control.service';
import { SfIconChevronRightComponent } from 'projects/ng-storefront-ui/src/lib/sf-icons/sf-icon-chevron-right/sf-icon-chevron-right.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ExampleWrapperComponent,
    SfCounterComponent,
    SfIconTuneComponent,
    SfIconChevronRightComponent,
    SfListItemComponent,
  ],
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
    {
      type: 'select',
      modelName: 'slotPrefix',
      description: 'Custom component that could be placed before the element.',
      options: ['none', 'Tune icon'],
    },
    {
      type: 'select',
      modelName: 'slotSuffix',
      description: 'Custom component that could be placed after the element.',
      options: ['none', 'Chevron right icon'],
    },
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
