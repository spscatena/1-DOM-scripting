import createNav from "./modules/navbar.js";
import { navItemsObject } from "./modules/navitems.js";

const root = document.querySelector(".site-wrap");
const nytapi = "1c0qzh3dUTYbz2QaaXk8r0GpFsMGKzw4";
const nytUrl = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${nytapi}`;

const limit = 6;
const categories = navItemsObject.map((item) => item.label);

function fetchArticles(section) {
  fetch(`js/NYT-JSON/${section}.json`)
    .then((response) => response.json())
    .then((myJson) => renderStories(myJson));
}

function getArticlesByCategory(cat) {
  cat.forEach(function (category) {
    fetchArticles(category);
  });
}

getArticlesByCategory(categories);

function renderStories(data) {
  var sectionHead = document.createElement("div");
  sectionHead.id = data.section.toLowerCase();
  sectionHead.innerHTML = `<h3  class="section-head">${data.section}</h3>`;
  root.prepend(sectionHead);

  const stories = data.results.slice(0, limit);

  stories.map((story) => {
    let storyEl = document.createElement("div");
    storyEl.className = "entry";
    storyEl.innerHTML = `
    <img src="${
      story.multimedia.length > 0 ? story.multimedia[0].url : "img/no-image.png"
    }" />
    <div>
      <h3><a target="_blank" href="${story.short_url}">${story.title}</a></h3>
      <p>${story.abstract}</p>
    </div>
    `;
    sectionHead.append(storyEl);
  });
}

createNav();
