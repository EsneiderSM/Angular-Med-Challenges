import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ChallengeOneComponent } from './challenge-one/challenge-one.component';
import { ChallengeTwoComponent } from './challenge-two/challenge-two.component';


@NgModule({
  declarations: [
    AppComponent,
    ChallengeOneComponent,
    ChallengeTwoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
