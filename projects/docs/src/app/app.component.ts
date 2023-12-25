import {
  NgDocRootComponent,
  NgDocNavbarComponent,
  NgDocSidebarComponent,
  NgDocSearchComponent,
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
export class AppComponent {}
