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
    /*
      NOTE: If the artist's name contains one of the special characters below, 
      please be sure to replace it by the corresponding code: 
      for / use %252F
      for ? use %253F
      for * use %252A
      and for " use %27C
    */
    return axios
      .get(`${this.BASE_URL}/artists/${artistName}?app_id=${this.app_id}`)
      .then(response => {
        return response.data;
      })
      .catch(err => console.error('ERROR: ', err));
  }

  /**
   * @function
   * @param {String} artistName - The name of the artist
   * @returns Promise
   */
  getArtistEvents(artistName) {
    return axios
      .get(`${this.BASE_URL}/artists/${artistName}/events?app_id=${this.app_id}`)
      .then(response => {
        return response.data;
      })
      .catch(err => console.error('ERROR: ', err));
  }
}

module.exports = APIHandler;
