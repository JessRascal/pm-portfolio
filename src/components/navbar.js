class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav
        class="px-2 sm:px-4 py-2 fixed w-full z-20 top-0 left-0 bg-slate-900/90 border-b border-slate-500/25"
        x-data
      >
        <div
          class="container flex flex-wrap justify-end md:justify-center items-center mx-auto"
        >
          <div
            class="hidden justify-between items-center md:flex"
            id="navbar-sticky"
          >
            <div
              class="flex flex-col justify-items-center p-2 mt-4 rounded-lg border border-gray-100 md:flex-row md:mt-0 md:border-0"
            >
              <!-- LINKS -->
              <template x-for="link in $store.nav.links">
                <div class="px-10">
                  <a
                    x-bind:href="link.url"
                    x-text="link.text"
                    class="text-medium no-underline"
                    rel="noopener"
                  ></a>
                </div>
              </template>
            </div>
          </div>
          <!-- NAV TOGGLE -->
          <div class="flex">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-high rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="$store.nav.isSidePanelOpen"
              @click="$store.nav.isSidePanelOpen = true"
            >
              <span class="sr-only">Open navigation</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <!-- NAV TOGGLE END -->
        </div>

        <!-- NAV SIDE PANEL (mobile) -->
        <!-- overlay -->
        <div
          class="absolute md:hidden top-0 right-0 bottom-0 left-0 w-screen h-screen z-10 overflow-hidden bg-slate-900 opacity-80 transition ease-in-out"
          x-show="$store.nav.isSidePanelOpen"
        ></div>
        <aside
          class="absolute md:hidden top-0 left-full w-3/4 h-screen z-20 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 border-l border-l-slate-600 transition ease-in-out"
          :class="$store.nav.isSidePanelOpen ? '-translate-x-full' : ''"
        >
          <div class="flex flex-col h-full p-6">
            <!-- SIDE PANEL: CLOSE BUTTON -->
            <div class="self-end">
              <button
                type="button"
                class="text-medium"
                @click="$store.nav.isSidePanelOpen = false"
              >
                <span class="sr-only">Close navigation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <!-- SIDE PANEL: NAV LINKS -->
            <div class="flex-1">
              <template x-for="link in $store.nav.links">
                <a
                  x-bind:href="link.url"
                  x-text="link.text"
                  class="block py-2 px-3 text-medium no-underline"
                  rel="noopener"
                  @click="$store.nav.isSidePanelOpen = false"
                ></a>
              </template>
            </div>
            <!-- SIDE PANEL: CONTACT LINKS -->
            <div>
              <div class="pl-3 text-sm text-disabled uppercase">Links</div>
              <template x-for="link in $store.aside.sections[1].items">
                <a
                  x-bind:href="link.url"
                  x-text="link.text"
                  class="block py-2 px-3 text-medium no-underline"
                  rel="noopener"
                  @click="$store.nav.isSidePanelOpen = false"
                ></a>
              </template>
              <template x-for="link in $store.aside.sections[2].items">
                <a
                  x-bind:href="link.url"
                  x-text="link.text"
                  class="block py-2 px-3 text-medium no-underline"
                  rel="noopener"
                  @click="$store.nav.isSidePanelOpen = false"
                ></a>
              </template>
            </div>
          </div>
        </aside>
        <!-- NAV SIDE PANEL END -->
      </nav>
    `;
  }
}

customElements.define('navbar-component', Navbar);
