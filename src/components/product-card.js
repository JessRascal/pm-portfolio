class ProductCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <a :href="product.caseStudyUrl" class="block min-h-[14rem] p-6 pt-2 hover:bg-slate-800 border border-slate-500/25 rounded-lg no-underline transition ease-out">
          <h4 class="mb-4" x-text="product.name"></h4>
          <em>"<span x-text="product.vision"></span>"</em>
      </a>
    `;
  }
}

customElements.define('product-card', ProductCard);
