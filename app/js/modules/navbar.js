import { navItemsObject } from "./navitems.js";

function createNav() {
  const nav = document.querySelector(".main-menu");

  const closeNav = `
  <a
  href="#main-menu-toggle"
  id="main-menu-close"
  class="menu-close"
  aria-label="Close main menu"
  >
  <span class="sr-only">Close main menu</span>
  <span class="fa fa-close" aria-hidden="true"></span>
  </a>
  `;

  const markup = `
  <ul>
    ${closeNav}
    ${navItemsObject
      .map((item) => `<li><a href="${item.link}">${item.label}</a></li>`)
      .join("")}
  </ul>
  `;

  nav.innerHTML = markup;
}

export default createNav;
