import Alpine from 'alpinejs';

Alpine.store('stats', {
  name: 'Stats',
  items: [
    { text: 'Product Management', value: '11yrs' },
    { text: 'Product Design', value: '7yrs' },
    { text: 'Products Managed', value: '15' },
    { text: 'Users Helped', value: '20k' },
  ],
});

Alpine.store('contact', {
  name: 'Contact',
  items: [
    { text: 'hi@jessey.co.uk', url: 'mailto:hi@jessey.co.uk' },
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/michael-jessey/',
    },
    { text: 'Twitter', url: 'https://twitter.com/JessRascal' },
  ],
});

Alpine.store('content', {
  name: 'Content',
  items: [
    { text: 'My Blog', url: 'https://medium.com/@JessRascal' },
    { text: 'GitHub', url: 'https://github.com/JessRascal' },
  ],
});
