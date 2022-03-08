export function headerLayout(){
    const headerElement = document.querySelector("header");
    const div = document.createElement("div");
    headerElement.append(div);

    div.innerHTML += `<div class="company__logo">
                                <label>Company name</label>
                            </div>`
}

export function navigationLayout(){
    const headerElement = document.querySelector("header");
    const navigation = document.createElement("div");
    headerElement.append(navigation);

    navigation.innerHTML += `<nav class="navigation" role="navigation">
                                <a href="/root/index.html" class="nav__link">Home</a>
                                <a href="/root/public/pages/about.html" class="nav__link">About</a>
                                <a href="/root/public/pages/contact.html" class="nav__link">Contact</a>
                            </nav>`


}

export function mainLayout(page){

    const image = "https://via.placeholder.com/500x500?text=Image+not+found";

    const mainElement = document.querySelector("main");
    const innerDiv = document.createElement("div");
    mainElement.append(innerDiv);

    innerDiv.innerHTML += `<div class="container">
                                <h2>Buttons</h2>
                                <div class="display__container">
                                <button class="btn btn__primary">Primary</button>
                                <button class="btn btn__warning">Warning</button>
                                <button class="btn btn__info">Info</button>
                                </div>
                            </div>
                        
                        <div class="container">
                          <h2>Cards</h2>
                          <div class="display__container">
                            <div class="card__standard">
                              <div class="card__header">
                                <h3>Card header</h3>
                              </div>
                              <div class="ratio-box">
                                <img src="${image}" class="image" />
                              </div>
                              <div class="card__textarea">
                                <p>Card information</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="container">
                        <h2>List</h2>
                        <div class="display__container">
                          <div class="list unordered__list">
                            <h4>List header - Unordered list</h4>
                            <ul>
                              <li>Item 1</li>
                              <li>Item 2</li>
                              <li>Item 3</li>
                              <li>Item 4</li>
                            </ul>
                          </div>
              
                          <div class="list ordered__list">
                            <h4>List header - Ordered list</h4>
                            <ol>
                              <li>Item 1</li>
                              <li>Item 2</li>
                              <li>Item 3</li>
                              <li>Item 4</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                        
                      <div class="container">
                      <h2>Article</h2>
                      <div class="display__container">
                      <article>
                      <p>This is an article</p>
                      </article> 
                  </div>
                </div>`
}

export function formLayout(){
    
}

export function sidebar(){
    
}

export function footerLayout(){
    const footerElement = document.querySelector("footer");
    const footerDiv = document.createElement("div");
    footerElement.append(footerDiv);

    footerDiv.innerHTML += `<div class="footer__layout">
                                <label>Copyright Christopher Tønnesland 2022</label>
                            </div>`
}

export function create(el, classNames, child, parent, ...dataAttr) {
  let elem = null;
  try {
    elem = document.createElement(el);
  } catch (e) {
    throw new Error('Unable to create HTMLElemnt! Wrong data');
  }

  if (classNames) elem.classList.add(...classNames.split(' '));

  if (child && Array.isArray(child)) {
    child.forEach((childElem) => childElem && elem.appendChild(childElem));
  } else if (child && typeof child === 'object') {
    elem.appendChild(child);
  } else if (child && typeof child === 'string') {
    elem.innerHTML = child;
  }

  if (parent) {
    parent.appendChild(elem);
  }

  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        elem.setAttribute(attrName, '');
      }
      if (
        attrName.match(
          /value|id|placeholder|rows|autocorrect|spellcheck|src|alt|type|draggable|href/
        )
      ) {
        elem.setAttribute(attrName, attrValue);
      } else {
        elem.dataset[attrName] = attrValue;
      }
    });
  }
  return elem;
}


// header start
const header = create('header');
const headerWrapper = create('div', 'header__wrapper', null, header);
const informContainer = create('div', 'inform-container', null, headerWrapper);
const timer = create('time', 'timer', null, informContainer);
const counter = create('div', 'counter', null, informContainer);
let pause = create('button', '', null, informContainer);
// header end
// main start
const main = create('main');
const gameBoard = create('div', 'game-board', null, main);
let numbers;
// main end

// footer start
const footer = create('footer');
const footerWrapper = create('div', 'footer__wrapper', null, footer);
let menu = create('button', 'footer__button', null, footerWrapper);
let solveButton = create('button', 'footer__button', null, footerWrapper);
const checkboxdivContainer = create('div', 'checkbox__container', null, footerWrapper);
const checkboxdiv = create('div', 'checkbox', null, checkboxdivContainer);









function createElement(header, main, section, div, divHeader, para, link, footer){
  const classes = {
    header: "page-header",
    nav: {
      main: "nav",
      link: "nav-link",
    },
    main: "main",
    section: "section",
    gContainer: "grid-container",
    fContainer: "flex-container",
    footer: "page-footer",
    button: "btn"
  }

  const elementId = {
    
  }



}