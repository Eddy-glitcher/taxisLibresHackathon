import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackathonPageComponent } from './pages/hackathon-page/hackathon-page.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'home',
        component:HackathonPageComponent
      },
      {
        path:'**',
        redirectTo:'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
