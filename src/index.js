import Alpine from 'alpinejs';
import './store';

// global components
import './components/navbar';
import './components/footer';

// TODO: Only import these in the files that need them
import './components/about-me-meta';
import './components/product-card';
import './components/product-sidepanel';
import './components/linked-in-link';
import './components/twitter-link';
import './components/email-link';
import './components/medium-link';
import './components/github-link';

window.Alpine = Alpine;

Alpine.start();
