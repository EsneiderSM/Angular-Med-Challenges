import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChallengeOneComponent } from '../challenge-one/challenge-one.component';
import { ChallengeTwoComponent } from '../challenge-two/challenge-two.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '', component: ChallengeTwoComponent},
  { path: 'one', component: ChallengeOneComponent},
  { path: 'two', component: ChallengeTwoComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
