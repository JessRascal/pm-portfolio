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
