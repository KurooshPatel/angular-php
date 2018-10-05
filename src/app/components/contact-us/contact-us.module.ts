import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {ContactUsRoutingModule} from './contact-us-routing.module';

@NgModule({
  imports: [
    SharedModule,ContactUsRoutingModule/*,HomeComponent*/
  ],
  declarations: [ContactUsRoutingModule.components]
})
export class ContactUsModule { }
