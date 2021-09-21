import { NgModule } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotfoundComponent],
  imports: [AppRoutingModule, BrowserModule, NgbModule],
  providers: [Meta, Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
