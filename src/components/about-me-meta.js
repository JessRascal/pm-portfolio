class AboutMeMetaData extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <aside
          class="text-right text-medium"
        >
          <div class="hidden md:flex justify-end">
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
          </div>
          <template x-for="section in $store.aside.sections" :key="$id">
            <div class="mt-4 hd:mt-8">
              <h6
                class="mb-1 uppercase text-disabled"
                x-text="section.name"
              ></h6>
              <!-- section has links -->
              <template x-if="section.hasLinks">
                <template x-for="item in section.items" :key="$id">
                  <div class="grid mb-1">
                    <a
                      x-bind:href="item.url"
                      x-text="item.text"
                      target="_blank"
                      rel="noopener"
                    ></a>
                  </div>
                </template>
              </template>
              <!-- section doesn't have links -->
              <template x-if="!section.hasLinks">
                <template x-for="item in section.items" :key="$id">
                  <div class="grid grid-cols-6 mb-1">
                    <span class="col-span-5 mr-4" x-text="item.text"></span>
                    <span x-text="item.value"></span>
                  </div>
                </template>
              </template>
            </div>
          </template>
        </aside>
    `;
  }
}

customElements.define('about-me-meta', AboutMeMetaData);
