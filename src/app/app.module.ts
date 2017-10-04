import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TwoComponent } from './two/two.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { OneComponent } from './one/one.component';


@NgModule({
  declarations: [
    AppComponent,
    TwoComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
