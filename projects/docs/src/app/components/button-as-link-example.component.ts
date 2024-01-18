import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SfButtonComponent } from 'ng-storefront-ui';

@Component({
  selector: 'docs-button-as-link-example',
  standalone: true,
  imports: [SfButtonComponent, RouterLink],
  template: `
    <div class="flex items-center gap-4">
      <a sf-button variant="primary" href="/">Link</a>
      <a sf-button variant="primary" routerLink="/">RouterLink</a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonAsLinkExampleComponent {}
