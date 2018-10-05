import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {LogoutRoutingModule} from './logout-routing.module';

@NgModule({
  imports: [
    SharedModule,LogoutRoutingModule/*,LogoutComponent*/
  ],
  declarations: [LogoutRoutingModule.components]
})
export class LogoutModule { }
