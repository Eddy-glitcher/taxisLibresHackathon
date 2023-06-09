import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'hackathon', loadChildren: ()=> import('./landing-page/landing-page.module').then(m => m.LandingPageModule)},
  {path: '**', redirectTo: 'hackathon'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
