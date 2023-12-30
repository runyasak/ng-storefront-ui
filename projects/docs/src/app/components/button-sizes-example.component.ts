import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SfButtonComponent } from 'ng-storefront-ui';

@Component({
  selector: 'docs-button-sizes-example',
  standalone: true,
  imports: [SfButtonComponent],
  template: ` <div class="flex items-center gap-4 py-4">
    <button sf-button size="sm">Hello</button>

    <button sf-button>Hello</button>

    <button sf-button size="lg">Hello</button>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonSizesExampleComponent {}
