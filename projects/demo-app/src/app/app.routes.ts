import { Routes } from '@angular/router';
import { ExampleLayoutComponent } from './layouts/example-layout/example-layout.component';
import { ExampleIndexPageComponent } from './pages/example-index-page/example-index-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ExampleLayoutComponent,
    children: [
      {
        path: '',
        component: ExampleIndexPageComponent,
      },
      {
        path: 'sf-accordion-item',
        loadComponent: () =>
          import(
            './pages/example-sf-accordion-item-page/example-sf-accordion-item-page.component'
          ).then((mod) => mod.ExampleSfAccordionItemPageComponent),
      },
      {
        path: 'sf-icon-base',
        loadComponent: () =>
          import('./pages/example-sf-icon-base-page/example-sf-icon-base-page.component').then(
            (mod) => mod.ExampleSfIconBasePageComponent
          ),
      },
      {
        path: 'sf-badge',
        loadComponent: () =>
          import('./pages/example-sf-badge-page/example-sf-badge-page.component').then(
            (mod) => mod.ExampleSfBadgePageComponent
          ),
      },
      {
        path: 'sf-button',
        loadComponent: () =>
          import('./pages/example-sf-button-page/example-sf-button-page.component').then(
            (mod) => mod.ExampleSfButtonPageComponent
          ),
      },
      {
        path: 'sf-counter',
        loadComponent: () =>
          import('./pages/example-sf-counter-page/example-sf-counter-page.component').then(
            (mod) => mod.ExampleSfCounterPageComponent
          ),
      },
      {
        path: 'sf-link',
        loadComponent: () =>
          import('./pages/example-sf-link-page/example-sf-link-page.component').then(
            (mod) => mod.ExampleSfLinkPageComponent
          ),
      },
      {
        path: 'sf-list-item',
        loadComponent: () =>
          import('./pages/example-sf-list-item-page/example-sf-list-item-page.component').then(
            (mod) => mod.ExamplesSfListItemPageComponent
          ),
      },
      {
        path: 'sf-rating',
        loadComponent: () =>
          import('./pages/example-sf-rating-page/example-sf-rating-page.component').then(
            (mod) => mod.ExampleSfRatingPageComponent
          ),
      },
      {
        path: 'sf-textarea',
        loadComponent: () =>
          import('./pages/example-sf-textarea-page/example-sf-textarea-page.component').then(
            (mod) => mod.ExampleSfTextareaPageComponent
          ),
      },
      {
        path: 'sf-loader-circular',
        loadComponent: () =>
          import(
            './pages/example-sf-loader-circular-page/example-sf-loader-circular-page.component'
          ).then((mod) => mod.ExampleSfLoaderCircularPageComponent),
      },
      {
        path: 'forms-showcase',
        data: {
          category: 'showcase',
          sidebarLabel: 'Forms',
        },
        loadComponent: () =>
          import('./pages/forms-showcase-page/forms-showcase-page.component').then(
            (mod) => mod.FormsShowcasePageComponent
          ),
      },
    ],
  },
];
