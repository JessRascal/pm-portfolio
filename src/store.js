import Alpine from 'alpinejs';

// NAV
Alpine.store('nav', {
  isSidePanelOpen: false,
  links: [
    { text: 'About Me', url: '#about-me' },
    { text: 'My Approach', url: '#my-approach' },
    { text: 'Case Studies', url: '#case-studies' },
    { text: 'Contact Me', url: '#contact-me' },
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
        { text: 'Product Design', value: '7yrs' }, // TODO: Better name?
        // { text: 'Products Delivered', value: '15' }, // TODO: Better name?
        { text: 'Users Helped', value: '20k' },
      ],
    },
    {
      name: 'Contact',
      hasLinks: true,
      items: [
        { text: 'hi@jessey.co.uk', url: 'mailto:hi@jessey.co.uk' },
        {
          text: 'LinkedIn',
          url: 'https://www.linkedin.com/in/michael-jessey/',
        },
        { text: 'Twitter', url: 'https://twitter.com/JessRascal' },
      ],
    },
    {
      name: 'Content',
      hasLinks: true,
      items: [
        { text: 'My Blog', url: 'https://medium.com/@JessRascal' },
        { text: 'GitHub', url: 'https://github.com/JessRascal' },
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
    //     { text: '', value: '7yrs' }, // TODO: Better name?
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
      title: 'Handing-Off to the Development Team',
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
Alpine.store('cases', {
  products: [
    {
      title: 'Ops Suite',
      titleUrl:
        'https://www.rts-solutions.net/work-preparation-logistics-arrangement-work-management',
      vision: '???',
      status: 'Growth',
      type: 'SaaS (B2B)',
      platform: 'Web',
      stack: ['ASP.NET Core MVC', 'Vue', 'SASS'],
      imageSrc: 'https://via.placeholder.com/300',
      markdownSrc: 'ops-suite.md',
    },
  ],
});
