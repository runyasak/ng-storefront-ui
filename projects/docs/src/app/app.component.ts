import {
  NgDocRootComponent,
  NgDocNavbarComponent,
  NgDocSidebarComponent,
  NgDocSearchComponent,
  NgDocThemeService,
} from '@ng-doc/app';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgDocRootComponent,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
    NgDocSearchComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(protected readonly themeService: NgDocThemeService) {
    this.themeService.set('custom-theme');
  }
}
