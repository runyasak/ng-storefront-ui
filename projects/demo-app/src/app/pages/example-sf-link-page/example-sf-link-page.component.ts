import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfLinkComponent } from 'projects/ng-storefront-ui';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { ControlService } from '../../services/control.service';
import { Controls } from '../../components/controls/controls.types';
import { SfLinkVariant } from 'projects/ng-storefront-ui/src/types/sf-link.type';

@Component({
  standalone: true,
  imports: [CommonModule, SfLinkComponent, ExampleWrapperComponent],
  templateUrl: './example-sf-link-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
})
export class ExampleSfLinkPageComponent {
  controls: Controls = [
    {
      type: 'text',
      modelName: 'href',
      description: 'Only for demonstration purposes. Component href attribute',
    },
    {
      type: 'select',
      modelName: 'variant',
      propType: 'SfLinkVariant',
      propDefaultValue: 'primary',
      options: Object.keys(SfLinkVariant),
    },
    {
      type: 'text',
      modelName: 'SlotDefault',
      description: 'Only for demonstration purposes. Default slot',
    },
  ];

  prepareControlsData = this.controlService.prepareControls(this.controls, {
    SlotDefault: 'Link',
    href: '#',
    variant: SfLinkVariant.primary,
  });

  constructor(private controlService: ControlService) {}
}

// const { controlsAttrs, state } = prepareControls(
//   [
//     {
//       type: 'text',
//       modelName: 'href',
//       propType: 'string',
//       description: 'Only for demonstration purposes. Component href attribute',
//     },
//     {
//       type: 'select',
//       modelName: 'variant',
//       propType: 'SfLinkVariant',
//       propDefaultValue: 'primary',
//       options: Object.keys(SfLinkVariant),
//     },
//     {
//       type: 'text',
//       modelName: 'SlotDefault',
//       description: 'Only for demonstration purposes. Default slot',
//     },
//   ],
//   {
//     SlotDefault: ref('Link'),
//     href: ref('#'),
//     variant: ref(SfLinkVariant.primary),
//   },
// );
