import Alpine from 'alpinejs';

Alpine.store('nav', {
  isSidePanelOpen: false,
  links: [
    { text: 'About Me', url: '#about-me' },
    { text: 'My Approach', url: '#my-approach' },
    { text: 'Case Studies', url: '#case-studies' },
    { text: 'Contact Me', url: '#contact-me' },
  ],
});
