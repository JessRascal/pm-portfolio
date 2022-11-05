import Alpine from 'alpinejs';
import './store';

// global components
import './components/navbar';
import './components/footer';

// TODO: Only import these in the files that need them
import './components/about-me-meta';
import './components/product-card';
import './components/product-sidepanel';
import './components/link-linked-in';
import './components/link-twitter';
import './components/link-email';
import './components/link-blog';
import './components/link-github';

window.Alpine = Alpine;

Alpine.start();
