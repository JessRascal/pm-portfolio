class ProductSidepanel extends HTMLElement {
  constructor() {
    super();
  }

  /*
   * TODO:
   *  - Figure out how to display this data on mobile
   */

  connectedCallback() {
    this.innerHTML = `
      <aside class="text-sm xl:text-base hd:text-lg xl:text-right text-medium">
        <img
          :src="imageSrc"
          :alt="imageAlt"
          class="mx-auto xl:mx-0 rounded"
        />
        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-2 xl:gap-y-2 hd:gap-x-10 xl:mt-2">
          <div class="col-span-full md:col-span-2 xl:col-span-full">
            <h6 class="uppercase text-disabled">Product Vision</h6>
            <div x-text="vision"></div>
          </div>

          <div class="md:text-right">
            <h6 class="uppercase text-disabled">Status</h6>
            <div x-text="status"></div>
          </div>

          <div class="text-right md:text-left xl:text-right">
            <h6 class="uppercase text-disabled">Type</h6>
            <div x-text="type"></div>
          </div>

          <div class="md:col-span-2 xl:col-span-1 md:text-right">
            <h6 class="uppercase text-disabled">Platform</h6>
            <div x-text="platform"></div>
          </div>

          <div class="text-right md:text-left xl:text-right">
            <h6 class="uppercase text-disabled">More Info.</h6>
            <a x-show="websiteUrl" :href="websiteUrl" target="_blank">Product Website</a>
            <div x-show="!websiteUrl">N/A</div>
          </div>
          
          <div class="col-span-full md:col-span-2 md:text-right">
          <h6 class="uppercase text-disabled mb-2">Tech</h6>
            <template x-for="tech in stack" :key="$id">
              <span class="mr-2 md:mr-0 md:ml-2 py-1.5 px-2.5 align-baseline text-xs text-high font-semibold text-center leading-none bg-slate-700 rounded whitespace-nowrap" x-text="tech"></span>
            </template>
          </div>
        </div>
      </aside>
    `;
  }
}

customElements.define('product-sidepanel', ProductSidepanel);
