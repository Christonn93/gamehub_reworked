// Importing the error message fot the catch
import { displayMessage } from "../components/messages.js";

export async function apiFetch(genre) {
  try {
    const corsHost = "https://noroffcors.herokuapp.com/";
    const apiKey = `f6dd075d81db416fbb289fc9d3726038`;
    const apiHost = `https://api.rawg.io/api/games?key=${apiKey}&page_size=10` + `&genres=${genre}`;

    const apiConn = corsHost + apiHost;
    const request = await fetch(apiConn);
    const response = await request.json();

    const data = response.results;
    console.log(data);
    data.forEach((game) => {
      const container = document.querySelector(`#${genre}`);
      container.innerHTML += `<div class="card">
                                    <div class="ratio-box">
                                    <img src="${game.background_image}" class="image" />
                                    </div>
                                    <h2>${game.name}</h2>
                                    </div>`;
    });
    return data;
  } catch (err) {
    displayMessage();
    console.error(err);
  }
}
