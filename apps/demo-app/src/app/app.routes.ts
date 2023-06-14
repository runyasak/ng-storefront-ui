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
        path: 'sf-button',
        loadComponent: () =>
          import('./pages/example-sf-button-page/example-sf-button-page.component').then(
            (mod) => mod.ExampleSfButtonPageComponent
          ),
      },
      {
        path: 'sf-list-item',
        loadComponent: () =>
          import('./pages/example-sf-list-item-page/example-sf-list-item-page.component').then(
            (mod) => mod.ExamplesSfListItemPageComponent
          ),
      },
    ],
  },
];
