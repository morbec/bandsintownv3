const axios = require('axios');

// Handle calls to the Bandsintown API

/**
 * @class APIHandler - Handles the Bandsintown API calls
 */
class APIHandler {
  /**
   * @constructor - Creates an APIHandler object
   * @param {String} baseURL - The base ULR for Bandsintown API
   * @param {String} app_id - The app_id given to you by Bandsintwon
   */
  constructor(baseURL, app_id) {
    this.BASE_URL = baseURL;
    this.app_id = app_id;
  }

  /**
   * @function
   * @param {String} artistName - The name of the artist
   * @returns Promise
   */
  getArtistInfo(artistName) {
    const artist = replaceCharacters(artistName);
    return axios
      .get(`${this.BASE_URL}/artists/${artist}?app_id=${this.app_id}`)
      .then(response => {
        return response.data;
      })
      .catch(err => console.error('ERROR: ', err));
  }

  /**
   * @function Get the upcoming events of an artists. Date range is optional.
   *    Please note that the range date needs both parameters.
   * @param {String} artistName - The name of the artist
   * @param {String} from - Starting date (format: yyyy-mm-dd)
   * @param {String} to - End date (format: yyyy-mm-dd)
   * @returns Promise
   */
  getArtistEvents(artistName, from = null, to = null) {
    const artist = replaceCharacters(artistName);
    let queryURL = `${this.BASE_URL}/artists/${artist}/events?app_id=${this.app_id}`;

    if (from && to) queryURL += `&date=${from}%2C${to}`;

    return axios
      .get(queryURL)
      .then(response => {
        return response.data;
      })
      .catch(err => console.error('ERROR: ', err));
  }
}

/**
 * Replace the characters ' ', /, ? , * and " by its ASCII code
 * @param {String} str Artist name
 * @returns A new String
 */
const replaceCharacters = str => {
  const characters = [
    {
      symbol: ' ',
      regex: /\s/g,
      code: `%20`
    },
    {
      symbol: '/',
      regex: /\//g,
      code: `%252F`
    },
    {
      symbol: '?',
      regex: /\?/g,
      code: '%253F'
    },
    {
      symbol: '*',
      regex: /\*/g,
      code: '%252A'
    },
    {
      symbol: '"',
      regex: `"`,
      code: '%27C'
    }
  ];

  // Preserve the input string
  let artist = str;

  characters.forEach(char => {
    if (artist.includes(char.symbol)) artist = artist.replace(char.regex, char.code);
  });

  return artist;
};

module.exports = APIHandler;
