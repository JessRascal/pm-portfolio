import Alpine from 'alpinejs';
import './store';

// global components
import './components/navbar';
import './components/footer';

// TODO: Only import these in the files that need them
import './components/about-me-meta';
import './components/product-card';
import './components/product-sidepanel';

window.Alpine = Alpine;

Alpine.start();
