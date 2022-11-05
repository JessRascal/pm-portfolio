class MediumLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <a
        href="https://medium.com/@JessRascal"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center no-underline"
        >
          <i class="ri-quill-pen-fill"></i>
          <span class="ml-4">My Blog</span>
      </a>
    `;
  }
}

customElements.define('medium-link', MediumLink);
