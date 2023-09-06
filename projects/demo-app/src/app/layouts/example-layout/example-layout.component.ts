import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet, Routes } from '@angular/router';
import { filter, map } from 'rxjs';
import { SfListItemComponent } from 'projects/ng-storefront-ui';
import { routes } from '../../app.routes';

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
export class ExampleLayoutComponent implements OnInit {
  components = signal<{ name: string; url: string }[]>([]);

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

  ngOnInit(): void {
    this.components.set(
      this.mapRoutesComponents(routes).sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      )
    );
  }

  mapRoutesComponents(newRoutes: Routes) {
    const result = newRoutes
      .filter((value) => value.path === '')[0]
      .children?.filter((value) => !!value.path)
      .map((value) => ({
        name: value.path?.split('-').slice(1).join(' ') || '',
        url: `/${value.path}`,
      }));

    return result || [];
  }
}
