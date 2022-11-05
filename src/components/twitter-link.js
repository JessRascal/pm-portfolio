class TwitterLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="flex items-center">
        <a
          href="https://twitter.com/JessRascal"
          target="_blank"
          rel="noopener"
          class="no-underline"
          >
            <i class="ri-twitter-fill"></i>
            <span class="ml-3">Twitter</span>
        </a>
      </div>
    `;
  }
}

customElements.define('twitter-link', TwitterLink);
