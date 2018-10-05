import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header.component';

const routes: Routes = [
  { path: '/login', loadChildren : './component/login/login.module#LoginModule'},
  { path: '/about', loadChildren : './component/about/about.module#AboutModule'},
  { path: '/contact', loadChildren : './component/contact/contact.module#ContactModule'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeaderRoutingModule{
    static components = [HeaderComponent];
}
