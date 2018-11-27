import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
