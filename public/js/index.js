import { apiFetch } from "./api/api.js";


const app = document.getElementById("app");

function createPage() {
  const header = document.createElement("header");
  app.append(header);
  addContentHeader();

  const main = document.createElement("main");
  app.append(main);
addContentMain();

  const footer = document.createElement("footer");
  app.append(footer);
  addContentFooter();
}
createPage();

function addContentHeader() {
  const getHeader = document.querySelector("header");
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  getHeader.append(headerDiv);

  headerDiv.innerHTML = ` <a href="/index.html">
    <div class="ratio-box">
      <img src="/public/assets/logo/GameHub_Logo4.png" class="image" />
    </div>
  </a>
  <nav class="navigation" role="navigation">
    <div class="nav-div-1">
      <a href="" class="nav-link"><i class="fa-solid fa-cart-shopping"></i></a>
    </div>
    <div class="nav-div-2">
      <a href="/index.html" class="nav-link"><i class="fa-solid fa-house"></i>Home</a>
      <a href="/public/pages/allGames.html" class="nav-link"><i class="fa-solid fa-gamepad"></i>Our Games</a>
      <a href="/public/pages/contact.html" class="nav-link"><i class="fa-solid fa-house-user"></i>Login / Sign up</a>
    </div>`;
}

function addContentMain() {
  const getMain = document.querySelector("main");
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("page-main");
  getMain.append(mainDiv);

    const container = document.createElement("div");
    container.classList.add("container");
    mainDiv.append(container);

    const section_1 = document.createElement("section");
    section_1.classList.add("game-section");
    container.append(section_1);
    section_1.id = "shooter";
    section_1.innerHTML = `<h2>Header</h2>` + apiFetch("shooter");

    const banner_1 = document.createElement("section");
    banner_1.classList.add("banner");
    container.append(banner_1);
    banner_1.id = "banner-1";
    banner_1.innerHTML = `<h4>banner</h4>`

    const section_2 = document.createElement("section");
    section_2.classList.add("game-section");
    container.append(section_2);
    section_2.id = "adventure";
    section_2.innerHTML = `<h2>Header</h2>` + apiFetch("adventure");

    const banner_2 = document.createElement("section");
    banner_2.classList.add("banner");
    banner_2.id = "banner-2";
    container.append(banner_2);
    banner_2.innerHTML = `<h4>banner</h4>`

    const section_3 = document.createElement("section");
    section_3.classList.add("game-section");
    container.append(section_3);
    section_3.id = "arcade";
    section_3.innerHTML = `<h2>Header</h2>` + apiFetch("arcade");
  }

function addContentFooter() {
  const getFooter = document.querySelector("footer");
  const footerDiv = document.createElement("div");
  footerDiv.classList.add("footer");
  getFooter.append(footerDiv);

  footerDiv.innerHTML = `<div class="footer-div-1">
    <div class="footer-nav">
    <a href="/index.html" class="cta"><i class="fa-solid fa-house"></i>Home</a>
    <a href="/public/pages/contact.html" class="cta"><i class="fa-solid fa-phone"></i>Contact</a>
    </div>
    <label>Copyright Christopher Tønnesland 2022</label>
    </div>`;
}