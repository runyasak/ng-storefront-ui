import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SfBadgeComponent,
  SfButtonComponent,
  SfIconShoppingCartComponent,
} from '@ng-storefront-ui';
import { ExampleWrapperComponent } from 'src/app/components/example-wrapper/example-wrapper.component';
import { Controls } from 'src/app/components/controls/controls.types';
import {
  SfBadgePlacement,
  SfBadgeVariant,
} from '@ng-storefront-ui/components/sf-badge/sf-badge.type';
import { ControlService } from 'src/app/services/control.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ExampleWrapperComponent,
    SfBadgeComponent,
    SfButtonComponent,
    SfIconShoppingCartComponent,
  ],
  templateUrl: './example-sf-badge-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
})
export class ExampleSfBadgePageComponent {
  controls: Controls = [
    {
      type: 'text',
      modelName: 'content',
      description: 'Content to display in the badge.',
      propType: 'string | number',
    },
    {
      type: 'text',
      modelName: 'max',
      description: 'Maximum number of counter to show.',
      propType: 'number',
      propDefaultValue: '99',
    },
    {
      type: 'select',
      modelName: 'variant',
      description: 'Badge can have content or be a simple dot.',
      options: Object.values(SfBadgeVariant),
      propType: 'SfBadgeVariant',
      propDefaultValue: 'standard',
    },
    {
      type: 'select',
      modelName: 'placement',
      description: 'Position of the badge relatively to a container.',
      options: Object.values(SfBadgePlacement),
      propType: 'SfBadgePlacement',
      propDefaultValue: 'top-right',
    },
  ];

  prepareControlsData = this.controlService.prepareControls(this.controls, {
    content: '1',
    max: 99,
    variant: SfBadgeVariant.standard,
    placement: SfBadgePlacement['top-right'],
  });

  constructor(private controlService: ControlService) {}
}
