import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorSliderComponent } from './sponsor-slider.component';

describe('SponsorSliderComponent', () => {
  let component: SponsorSliderComponent;
  let fixture: ComponentFixture<SponsorSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
