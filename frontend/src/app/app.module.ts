import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AnimalService } from './animal.service';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    LoginComponent,
    CreateComponent,
    EditComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
