import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', loadChildren : './components/home/home.module#HomeModule'},
  { path: 'about', loadChildren : './components/about/about.module#AboutModule'},
  { path: 'contact-us', loadChildren : './components/contact-us/contact-us.module#ContactUsModule'},
  { path: 'login', loadChildren : './components/login/login.module#LoginModule'},
  { path: 'logout', loadChildren : './components/logout/logout.module#LogoutModule'},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
