class TwitterLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <a
        href="https://twitter.com/JessRascal"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center no-underline"
        >
          <i class="ri-twitter-fill"></i>
          <span class="ml-4">Twitter</span>
      </a>
    `;
  }
}

customElements.define('twitter-link', TwitterLink);
