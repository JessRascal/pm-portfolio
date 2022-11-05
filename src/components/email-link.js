class EmailLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="flex items-center">
        <a
          href="mailto:hi@jessey.co.uk"
          target="_blank"
          rel="noopener"
          class="no-underline"
          >
            <i class="ri-mail-fill"></i>
            <span class="ml-3">hi@jessey.co.uk</span>
        </a>
      </div>
    `;
  }
}

customElements.define('email-link', EmailLink);
