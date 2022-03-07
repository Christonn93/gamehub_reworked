// Importing the error message fot the catch
import { displayMessage } from "../components/messages.js";

// Creating a function to call the APi
async function api(){
    // API and cors URL
    let cors_host = "https://noroffcors.herokuapp.com/";
    let api_host = `https://www.mmobomb.com/api1/games`;

    // Combining cors and api URL
    const conn_api = cors_host + api_host;
    
    try {
        // Making the call to the API
        const request = await fetch(conn_api);
        const response = await request.json();
        const games = response;

        // console logging the API call
        // console.log(games)

        return games;

    } catch (error) {
        console.log(error);
        displayMessage('error');
    }
};

export { api };




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