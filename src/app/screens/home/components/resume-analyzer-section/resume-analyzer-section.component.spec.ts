import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAnalyzerSectionComponent } from './resume-analyzer-section.component';

describe('ResumeAnalyzerSectionComponent', () => {
  let component: ResumeAnalyzerSectionComponent;
  let fixture: ComponentFixture<ResumeAnalyzerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeAnalyzerSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeAnalyzerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
