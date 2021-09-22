import { NgModule } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './routes/home/home.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';
import { ContactComponent } from './routes/contact/contact.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, NotfoundComponent, ContactComponent],
  imports: [AppRoutingModule, BrowserModule, NgbModule],
  providers: [Meta, Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
