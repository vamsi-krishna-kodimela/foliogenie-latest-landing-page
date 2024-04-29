import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerGuidanceSectionComponent } from './career-guidance-section.component';

describe('CareerGuidanceSectionComponent', () => {
  let component: CareerGuidanceSectionComponent;
  let fixture: ComponentFixture<CareerGuidanceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerGuidanceSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerGuidanceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
