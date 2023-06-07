import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { HackathonPageComponent } from './pages/hackathon-page/hackathon-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResgisterFormComponent } from './components/resgister-form/resgister-form.component';
import { SponsorSliderComponent } from './components/sponsor-slider/sponsor-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    HeaderComponent,
    HackathonPageComponent,
    FooterComponent,
    ResgisterFormComponent,
    SponsorSliderComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    NgOptimizedImage
  ],
  exports:[
    HackathonPageComponent
  ]
})
export class LandingPageModule { }
