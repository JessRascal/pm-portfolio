class LinkedInLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <a
        href="https://www.linkedin.com/in/michael-jessey/"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center no-underline"
        >
          <i class="ri-linkedin-box-fill"></i>
          <span class="ml-4">LinkedIn</span>
      </a>
    `;
  }
}

customElements.define('linked-in-link', LinkedInLink);
