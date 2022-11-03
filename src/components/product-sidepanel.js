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
      <aside class="text-right text-medium">
        <img
          :src="imageSrc"
          alt="A screenshot of Ops Suite on a desktop screen"
          class="mx-auto xl:mx-0"
        />
        <!-- <div class="hidden md:flex justify-end">
          <img
            srcset="
              assets/me-and-kodi-cropped-200x200.jpg 200w,
              assets/me-and-kodi-cropped-300x300.jpg 300w
            "
            sizes="
              (min-width: 1920px) 300px,
              (min-width: 2500px) 300px,
              200px"
            src="assets/me-and-kodi-cropped-200x200.jpg"
            alt="Me smiling while holding my mum's dog, Kodi"
            class="rounded-lg"
          />
        </div> -->
        <div class="mt-4 hd:mt-8">
          <h6 class="uppercase text-disabled">Product Vision</h6>
          <div x-text="vision"></div>

          <h6 class="uppercase text-disabled">Status</h6>
          <div x-text="status"></div>

          <h6 class="uppercase text-disabled">Type</h6>
          <div x-text="type"></div>

          <h6 class="uppercase text-disabled">Platform</h6>
          <div x-text="platform"></div>
          
          <div class="mt-4 mb-px">
            <template x-for="tech in stack" :key="$id">
              <span class="ml-2 py-1.5 px-2.5 align-baseline text-xs text-high font-semibold text-center leading-none bg-slate-700 rounded whitespace-nowrap" x-text="tech"></span>
            </template>
          </div>

          <div x-show="websiteUrl" class="mt-6">
            <a :href="websiteUrl">Product Website</a>
          </div>
        </div>
      </aside>
    `;
  }
}

customElements.define('product-sidepanel', ProductSidepanel);
