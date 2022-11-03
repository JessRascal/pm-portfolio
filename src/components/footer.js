class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer
      class="container p-8 md:p-16 pt-8 text-sm md:text-base hd:text-lg text-medium text-center border-t border-slate-500/25"
    >
      <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
        <div class="md:col-span-2 md:text-left">
          &copy;&nbsp;2022 Michael Jessey
        </div>
        <div class="md:col-span-2 md:text-right">
          <a
            href="https://github.com/JessRascal/pm-portfolio"
            target="_blank"
            rel="noopener"
            >Copy this site on GitHub</a
          >
        </div>
        <div class="md:col-span-4 md:row-start-2 md:text-center">
          Designed and developed by me
          <div class="text-disabled">
            <span>(with help from</span>
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener"
              >Tailwindcss</a
            ><span>,</span>
            <a href="https://alpinejs.dev/" target="_blank" rel="noopener"
              >Alpine.js</a
            ><span>, and</span>
            <a href="https://www.netlify.com/" target="_blank" rel="noopener"
              >Netlify</a
            ><span>)</span>
          </div>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
