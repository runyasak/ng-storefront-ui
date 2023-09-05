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
    ],
  },
];
