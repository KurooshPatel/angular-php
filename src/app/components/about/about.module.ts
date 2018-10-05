import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {AboutRoutingModule} from './about-routing.module';

@NgModule({
  imports: [
    SharedModule,AboutRoutingModule/*,HomeComponent*/
  ],
  declarations: [AboutRoutingModule.components]
})
export class AboutModule { }
