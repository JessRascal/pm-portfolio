class EmailLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <a
        href="mailto:hi@jessey.co.uk"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center no-underline"
        >
          <i class="ri-mail-fill"></i>
          <span class="ml-4">hi@jessey.co.uk</span>
      </a>
    `;
  }
}

customElements.define('email-link', EmailLink);
