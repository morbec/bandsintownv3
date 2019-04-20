# bandsintownv3

## Description

A simple wrapper to call the Bandsintown API.

## How to use:

**Note**: You need to have an `app_id` given to you by Bandsintown.

The base URL is `https://rest.bandsintown.com`

[Bandsintown API documentation](https://app.swaggerhub.com/apis-docs/Bandsintown/PublicAPI/3.0.0)

### Sample code

```
const bandsintwon = require(bandsintownv3)
const api = bandsintown(baseurl, app_id)
```

```
api.getArtistInfo('Metallica')
.then(artist => {
  const { name, url, image_url, facebook_page_url, upcoming_event_count } = artist
})
.catch(err => {
  // Handle the error here
})
```

```
api.getArtistEvents('Metallica')
.then(events => {
  // Do something
})
.catch(err => {
  // Handle the error here
})
```
