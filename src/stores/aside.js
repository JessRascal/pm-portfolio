import Alpine from 'alpinejs';

Alpine.store('sections', [
  {
    name: 'Stats',
    items: [
      { text: 'Product Management', value: '11yrs' },
      { text: 'Product Design', value: '7yrs' }, // TODO: Better name?
      // { text: 'Products Delivered', value: '15' }, // TODO: Better name?
      { text: 'Users Helped', value: '20k' },
    ],
  },
  // {
  //   name: 'Contact',
  //   hasLinks: true,
  //   items: [
  //     { text: 'hi@jessey.co.uk', url: 'mailto:hi@jessey.co.uk' },
  //     {
  //       text: 'LinkedIn',
  //       url: 'https://www.linkedin.com/in/michael-jessey/',
  //     },
  //     { text: 'Twitter', url: 'https://twitter.com/JessRascal' },
  //   ],
  // },
  // {
  //   name: 'Content',
  //   hasLinks: true,
  //   items: [
  //     { text: 'My Blog', url: 'https://medium.com/@JessRascal' },
  //     { text: 'GitHub', url: 'https://github.com/JessRascal' },
  //   ],
  // },
]);

// Alpine.store('stats', {
//   name: 'Stats',
//   items: [
//     { text: 'Product Management', value: '11yrs' },
//     { text: 'Product Design', value: '7yrs' }, // TODO: Better name?
//     // { text: 'Products Delivered', value: '15' }, // TODO: Better name?
//     { text: 'Users Helped', value: '20k' },
//   ],
// });

// Alpine.store('contact', {
//   name: 'Contact',
//   items: [
//     { text: 'hi@jessey.co.uk', url: 'mailto:hi@jessey.co.uk' },
//     {
//       text: 'LinkedIn',
//       url: 'https://www.linkedin.com/in/michael-jessey/',
//     },
//     { text: 'Twitter', url: 'https://twitter.com/JessRascal' },
//   ],
// });

// Alpine.store('content', {
//   name: 'Content',
//   items: [
//     { text: 'My Blog', url: 'https://medium.com/@JessRascal' },
//     { text: 'GitHub', url: 'https://github.com/JessRascal' },
//   ],
// });
