class GithubLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="flex items-center">
        <a
          href="https://github.com/JessRascal"
          target="_blank"
          rel="noopener"
          class="no-underline"
          >
            <i class="ri-github-fill"></i>
            <span class="ml-3">GitHub</span>
        </a>
      </div>
    `;
  }
}

customElements.define('github-link', GithubLink);
