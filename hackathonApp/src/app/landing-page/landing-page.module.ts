import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { HackathonPageComponent } from './pages/hackathon-page/hackathon-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResgisterFormComponent } from './components/resgister-form/resgister-form.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HackathonPageComponent,
    FooterComponent,
    ResgisterFormComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    HackathonPageComponent
  ]
})
export class LandingPageModule { }
