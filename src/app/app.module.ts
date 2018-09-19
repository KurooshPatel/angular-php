import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
    // LoginComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule, SharedModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
