import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { SfListItemComponent } from 'projects/ng-storefront-ui';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, SfListItemComponent, RouterLink],
  templateUrl: './example-layout.component.html',
  styles: [
    `
      ::ng-deep ng-component {
        display: contents;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleLayoutComponent {
  components = [
    { name: 'Badge', url: '/sf-badge' },
    { name: 'Icon Base', url: '/sf-icon-base' },
    { name: 'Button', url: '/sf-button' },
    { name: 'Counter', url: '/sf-counter' },
    { name: 'List Item', url: '/sf-list-item' },
    { name: 'Rating', url: '/sf-rating' },
  ];

  navigationUrl$ = this.router.events.pipe(
    map((event) => {
      if (event instanceof NavigationEnd) {
        return event.url;
      }

      return undefined;
    }),
    filter((url) => !!url)
  );

  currentUrl = toSignal(this.navigationUrl$);

  constructor(private router: Router) {}
}
