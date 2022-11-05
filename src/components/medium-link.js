class MediumLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="flex items-center">
        <a
          href="https://medium.com/@JessRascal"
          target="_blank"
          rel="noopener"
          class="no-underline"
          >
            <i class="ri-quill-pen-fill"></i>
            <span class="ml-3">My Blog</span>
        </a>
      </div>
    `;
  }
}

customElements.define('medium-link', MediumLink);
