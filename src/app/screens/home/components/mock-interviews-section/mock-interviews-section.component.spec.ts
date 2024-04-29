import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockInterviewsSectionComponent } from './mock-interviews-section.component';

describe('MockInterviewsSectionComponent', () => {
  let component: MockInterviewsSectionComponent;
  let fixture: ComponentFixture<MockInterviewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockInterviewsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockInterviewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
