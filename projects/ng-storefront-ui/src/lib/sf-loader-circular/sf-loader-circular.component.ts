import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfLoaderSize } from '../../types';

@Component({
  selector: 'sf-loader-circular',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      class="inline-block animate-spin-slow rounded-full text-primary-700 ring-inset ring-neutral-300"
      [ngClass]="sizeClasses[size]"
      viewBox="25 25 50 50"
      aria-live="polite"
      [attr.aria-label]="ariaLabel"
      data-testid="loader-circular"
    >
      <circle
        [ngClass]="strokeSizeClass[size]"
        class="animate-stroke-loader-circular fill-none stroke-current stroke-2"
        cx="50"
        cy="50"
        r="24"
      />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfLoaderCircularComponent {
  @Input() size: keyof typeof SfLoaderSize = SfLoaderSize.base;

  @Input() ariaLabel: string = 'loading';

  sizeClasses = {
    [SfLoaderSize.xs]: 'h-4 w-4 ring-2',
    [SfLoaderSize.sm]: 'h-5 w-5 ring-2',
    [SfLoaderSize.base]: 'h-6 w-6 ring-2',
    [SfLoaderSize.lg]: 'h-8 w-8 ring-2',
    [SfLoaderSize.xl]: 'h-10 w-10 ring-2',
    [SfLoaderSize['2xl']]: 'h-14 w-14 ring-[3px]',
    [SfLoaderSize['3xl']]: 'h-24 w-24 ring-4',
    [SfLoaderSize['4xl']]: 'h-48 w-48 ring-8',
  };

  strokeSizeClass = {
    [SfLoaderSize.xs]: 'stroke-[10px]',
    [SfLoaderSize.sm]: 'stroke-[8px]',
    [SfLoaderSize.base]: 'stroke-[6px]',
    [SfLoaderSize.lg]: 'stroke-[4px]',
    [SfLoaderSize.xl]: 'stroke-[3px]',
    [SfLoaderSize['2xl']]: 'stroke-[3px]',
    [SfLoaderSize['3xl']]: 'stroke-2',
    [SfLoaderSize['4xl']]: 'stroke-2',
  };
}
