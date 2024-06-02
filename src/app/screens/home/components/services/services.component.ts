import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services: {
    icon: string;
    title: string;
    sectionTitle: string;
    description: string;
    highlights: string[];
  }[] = [
    {
      icon: 'assets/icons/002-ux-design.svg',
      title: 'Mock Interviews',
      sectionTitle:
        'Master Your Interview Skills with AI-powered Mock Interviews',
      description:
        'Practice like a pro & get AI feedback. Upgrade for human coaches tailored to your industry.',
      highlights: [
        'Refine your interview skills.',
        'Get instant insights.',
        'Industry-specific coaching.',
      ],
    },
    {
      icon: 'assets/icons/002-ux-design.svg',
      title: 'Resume Builder & Analyzer',
      sectionTitle: 'Craft a Winning Resume with Our Builder & Analyzer',
      description:
        'Build a professional resume & get expert feedback to optimize for job applications.',
      highlights: [
        'Create a standout resume in minutes.',
        'Expert feedback gets you noticed.',
        'Receive actionable insights.',
      ],
    },
    {
      icon: 'assets/icons/002-ux-design.svg',
      title: 'Career Counseling',
      sectionTitle:
        'Find Your Perfect Path with Personalized Career Counseling',
      description:
        'Get one-on-one guidance to explore options, navigate transitions, and achieve your professional goals.',
      highlights: [
        'Find your perfect career fit.',
        'Develop a personalized roadmap.',
        'Support for career changes.',
      ],
    },
    {
      icon: 'assets/icons/002-ux-design.svg',
      title: 'Workshops & Gamified Learning',
      sectionTitle:
        'Level Up Your Skills with Interactive Workshops & Gamified Learning',
      description:
        'Learn in-demand skills & career topics through engaging workshops & interactive experiences.',
      highlights: [
        'Workshops led by industry pros.',
        'Stay motivated, learn fast.',
        'Explore diverse career topics.',
      ],
    },
  ];
}
