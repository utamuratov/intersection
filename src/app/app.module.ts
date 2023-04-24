import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxIntersectionComponent } from 'ngx-intersection';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxIntersectionComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
