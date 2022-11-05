class GithubLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <a
        href="https://github.com/JessRascal"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center no-underline"
        >
          <i class="ri-github-fill"></i>
          <span class="ml-4">GitHub</span>
      </a>
    `;
  }
}

customElements.define('github-link', GithubLink);
