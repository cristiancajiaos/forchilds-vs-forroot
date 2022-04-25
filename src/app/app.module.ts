import { CounterModule } from './counter/counter.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { EagerModule } from './eager/eager.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule.forRoot(),
    EagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
