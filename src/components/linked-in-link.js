class LinkedInLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="flex items-center">
        <a
          href="https://www.linkedin.com/in/michael-jessey/"
          target="_blank"
          rel="noopener"
          class="no-underline"
          >
            <i class="ri-linkedin-box-fill"></i>
            <span class="ml-3">LinkedIn</span>
        </a>
      </div>
    `;
  }
}

customElements.define('linked-in-link', LinkedInLink);
