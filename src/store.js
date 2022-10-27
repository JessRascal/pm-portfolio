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
      number: 0,
      phase: null,
      title: 'Introduction',
      markdownSrc: 'intro.md',
    },
    {
      number: 1,
      phase: null,
      title: 'Product Discovery Phase',
      markdownSrc: 'discovery-phase.md',
    },
    {
      number: 2,
      phase: 'Discovery',
      title: 'Define a Product Vision',
      markdownSrc: 'vision.md',
    },
    {
      number: 3,
      phase: 'Discovery',
      title: 'Customer/User Research',
      markdownSrc: 'user-research.md',
    },
    {
      number: 4,
      phase: 'Discovery',
      title: 'Customer/User Analysis',
      markdownSrc: 'user-analysis.md',
    },
    {
      number: 5,
      phase: 'Discovery',
      title: 'Create a Product Strategy',
      markdownSrc: 'strategy.md',
    },
    {
      number: 6,
      phase: 'Discovery',
      title: 'Create a Product Backlog',
      markdownSrc: 'backlog.md',
    },
    {
      number: 7,
      phase: null,
      title: 'Design Phase',
      markdownSrc: 'design-phase.md',
    },
    {
      number: 8,
      phase: 'Design',
      title: 'Create the Wireframes',
      markdownSrc: 'wireframes.md',
    },
    {
      number: 9,
      phase: 'Design',
      title: 'Create the Mockups / Prototype',
      markdownSrc: 'prototype.md',
    },
    {
      number: 10,
      phase: 'Design',
      title: 'Carry Out Testing / Validation',
      markdownSrc: 'validation.md',
    },
    {
      number: 11,
      phase: null,
      title: 'Product Delivery Phase',
      markdownSrc: 'delivery-phase.md',
    },
    {
      number: 12,
      phase: 'Delivery',
      title: 'Hand-Off to the Development Team',
      markdownSrc: 'hand-off.md',
    },
    {
      number: 13,
      phase: 'Delivery',
      title: 'Launch the Product',
      markdownSrc: 'launch.md',
    },
    {
      number: 14,
      phase: 'Delivery',
      title: 'Gather Feedback and Track Metrics',
      markdownSrc: 'feedback.md',
    },
  ],
});
