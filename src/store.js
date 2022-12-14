import Alpine from 'alpinejs';

// NAV
Alpine.store('nav', {
  isSidePanelOpen: false,
  links: [
    {
      text: 'About Me',
      url: '/index.html#about-me',
      iconClass: 'ri-emotion-happy-fill',
    },
    {
      text: 'My Approach',
      url: '/index.html#my-approach',
      iconClass: 'ri-rocket-fill',
    },
    {
      text: 'Case Studies',
      url: '/index.html#case-studies',
      iconClass: 'ri-book-open-fill',
    },
    {
      text: 'Contact Me',
      url: '/index.html#contact-me',
      iconClass: 'ri-chat-1-fill',
    },
  ],
});

// ASIDE
Alpine.store('aside', {
  sections: [
    {
      name: 'Stats',
      hasLinks: false,
      items: [
        { text: 'Product Management', value: '11yrs' },
        { text: 'Product Design', value: '7yrs' },
        // { text: 'Products Delivered', value: '15', },
        { text: 'Users Helped', value: '20k' },
      ],
    },
    {
      name: 'Contact',
      hasLinks: true,
      items: [
        {
          text: 'hi@jessey.co.uk',
          url: 'mailto:hi@jessey.co.uk',
          iconClass: 'ri-mail-fill',
        },
        {
          text: 'LinkedIn',
          url: 'https://www.linkedin.com/in/michael-jessey/',
          iconClass: 'ri-linkedin-box-fill',
        },
        {
          text: 'Twitter',
          url: 'https://twitter.com/JessRascal',
          iconClass: 'ri-twitter-fill',
        },
      ],
    },
    {
      name: 'Content',
      hasLinks: true,
      items: [
        {
          text: 'My Blog',
          url: 'https://medium.com/@JessRascal',
          iconClass: 'ri-quill-pen-fill',
        },
        {
          text: 'GitHub',
          url: 'https://github.com/JessRascal',
          iconClass: 'ri-github-fill',
        },
      ],
    },
    // {
    //   name: 'Experience',
    //   hasLinks: false,
    //   items: [
    //     {
    //       text: 'Product Manager | RTS Solutions',
    //       value: '2011-Present',
    //     },
    //     { text: '', value: '7yrs', }, // TODO: Better name?
    //   ],
    // },
  ],
});

// MY APPROACH
Alpine.store('approach', {
  currentSlide: 0,
  slides: [
    {
      phase: null,
      title: 'Introduction',
      markdownSrc: 'intro.md',
    },
    {
      phase: 'Discovery Phase',
      title: 'Defining a Product Vision',
      markdownSrc: 'vision.md',
    },
    {
      phase: 'Discovery Phase',
      title: 'User and Market Research',
      markdownSrc: 'user-research.md',
    },
    {
      phase: 'Discovery Phase',
      title: 'User Analysis',
      markdownSrc: 'user-analysis.md',
    },
    {
      phase: 'Discovery Phase',
      title: 'Creating a Product Strategy',
      markdownSrc: 'strategy.md',
    },
    {
      phase: 'Discovery Phase',
      title: 'Creating a Product Backlog',
      markdownSrc: 'backlog.md',
    },
    {
      phase: 'Design Phase',
      title: 'Creating the Wireframes',
      markdownSrc: 'wireframes.md',
    },
    {
      phase: 'Design Phase',
      title: 'Creating the Mockups / Prototype',
      markdownSrc: 'prototype.md',
    },
    {
      phase: 'Design Phase',
      title: 'Carrying Out User Testing / Validation',
      markdownSrc: 'validation.md',
    },
    {
      phase: 'Delivery Phase',
      title: 'Briefing the Development Team',
      markdownSrc: 'hand-off.md',
    },
    {
      phase: 'Delivery Phase',
      title: 'Launching the Product',
      markdownSrc: 'launch.md',
    },
    {
      phase: 'Delivery Phase',
      title: 'Gathering Feedback and Tracking Metrics',
      markdownSrc: 'feedback.md',
    },
  ],
});

// CASE STUDIES
Alpine.store('cases', [
  {
    name: 'Ops Suite',
    imageSrc: '../assets/ops-suite-work-management-cropped-680w.png',
    imageAlt: 'A cropped image showing part of the Ops Screen app',
    vision:
      'A single location to manage work, people, and machines to allow successful completion of railway maintenance',
    status: 'Growth',
    type: 'SaaS (B2B)',
    platform: 'Web',
    stack: ['ASP.NET Core MVC', 'Vue', 'SASS'],
    websiteUrl:
      'https://www.rts-solutions.net/work-preparation-logistics-arrangement-work-management',
    caseStudyUrl: '/case-studies/ops-suite.html',
  },
  {
    name: 'Ops Suite Mobile',
    imageSrc: '../assets/ops-suite-mobile-mockup-cropped-410w.png',
    imageAlt:
      'A cropped image showing part of a mockup of the Ops Suite Mobile app',
    vision: 'To prove simple real-time communication with site',
    status: 'Discovery Phase',
    type: 'SaaS (B2B)',
    platform: 'Mobile (native)',
    stack: ['Flutter', 'iOS', 'Android'],
    websiteUrl: false,
    caseStudyUrl: '/case-studies/ops-suite-mobile.html',
  },
  {
    name: 'SSoWPS',
    imageSrc: '../assets/ssowps-plans-cropped-680w.png',
    imageAlt: 'A cropped image showing part of the SSoWPS app',
    vision:
      'Make it easier to ensure people are safe when working on the railway',
    status: 'Maintenance',
    type: 'Bespoke Self-Hosted',
    platform: 'Web',
    stack: ['ASP.NET MVC'],
    websiteUrl: false,
    caseStudyUrl: '/case-studies/ssowps.html',
  },
  {
    name: 'Nudge',
    imageSrc: '../assets/nudge-board-mockup-cropped-680w.png',
    imageAlt: 'A cropped image showing part of a mockup of the Nudge app',
    vision:
      'Simplify, centralise, and standardise customer support for small tech companies.',
    status: 'Discovery Phase',
    type: 'SaaS (B2B/B2C)',
    platform: 'Web',
    stack: ['Firebase Firestore', 'Vue'],
    websiteUrl: false,
    caseStudyUrl: '/case-studies/nudge.html',
  },
]);
