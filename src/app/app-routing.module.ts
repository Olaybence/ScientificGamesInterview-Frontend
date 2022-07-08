import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { GamePageComponent } from './game-page/game-page.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'game', component: GamePageComponent }, // TODO: Authoration window. No access without logging in.
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
