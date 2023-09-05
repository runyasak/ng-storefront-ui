import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfRatingSize } from 'projects/ng-storefront-ui';
import { SfIconStarFilledComponent } from 'projects/ng-storefront-ui/src/lib/sf-icon-star-filled/sf-icon-star-filled.component';
import { SfIconStarHalfComponent } from 'projects/ng-storefront-ui/src/lib/sf-icon-star-half/sf-icon-star-half.component';
import { SfIconStarComponent } from 'projects/ng-storefront-ui/src/lib/sf-icon-star/sf-icon-star.component';
import { SfRatingComponent } from 'projects/ng-storefront-ui/src/lib/sf-rating/sf-rating.component';
import { Controls } from '../../components/controls/controls.types';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { ControlService } from '../../services/control.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ExampleWrapperComponent,
    SfIconStarComponent,
    SfIconStarFilledComponent,
    SfIconStarHalfComponent,
    SfRatingComponent,
  ],
  templateUrl: './example-sf-rating-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlService],
})
export class ExampleSfRatingPageComponent {
  controls: Controls = [
    {
      type: 'range',
      modelName: 'value',
      propDefaultValue: 0,
      propType: 'number',
      rangeOption: { min: 0, max: 5, step: 0.1 },
    },
    {
      type: 'range',
      modelName: 'max',
      propDefaultValue: 5,
      propType: 'number',
      rangeOption: { min: 1, max: 10, step: 1 },
    },
    {
      type: 'boolean',
      modelName: 'halfIncrement',
      propType: 'boolean',
    },
    {
      type: 'select',
      modelName: 'size',
      options: Object.keys(SfRatingSize),
      propDefaultValue: SfRatingSize.base,
      propType: 'SfRatingSize',
    },
  ];

  prepareControlsData = this.controlService.prepareControls(this.controls, {
    value: 3,
    max: 5,
    size: SfRatingSize.base,
    halfIncrement: false,
  });

  constructor(private controlService: ControlService) {}
}
