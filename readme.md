# Introduction

## Code of Conduct

1. There is no such thing as a silly question, you are encouraged to speak up anytime something is not clear to you
2. There is no such thing as a silly mistake, they are a gateway to learning
3. Do not dismiss someone because they have a different level of experience - be kind to others
4. During class exercises you promise to alert me the second something goes awry with your project
5. I will make myself available after class to clarify or expand on topics (or we can set an alternate time via email)

## Resources

Your instructor - Daniel Deverell (he, him): Front & Back end developer at Simon Data specializing in design systems, React and Node.

- 6:30 PM - 9:30 PM Tuesdays and Thursdays
- Daniel Deverell, [email](mailto:daniel.deverell@nyu.edu) - `daniel.deverell@nyu.edu`
- [Syllabus](https://docs.google.com/document/d/1y8YLSOsLWszTlEKK5fk1jQNSMdqOUej3c28MJBgPMyQ/edit)
- Office hours will be held an an as needed basis. Please email me if you would like to make an appointment.

### Github

[Github](https://github.com/front-end-intermediate) - `https://github.com/front-end-intermediate`, is the source for _all files_ used in this class. Each class's activities will be documented in a readme file.

You can download a zip file from Github using the green "Clone or Download" menu and selecting "Download ZIP."

Please keep the sessions home page open in a tab during class for reference and in order to copy and paste code.

The edited files as they existed at the end of class can be downloaded from the `*-done` branch of this and all subsequent Github repositories. Be sure to select the branch on Github _before_ downloading the zip. I will demonstrate this in class.

### Reading

Online reading and videos will be assigned.

## Homework

Homework will be handed in via Github and then alerting me via email - daniel.deverell@nyu.edu. I will have special sessions for those unfamiliar with Git and Github.

## Today's Homework

- Create an account on https://developer.nytimes.com/ and register an API key.
- Create a web page that retrieves data from the New York Times and display it. The Page can be as simple as you wish and need not include all the features in our exercise.
- Install [Git](https://git-scm.com)
- Install [NodeJS](https://nodejs.org)
- Create a Github account

## This Week's Reading

Review / learn JavaScript basics on [Mozilla Develpers Network](https://developer.mozilla.org/en-US/docs/Web/javascript#for_complete_beginners). Pay particular attention to the techniques used in today's class:

- [Basic DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_basic_dom_manipulation)
- [Fetching Data from the Server](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)

---

## Summary of Tools and Technology

A listing of applications and technologies you will be introduced to in the class include:

- HTML, CSS and JavaScript
- React, NODE, MongoDB, ExpressJS
- Visual Studio Code and the Terminal
- Git and Github
- SASS and Styled Components - for CSS

## VSCode

In today's class we will implement [this single page web site](http://oit2.scps.nyu.edu/~devereld/intermediate/app/) with content almost entirely generated using JavaScript (try selecting `view > developer > View Source` in Chrome).

Note the navigation on small screen.

In creating this page we will focus on techniques that are critical, not just for working effectively with DOM manipulation, but for React and other JavaScript frameworks.

In this class we will be using [Visual Studio Code](https://code.visualstudio.com/) as our editor. We will discuss its features on an as-needed basis.

Start VSCode, press `cmd + shift + p` and type in the word `shell`. Select `Install code command in PATH`.

![Image of layout](other/images/vscode.png)

---

### VSCode Extensions

Install Live Server in VS Code

Install Prettier and edit the project settings in the `.vscode` directory as per the instructions to enable format on save for JavaScript.

---

<!-- end aside -->

## The Command Line

You are going to need to have a minimal set of terminal commands at your disposal.

(Windows users should use the Git Bash terminal that is installed along with Git.)

Start the terminal app:

```sh
$ cd  // change directory
$ cd ~  // go to your home directory
$ cd <PATH>  // Mac: copy and paste the folder you want to go to
$ cd Desk  // tab completion
$ cd ..  // go up one level
$ ls  // list files, dir on a PC
$ ls -al  // list file with flags that expand the command
$ pwd  // print working directory
```

## DO THIS

`cd` into today's working directory - and type:

```sh
code .
```

Open `index.html`, right click on it and choose 'Open with Live Server'.

## Single Page App

```css
@media (prefers-color-scheme: dark) {
  * {
    --textcolor: #eee;
    --bgcolor: #555;
    --bgcolor-darker: #333;
    --highlight: #ffc400;
  }
}
body {
  color: var(--textcolor);
  background: var(--bgcolor);
}
.site-wrap {
  background: var(--bgcolor-darker);
}
```

```css
html {
  scroll-behavior: smooth;
}

/**
 * Disable smooth scrolling when users have prefers-reduced-motion enabled
 */
@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

Or:

```css
section {
  display: none;
}

section:target {
  /* Show section */
  display: block;
}
```

See demo: https://john-doe.neocities.org/

## DOM Scripting Review

The HTML DOM (Document Object Model) specification allows JavaScript to access and manipulate the elements of an HTML document.

### .querySelectorAll()

Use `document.querySelectorAll('selector')` to find all matching elements on a page. You can use any valid CSS for the selector.

In the browser's console:

```js
> var elems = document.querySelectorAll('.main-menu li');
```

Returns a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList).

### .querySelector()

Use `document.querySelector()` (without the 'All') to find the first matching element on a page.

In the browser's console:

```js
> var elem = document.querySelector('.main-menu a');
```

Returns an HTML element or "Node."

## Looping - for and forEach()

In JavaScript, you can use a `for` to loop through any iterable object - including arrays and node lists.

```js
var elems = document.querySelectorAll(".main-menu a");

for (let i = 0; i < elems.length; i++) {
  console.log(i); // index
  console.log(elems[i]); // accessor > value
}
```

ES6 introduced the [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method for looping over arrays.

You pass a [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) into `forEach()`. The first argument is the current item in the loop. The second is the current index in the array.

```js
var elems = document.querySelectorAll(".main-menu a");

elems.forEach(function (item, index) {
  console.log(index); // index
  console.log(item.href); // value
});
```

## EXERCISE I - Generating Content From an Array

We will begin by replacing the existing nav with items from an array using a `for loop`.

Note the two script tags at the bottom of `index.html`:

```html
<script src="js/navitems.js"></script>
<script src="js/myscripts.js"></script>
```

Examine `navitems.js`.

Note the difference between `navItemsObject` and `navItemsArray`. The latter is an array of values while the former offers an array of objects consisting of key/value pairs.

In the browser console:

```js
> navItemsArray;
> navItemsObject;
```

Compare `navList` and `navItemsArray` and note the `prototypes` in the inspector.

Both have a length property - `navList.length` and `navItemsArray.length` but the methods are different.

**Note that we have 8 items in the `navItemsArray` but only 6 in our `navList`.**

**In `myscripts.js`**

Select the HTML element with the class `.main-menu` In `myScripts.js`:

```js
const nav = document.querySelector(".main-menu");
```

Select all the links in nav we could write:

```js
const navList = document.querySelectorAll("#main-menu li a");
```

But here it is perhaps a bit more efficient to use `element.querySelector` (as opposed to `document.querySelector`):

```js
const nav = document.querySelector(".main-menu");
const navList = nav.querySelectorAll("li a");
```

Replace our placeholder nav items with content from an array

- use a `for` loop and `innerHTML`:

```js
const nav = document.querySelector(".main-menu");
const navList = nav.querySelectorAll("li a");

for (let i = 0; i < navList.length; i++) {
  console.log(i);
  navList[i].innerHTML = navItemsArray[i];
}
```

The `innerHTML` property can be used to both get and set HTML content in an element.

In the browser console:

```js
> var elem = document.querySelector(".site-wrap");
// Get HTML content
> var html = elem.innerHTML;
// Set HTML content
> elem.innerHTML =
  'We can dynamically change the HTML to include <a href="#">HTML elements</a>.';
```

We are using the six existing `<li>` elements in the DOM but there are 8 items in our `navItemsArray` array.

We need to dynamically generate the nav from items in the array.

Edit the HTML to remove our placeholder navigation links:

```html
<nav id="main-menu" class="main-menu" aria-label="Main menu">
  <a
    href="#main-menu-toggle"
    id="main-menu-close"
    class="menu-close"
    aria-label="Close main menu"
  >
    <span class="sr-only">Close main menu</span>
    <span class="fa fa-close" aria-hidden="true"></span>
  </a>
  <ul></ul>
</nav>
```

Note: the [responsive hamburger menu technique](https://medium.com/@heyoka/responsive-pure-css-off-canvas-hamburger-menu-aebc8d11d793) used in today's sample required that we leave the first link in place. See the article and `nav.css` for more information.

Append a `<ul>` tag to nav using:

1. [document.createElement()](https://vanillajstoolkit.com/reference/dom-injection/#createelement) creates an element, e.g. `var div = document.createElement('div');`.
2. [append](https://vanillajstoolkit.com/reference/dom-injection/#append).

JavaScript offers a number of methods to determine the insertion point.

```js
// Create a new HTML element and add some text
> var elem = document.createElement("div");
> elem.textContent = "Hello world";

// Get the element to add your new HTML element before, after, or within
> var target = document.querySelector(".main-menu");

// Inject the `div` element before the element
> target.before(elem);

// Inject the `div` element after the element
> target.after(elem);

// Inject the `div` element before the first item *inside* the element
> target.prepend(elem);

// Inject the `div` element after the first item *inside* the element
> target.append(elem);
```

Let's append a new div to the (now empty) nav.

**Delete eveything in `myscripts` and add:**

```js
const nav = document.querySelector(".main-menu");

const navList = document.createElement("ul");
navList.textContent = "Hello world";
nav.append(navList);
```

Note the `<ul>` in the header.

Dynamically create the nav based on the number of items in the array using a for loop:

```js
const nav = document.querySelector(".main-menu");

const navList = document.createElement("ul");

for (let i = 0; i < navItemsArray.length; i++) {
  let listItem = document.createElement("li");
  let linkText = navItemsArray[i];
  listItem.innerHTML = '<a href="#">' + linkText + "</a>";
  navList.append(listItem);
}

nav.append(navList);
```

Our nav bar now displays all the items in our array but the code is ugly. This is an example of [imperative programming](https://tylermcginnis.com/imperative-vs-declarative-programming/). In order to prepare for React we need to adopt a more declarative style.

We will use [Functional Programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0) techniques.

(See the `filter` examples `students.js` in today's `other` folder. Use [RunJS](https://runjs.app/).)

---

### Aside - Template Literals

Note that we used single quotes in the construction of our innerHTML: `listItem.innerHTML = '<a href="#">' + linkText + '</a>'`. Compare old school concatenation and the variable 'sentence' bu running the following in the console:

```js
const name = "Yorik";
const age = 2;
const oldschool = "My dog " + name + " is " + age * 7 + "years old.";
const newschool = `My dog ${name} is ${age * 7} years old.`;
console.log("oldschool ", oldschool);
console.log("newschool ", newschool);
```

[Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) use back ticks instead of quotes and have access to JS expressions inside plaeholders - `${ ... }`.

---

<!-- end aside  -->

Switch out the concatenation for a _template string_:

```js
for (let i = 0; i < navItemsArray.length; i++) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<a href="#">${navItemsArray[i]}</a>`;
  navList.append(listItem);
}
```

Note: if we wanted we could derive the hash from the Array values:

```js
for (let i = 0; i < navItemsArray.length; i++) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<a href="#${navItemsArray[i].toLowerCase()}">${
    navItemsArray[i]
  }</a>`;
  navList.append(listItem);
}
```

Use `forEach()` instead of a for loop:

```js
navItemsArray.forEach(function (item) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<a href="#">${item}</a>`;
  navList.appendChild(listItem);
});
```

Use an arrow function in the final script:

```js
const nav = document.querySelector(".main-menu");

const navList = document.createElement("ul");

navItemsArray.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<a href="#">${item}</a>`;
  navList.appendChild(listItem);
});

nav.append(navList);
```

---

### Aside: React

Open for reference `other > React > 1-react.html` in a browser using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Since we will be spending much of our time this semester in React, it is worthwhile to point out at this time that React -at its most basic - is simply an alternate way to create DOM elements.

The second file, `2-react-jsx.html`, uses [Babel](https://babeljs.io) to help create a DOM element.

---

<!-- end aside  -->

## EXERCISE II - Content Generation with an Array of Objects

So far we have been working with a simple array. However most of the data you will encounter will consist of an array of objects:

- [JSON Placeholder](https://jsonplaceholder.typicode.com/posts), [documentation](https://jsonplaceholder.typicode.com/)
- [City Growth](https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json), [documentation](https://gist.github.com/Miserlou/c5cd8364bf9b2420bb29)
- [New York Times API](https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0), [documentation](https://developer.nytimes.com/)
- [Pokemon API](https://pokeapi.co/api/v2/ability/?limit=5&offset=0), [documentation](https://pokeapi.co)
- and our navItemsObject:

```js
const navItemsObject = [
  {
    label: "LOGO",
    link: "#",
  },
  {
    label: "Watchlist",
    link: "#watchlist",
  },
  {
    label: "Research",
    link: "#research",
  },
  {
    label: "Markets",
    link: "#markets",
  },
  {
    label: "Workbook",
    link: "#workbook",
  },
  {
    label: "Connect",
    link: "#connect",
  },
  {
    label: "Desktop",
    link: "#desktop",
  },
  {
    label: "FAQ",
    link: "#faq",
  },
];
```

Add the links using `navItemsObject` instead of `navItemsArray`.

Note the the 'dot' accessor notation for dealing with an object and the addition of the anchor tags:

```js
navItemsObject.forEach(function (item) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<a href="${item.link}">${item.label}</a>`;
  navList.appendChild(listItem);
});
```

Navigate and inspect the code and note that we now have anchor tags with page fragment links in our html and are able to navigate within our page.

Add page fragment links:

```html
<body id="top">
  ...
  <a href="#top">Back to top</a>
  ...
</body>
```

### Aside: Objects

Open `other > javascript > Objects > objects.html` in a browser tab.

Examine the sample object in the browser console:

```sh
last
me
me.links
var twitter = me.links.social.twitter
```

Add to script block:

```js
const { twitter, facebook } = me.links.social;
```

```js
const { twitter: twit } = me.links.social;
```

This is an example of [destructing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) - a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. We will be using it extensively in this class.

Create a multi-line template string and display it on the page:

```js
const content = `
<div>
  <h2>
    ${me.first} ${me.last}
  </h2>
    <span>${me.job}</span>
    <p>Twitter: ${twitter}</p>
    <p>Facebook: ${facebook}</p>
</div>
`;
document.body.innerHTML = content;
```

and an Array:

```js
const test = ["one", "two", "three", "four"];
const [foo, bar, ...rest] = test;
```

---

<!-- end aside  -->

### Array Methods

We'll generate our nav using Array methods `map`, `filter` and arrow functions.

#### [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Note the inventors sample data in `navitems.js`:

```js
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];
```

Filter the list of inventors for those who were born in the 1500's.

In the console:

```js
const fifteen = inventors.filter(filterInventors);

function filterInventors(inventor) {
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return true; // keep it
  }
}

console.table(fifteen);
```

Or:

```js
const fifteen = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return true; // keep it
  }
});

console.table(fifteen);
```

#### Arrow Functions

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) are commonly used as a shorter syntax for anonymous functions although they have additional functionality

Refactor using an arrow function with implicit return:

```js
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(fifteen);
```

Note the lack of a `return` statement. While they can be used within arrow functions, they are often unnecessary as the `return` is implicit.

#### [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

The map method transforms a collection by applying a function to all of its elements and building a new collection from the returned values.

Provide an array of the inventors first and last names:

```js
var fullNames = inventors.map(function (inventor) {
  return `${inventor.first} ${inventor.last}`;
});

console.log("Full names: " + fullNames);
```

Notice the commas separating the names.

Refactor it to use an arrow function and join the results with a slash:

```js
const fullNames = inventors
  .map((inventor) => `${inventor.first} ${inventor.last}`)
  .join(" / ");

console.log("Full names: ", fullNames);
```

## EXERCISE III - Using Array.prototype.map()

Let's try creating the list items using `map()` and template strings:

```js
const nav = document.querySelector(".main-menu");

const markup = `
    <ul>
      ${navItemsObject.map(function (item) {
        return `<li><a href="${item.link}">${item.label}</a></li>`;
      })}
    </ul>
    `;

console.log(markup);

nav.innerHTML = markup;
```

Join the array to avoid the comma:

```js
const markup = `
    <ul>
      ${navItemsObject
        .map(function (item) {
          return `<li><a href="${item.link}">${item.label}</a></li>`;
        })
        .join("")}
    </ul>
    `;
```

Finally, refactor using an arrow function:

```js
const markup = `
<ul>
  ${navItemsObject
    .map((item) => `<li><a href="${item.link}">${item.label}</a></li>`)
    .join("")}
</ul>
`;
```

Note the use of nested template strings here.

These methods, `.map`, `.filter` (and others we have yet to look at such as `.reduce`) are _the prefered_ means of working with data. They are **declarative** as opposed to **imperative** and are important methods in the functional programmer's toolkit.

The close button which is an integral part of the responsive navigation has been lost due to the use of `nav.innerHTML = markup;`. There are a number of simple ways to resolve this. For today we'll just cut the code from `index.html` and paste the code into our JavaScript:

```js
const markup = `
<ul>
  <a
  href="#main-menu-toggle"
  id="main-menu-close"
  class="menu-close"
  aria-label="Close main menu"
  >
  <span class="sr-only">Close main menu</span>
  <span class="fa fa-close" aria-hidden="true"></span>
  </a>
  ${navItemsObject
    .map((item) => `<li><a href="${item.link}">${item.label}</a></li>`)
    .join("")}
</ul>
`;
```

## EXERCISE - Sticky Menu

Problem: the menu scrolls off the screen and we want to to be available at all times.

Solution: we will anchor the menu to the top of the screen once the user has scrolled to the point where the menu would normally be out of sight using the css position property.

Edit the CSS in `nav.css` (inside the media query).

```css
.main-menu {
  display: block;
  position: static;
  background: #007eb6;
  width: 100%;
  position: sticky;
  top: 0px;
}
```

Note: this would be considered a progressive enhancement as it does not work in all the browsers. Support might be extended by following the instructions on [Can I Use](https://caniuse.com/#feat=css-sticky).

## EXERCISE - Adding an SVG Image

Select the first list item on the nav, add a class and set the innerHTML so that we get a link which will return us to the top of the page:

```js
// logo
const logo = nav.querySelector(".main-menu ul li");
logo.classList.add("logo");
logo.innerHTML = '<a href="#"><img src="img/logo.svg" /></a>';
```

Examine the SVG file

An interesting application of SVG:

- [Responsive logos](http://responsivelogos.co.uk)

Format the logo for both mobile and wide screen:

```css
li.logo img {
  padding-top: 0.25rem;
  width: 2.5rem;
}
```

Note the use of max-width above. We are using this because transitions do not animate width.

## EXERCISE - AJAX and APIs

_AJAX stands for Asynchronous JavaScript And XML. In a nutshell, it is the use of the XMLHttpRequest object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files. AJAX’s most appealing characteristic is its “asynchronous” nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page._ - [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

An API (Application Programming Interface) is a set of definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.

See the documentation for one of our sample APIs:

- [JSON Placeholder](https://jsonplaceholder.typicode.com/posts), [documentation](https://jsonplaceholder.typicode.com/)
- [New York Times API](https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0), [documentation](https://developer.nytimes.com/)
- [Pokemon API](https://pokeapi.co/api/v2/ability/?limit=5&offset=0), [documentation](https://pokeapi.co)
- and our navItemsObject:

## EXERCISE - Adding Content

We will use the [NY Times developer](https://developer.nytimes.com) API for getting a data using my API key.

The specific API endpoint for this is their [top stories endpoint](https://developer.nytimes.com/docs/top-stories-product/1/overview). It lets us request the top stories from a specific section of their publication.

Start by removing the existing HTML content from the site-wrap div in `index.html` so you are left with an empty div:

```html
<div class="site-wrap"></div>
```

Store the API key, a template string with the complete URL, and the element we want to manipulate (`.site-wrap`) in a variable:

```js
const root = document.querySelector(".site-wrap");
const nytapi = "uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0";
const nytUrl = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${nytapi}`;
```

### The fetch() API

Web browsers offer a number of [built-in tools](https://developer.mozilla.org/en-US/docs/Web/API).

We'll use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get data from the New York Times.

`fetch()` returns a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises).

```js
fetch(nytUrl).then(function (response) {
  console.log("Response ::: ", response);
});
```

The response needs to be converted to JSON with `response.json()`.

We can then use the data in our app:

```js
fetch(nytUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  });
```

Most developers will use arrow functions:

```js
fetch(nytUrl)
  .then((response) => response.json())
  .then((myJson) => console.log(myJson));
```

Try `console.log(myJson.reults)`

Instead of logging it we will pass it to a `renderStories` function:

```js
fetch(nytUrl)
  .then((response) => response.json())
  .then((myJson) => renderStories(myJson));
```

In `renderStories` we take the passed data (our JSON) and run a `forEach` on every item that creates a `div` with the desired content:

```js
function renderStories(data) {
  console.log(data);
}
```

Examine the data and you'll see that the information we are interested in is located in `results`.

We will use a forEach loop to log each of the results:

```js
function renderStories(data) {
  data.results.forEach(function (story) {
    console.log(story);
  });
}
```

Let's use the techniques we covered earlier to create a DOM element for each of the stories:

```js
function renderStories(data) {
  data.results.forEach(function (story) {
    var storyEl = document.createElement("div");
    storyEl.className = "entry";
    storyEl.innerHTML = `
    <h3>${story.title}</h3>
    `;
    console.log(storyEl);
    root.prepend(storyEl);
  });
}
```

Expand it to include images and abstracts:

```js
function renderStories(data) {
  data.results.forEach((story) => {
    var storyEl = document.createElement("div");
    storyEl.className = "entry";
    storyEl.innerHTML = `
    <img src="${story.multimedia[0].url}" alt="${story.title}" />
      <div>
        <h3><a target="_blank" href="${story.short_url}">${story.title}</a></h3>
        <p>${story.abstract}</p>
      </div>
      `;
    root.prepend(storyEl);
  });
}
```

Note: not all NYTimes stories include images and our script could error if `story.multimedia[0]` was undefined. For this we will use a [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) for the image element:

```js
<img
  src="${
      story.multimedia.length > 0 ? story.multimedia[0].url : 'img/no-image.png'
    }"
  alt="${story.title}"
/>
```

Ternaries are popular in cases like this - in fact they are essential. You cannot write an `if(){} else(){}` statement inside a string literal. Template literals only support expressions.

Add some new css to support the new elements:

```css
.entry {
  display: grid;
  grid-template-columns: 1fr 7fr;
  grid-column-gap: 1rem;
  margin-bottom: 1rem;
}

.entry a {
  color: #007eb6;
  text-decoration: none;
}
```

Try: incrementing the `[0]` in the ternary to get a better image.

Refactor using arrow functions and `.map()`:

```js
fetch(nytUrl)
  .then((response) => response.json())
  .then((myJson) => renderStories(myJson));

function renderStories(data) {
  data.results.map((story) => {
    var storyEl = document.createElement("div");
    storyEl.className = "entry";
    storyEl.innerHTML = `
    <img src="${
      story.multimedia.length > 0 ? story.multimedia[2].url : "img/no-image.png"
    }" alt="${story.title}" />
      <div>
        <h3><a target="_blank" href="${story.short_url}">${story.title}</a></h3>
        <p>${story.abstract}</p>
      </div>
      `;
    root.prepend(storyEl);
  });
}
```

## EXERCISE - News Section Headers

Let's add additional Sections to our page.

In `navItems.js`, replace `navItemsObject` with

```js
const navItemsObject = [
  {
    label: "arts",
    link: "#arts",
  },
  {
    label: "books",
    link: "#books",
  },
  {
    label: "fashion",
    link: "#fashion",
  },
  {
    label: "food",
    link: "#food",
  },
  {
    label: "movies",
    link: "#movies",
  },
  {
    label: "travel",
    link: "#travel",
  },
];
```

Examine the rendered page. Note: Arts does not appear in the nav because we are using the first li for our logo. Edit the logo related scripts:

```js
// logo
const logo = document.createElement("li");
const navList = nav.querySelector("nav ul");
logo.classList.add("logo");
logo.innerHTML = '<a href="#"><img src="img/logo.svg" /></a>';
navList.prepend(logo);
```

Add categories and limit variables to `myscripts.js`:

```js
const limit = 6;
const categories = navItemsObject.map((item) => item.label);
```

Since our categories are available in `navItemsObject`, we can make the categories variable a product of `navItemsObject`:

Create a new `getArticlesByCategory` function and call it with the categories array:

```js
function getArticlesByCategory(cat) {
  cat.forEach(function (category) {
    fetchArticles(category);
  });
}

getArticlesByCategory(categories);
```

This function's sole purpose is to call a new function `fetchArticles` with each of the items in our categories array.

Refactor our `fetch` call to a `fetchArticles` function that generates a url based on the section:

```js
function fetchArticles(section) {
  fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
  )
    .then((response) => response.json())
    .then((myJson) => renderStories(myJson));
}
```

Examine the results in the browser.

We need to add headers.

Refactor the `renderStories()` function.

Begin by adding the title to a new div:

```js
function renderStories(data) {
  var sectionHead = document.createElement("div");
  sectionHead.id = data.section.toLowerCase();
  sectionHead.innerHTML = `<h3 class="section-head">${data.section}</h3>`;
  root.prepend(sectionHead);
}
```

Prior to our `forEach` we will limit the number of stories with `stories = data.results.slice(0, limit);` and then append the sories to the sectionHead with `sectionHead.append(storyEl);`:

```js
function renderStories(data) {
  var sectionHead = document.createElement("div");
  sectionHead.id = data.section.toLowerCase();
  sectionHead.innerHTML = `<h3  class="section-head">${data.section}</h3>`;
  root.prepend(sectionHead);

  stories = data.results.slice(0, limit); // NEW

  stories.map((story) => {
    storyEl = document.createElement("div");
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
    sectionHead.append(storyEl); // NEW
  });
}
```

Note that we are adding an id (`sectionHead.id = data.section;`) to the section heads **and** setting it to lower case so that our page fragment navigation will work.

Log the stories variable to the console:

```js
stories = data.results.slice(0, limit);
console.log(" stories ", stories);
```

Note that our fetch runs 6 times and only returns the first 6 stories in each category.

---

### Array.slice(), Array.filter

Note the use of the Array method [`slice()`](<(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)>) and our limit variable to constrain the number of articles displayed.

The `slice()` method returns a _shallow_ copy of a portion of an array into a new array.

<!--

Demo: Following up on our discussion of filtering arrays, here is a script that could be employed to return subsections within a section:

```js
// stories = data.results.slice(0, limit);
const stories = data.results.filter(
  (story) => story.subsection === "Book Review"
);
``` -->

---

Style the new category headers:

```css
.section-head {
  font-family: Lobster;
  font-weight: normal;
  color: #007eb6;
  font-size: 2.5rem;
  text-transform: capitalize;
  padding-bottom: 0.25rem;
  padding-top: 4rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #007eb6;
}
```

<!-- ## Final Script

```js
// variables
var root = document.querySelector(".site-wrap");
const nytapi = "uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0";
const limit = 6;
const categories = navItemsObject.map((item) => item.label);
const nav = document.querySelector(".main-menu");

// navigation
function renderNav() {
  const markup = `
    <a
      href="#main-menu-toggle"
      id="main-menu-close"
      class="menu-close"
      aria-label="Close main menu"
    >
      <span class="sr-only">Close main menu</span>
      <span class="fa fa-close" aria-hidden="true"></span>
    </a>

  <ul>
    ${navItemsObject
      .map((item) => `<li><a href="${item.link}">${item.label}</a></li>`)
      .join("")}
  </ul>
  `;
  nav.innerHTML = markup;

  const logo = document.createElement("li");
  const navList = nav.querySelector("nav ul");
  logo.classList.add("logo");
  logo.innerHTML = '<a href="#"><img src="img/logo.svg" /></a>';
  navList.prepend(logo);
}

// articles
function getArticlesByCategory(cat) {
  cat.forEach(function (category, index) {
    fetchArticles(category, index);
  });
}

function fetchArticles(section) {
  fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
  )
    .then((response) => response.json())
    .then((myJson) => renderStories(myJson));
}

function renderStories(data) {
  var sectionHead = document.createElement("div");
  sectionHead.id = data.section;
  sectionHead.innerHTML = `<h3 class="section-head">${data.section}</h3>`;
  root.prepend(sectionHead);

  stories = data.results.slice(0, limit);

  stories.forEach((story) => {
    storyEl = document.createElement("div");
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

getArticlesByCategory(categories);
renderNav();
``` -->

## Smooth Scrolling

We need to add an ID to the section head divs as well as a classname to support a CSS change.

```js
sectionHead.classList.add("scroll-margin");
```

Here:

```js
function renderStories(data) {
  var sectionHead = document.createElement("div");
  sectionHead.id = data.section.toLowerCase();
  // here
  sectionHead.classList.add("scroll-margin");
  sectionHead.innerHTML = `<h3 class="section-head">${data.section}</h3>`;
```

```css
@media (min-width: 800px) {
  .scroll-margin {
    scroll-margin-top: 4rem;
  }
}
```

Add scroll-behavior:

```css
html {
  box-sizing: border-box;
  background: #eee;
  scroll-behavior: smooth;
}
```

## Instructor Notes - students ignore eveything after this point

### Immediately Invoked Function Expression

Move everything [out of](https://vanillajstoolkit.com/boilerplates/iife/) the global scope

```js
(function () {
  "use strict";

  // Code goes here...
})();
```

'use strict': with strict mode you cannot use undeclared variables.

e.g.:

```js
const stories = data.results.slice(0, limit);

stories.forEach(story => {
const storyEl = document.createElement('div');
storyEl.className = 'entry';
storyEl.innerHTML = `
```

### Local Storage

Implement [local storage](https://gomakethings.com/saving-html-to-localstorage-with-vanilla-js/)

```js
function renderStories(data) {
  ...
 localStorage.setItem('articles', root.innerHTML);
 ...
}
```

At the bottom of scripts:

```js
let saved = localStorage.getItem("articles");
if (saved) {
  root.innerHTML = saved;
} else {
  getArticlesByCategory(categories);
}
```

In Chrome's inspector select Application and browser to Storage > Local Storage.

Time permitting:

```js
localStorage.setItem(
  "stories",
  JSON.stringify({
    timestamp: new Date().getTime(),
    data: stories,
  })
);
```

Warning: not production code!

```js
let saved = localStorage.getItem("stories");
let savedJson = JSON.parse(saved);
console.log(savedJson);
console.log(savedJson.timestamp);
if (saved) {
  var difference = new Date().getTime() - savedJson.timestamp;
  console.log("difference ", difference);
  if (difference > 1000 * 5) {
    getArticlesByCategory(categories);
    console.log("true");
  } else {
    getArticlesByCategory(categories);
    console.log("false");
  }
}

// getArticlesByCategory(categories);
```
