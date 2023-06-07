import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SfButtonComponent } from '@ng-storefront-ui/lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SfButtonComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
