import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SfIconStarComponent,
  SfIconStarFilledComponent,
  SfIconStarHalfComponent,
} from '../public-api';
import { SfRatingSize } from './sf-rating.type';
import { clamp, roundToNearest } from '../../utils';

const sizeClasses = {
  [SfRatingSize.xs]: 'text-xs',
  [SfRatingSize.sm]: 'text-sm',
  [SfRatingSize.base]: 'text-base',
  [SfRatingSize.lg]: 'text-lg',
  [SfRatingSize.xl]: 'text-xl',
};

@Component({
  selector: 'sf-rating',
  standalone: true,
  imports: [CommonModule, SfIconStarComponent, SfIconStarFilledComponent, SfIconStarHalfComponent],
  template: `
    <sf-icon-star-filled
      *ngFor="let index of counter(filled)"
      aria-hidden="true"
      class="w-[1.5em] h-[1.5em]"
    />
    <sf-icon-star-half *ngIf="partiallyFilled" aria-hidden="true" class="w-[1.5em] h-[1.5em]" />
    <sf-icon-star
      *ngFor="let index of counter(empty)"
      aria-hidden="true"
      class="text-disabled-500 w-[1.5em] h-[1.5em]"
    />
  `,
  styles: [
    `
      :host ::ng-deep svg {
        width: 100%;
        height: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfRatingComponent {
  @Input() size: keyof typeof SfRatingSize = SfRatingSize.base;

  @Input() max = 5;

  @Input() value = 0;

  @Input() halfIncrement = false;

  @Input() ariaLabel?: string = undefined;

  get precision() {
    return this.halfIncrement ? 0.5 : 1;
  }

  get ratingValue() {
    return clamp(roundToNearest(this.value, this.precision), 0, this.max);
  }

  get partiallyFilled() {
    return Number(!Number.isInteger(this.ratingValue));
  }

  get filled() {
    return Math.ceil(this.ratingValue - this.partiallyFilled);
  }

  get empty() {
    return this.max - this.filled - this.partiallyFilled;
  }

  get label() {
    return this.ariaLabel ?? `${this.value} out of ${this.max}`;
  }

  @HostBinding('class') get hostClass() {
    return ['inline-flex items-center text-warning-500', sizeClasses[this.size]].join(' ');
  }

  @HostBinding('attr.aria-label') attrAriaLabel = this.ariaLabel;

  @HostBinding('attr.data-testid') dataTestId = 'rating';

  @HostBinding('attr.label') attrLabel = this.label;

  @HostBinding('attr.role') role = 'image';

  counter(length: number) {
    return new Array(length);
  }
}
