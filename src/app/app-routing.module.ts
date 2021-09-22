import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './routes/contact/contact.component';
import { HomeComponent } from './routes/home/home.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: $localize`:@@homeTitle:Home | Angular Playground` },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: $localize`:@@contactTitle:Contact | Angular Playground` },
  },
  {
    path: '404',
    component: NotfoundComponent,
    data: { title: $localize`:@@notFoundTitle:404 | Angular Playground` },
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
