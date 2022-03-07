async function myFetch(){ 

      const cors_host = "https://noroffcors.herokuapp.com/";
      const api_key = `f6dd075d81db416fbb289fc9d3726038`;
      const api_host =  cors_host + `https://api.rawg.io/api/games?key=${api_key}&page_size=40`;

fetch(api_host)
.then(response => {
  const call_response = response.json()
  const data = call_response;
  return data;
}).then(data => {
  const results = data.results;
  console.log(results)
  return results;
})
.catch(err => {
console.error(err);
});
}

myFetch();

import { api } from "./api/api.js";

let data = await api();
console.log(data);

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

  if (window.location.href.indexOf("/index.html")) {
    const container = document.createElement("div");
    container.classList.add("container");
    mainDiv.append(container);

    const section_1 = document.createElement("section");
    section_1.classList.add("game-section");
    container.append(section_1);
    section_1.id ="Shooter Games"
    section_1.innerHTML = displayShooter();

    const banner_1 = document.createElement("section");
    banner_1.classList.add("banner");
    container.append(banner_1);
    banner_1.id ="banner-1"
    banner_1.innerHTML = displayBanner();

    const section_2 = document.createElement("section");
    section_2.classList.add("game-section");
    container.append(section_2);
    section_2.id ="Action Games"
    section_2.innerHTML = displayAction();

    const banner_2 = document.createElement("section");
    banner_2.classList.add("banner");
    banner_2.id ="banner-2"
    container.append(banner_2);
    banner_2.innerHTML = displayBanner();

    const section_3 = document.createElement("section");
    section_3.classList.add("game-section");
    container.append(section_3);
    section_2.id ="Simulator Games"
    section_3.innerHTML = displaySimulator();
  }
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

function displayShooter() {
  const gameCard = document.createElement("div");
  gameCard.classList.add("game-card");
  for(let i = 0; i < data.length; i++){
  
    const title = data[i].title;

    const card = gameCard.innerHTML += `<div class="card"><h2>${title}</h2></div>`;
    return card;
  
  }
}

function displayAction() {}

function displaySimulator() {}

function displayBanner() {}


