import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services: { icon: string; title: string; description: string }[] = [
    {
      icon: 'assets/icons/002-ux-design.svg',
      title: 'UX Design',
      description: 'We design user experience for your business. fill the form below to get started. And we will get back to you as soon as possible.',
    },
    {
      icon: 'assets/icons/003-web-development.svg',
      title: 'Web Development',
      description: 'We develop websites for your business.',
    },
    {
      icon: 'assets/icons/004-mobile-apps.svg',
      title: 'Mobile Apps',
      description: 'We develop mobile apps for your business.',
    },
    {
      icon: 'assets/icons/005-seo.svg',
      title: 'SEO',
      description: 'We provide SEO services for your business.',
    },
    {
      icon: 'assets/icons/006-marketing.svg',
      title: 'Marketing',
      description: 'We provide marketing services for your business.',
    },
  ];
}
