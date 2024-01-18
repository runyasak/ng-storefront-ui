import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SfButtonComponent } from 'ng-storefront-ui';

@Component({
  selector: 'docs-button-variants-example',
  standalone: true,
  imports: [SfButtonComponent],
  template: `
    <div class="flex items-center gap-4">
      <button sf-button variant="primary">Hello</button>

      <button sf-button variant="secondary">Hello</button>

      <button sf-button variant="tertiary">Hello</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonVariantsExampleComponent {}
