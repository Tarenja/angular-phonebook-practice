import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { AgePipe } from './pipes/age.pipe';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', //only if entire path is empty string
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact-list',
    component: ContactListComponent,
  },
  {
    path: 'contact-details/:id',
    component: ContactDetailsComponent,
  },
  {
    path: 'add-contact',
    component: AddContactComponent,
  },
  {
    path: 'edit-contact/:id',
    component: EditContactComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ContactDetailsComponent,
    FullNamePipe,
    AgePipe,
    ContactListComponent,
    AddContactComponent,
    EditContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
