import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { NewsletterSectionComponent } from './components/newsletter-section/newsletter-section.component';
import { MockInterviewsSectionComponent } from './components/mock-interviews-section/mock-interviews-section.component';
import { CareerGuidanceSectionComponent } from './components/career-guidance-section/career-guidance-section.component';
import { BlogsSectionComponent } from './components/blogs-section/blogs-section.component';
import { TemplatesSectionComponent } from './components/templates-section/templates-section.component';
import { ResumeAnalyzerSectionComponent } from './components/resume-analyzer-section/resume-analyzer-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    NewsletterSectionComponent,
    MockInterviewsSectionComponent,
    CareerGuidanceSectionComponent,
    BlogsSectionComponent,
    TemplatesSectionComponent,
    ResumeAnalyzerSectionComponent,
    AboutSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
