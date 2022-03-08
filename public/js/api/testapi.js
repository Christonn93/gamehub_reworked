//async function apiCall() {
//    try {
//      const cors_host = "https://noroffcors.herokuapp.com/";
//      const api_key = `f6dd075d81db416fbb289fc9d3726038`;
//      const api_host = `https://api.rawg.io/api/games?key=${api_key}`;
//
//      const api_conn = cors_host + api_host;
//      const request = await fetch(api_conn);
//      const response = await request.json();
//
//      const api_response = response;
//      const api_array = api_response.results;
//
//      console.log(api_array);
//
//      let gameInfo = "";
//      let gameInfo = api_array.map((game) => {
//          return {
//              id: game.id,
//              title: game.name,
//              image: game.background_image,
//              genre: game.genres.map((genre) => {
//                return genre.name;
//              }),
//              rating: game.esrb_rating.name,
//              platformInfo: game.platforms,
//              platform: game.platforms.map((el) =>{
//                  return el.name;
//              }),
//              tag: game.tags.map((tag) => {
//                return tag.name;
//              }),
//              release: game.released,
//              screenshots: game.short_screenshots.map((img) => {
//                return img.image;
//              }),
//            };
//      })
//
//      console.log(gameInfo);
//
//    } catch (error) {
//      console.log(error);
//    }
//  }
//
//  apiCall();

/* export async function apiFetch(genre) {
  const cors_host = "https://noroffcors.herokuapp.com/";
  const api_key = `f6dd075d81db416fbb289fc9d3726038`;
  const api_host = cors_host + `https://api.rawg.io/api/games?key=${api_key}&page_size=40` + `&genres=${genre}`;

  fetch(api_host)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((data) => {
      const results = data.results;
      results.forEach((game) => {
        const container = document.querySelector(`#${genre}`);
        container.innerHTML += `<div class="card">
                                    <div class="ratio-box">
                                    <img src="${game.background_image}" class="image" />
                                    </div>
                                    <h2>${game.name}</h2>
                                    </div>`;
      });
    })
    .catch((err) => {
      displayMessage();
      console.error(err);
    });
}
 */
