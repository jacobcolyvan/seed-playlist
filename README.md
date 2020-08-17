# Seed Playlists (Spotify)
<b>Deployed link:</b> https://seed-playlists.netlify.app/ 

This is a site that lets you call on Spotify's API to generate playlists based on a set of parameters you give it, such as:  genre, artist, tracks, or key values such as instrumentalness, valence, or tempo. <br>
Pretty much a huge form, that lets you create and save playlists onto your Spotify account (note that it requires Spotify to use).<br>

It is built with React, and styled using Material-UI. Requests are done using axios, and Spotify-authorisation is done completely client-side using the <a href='https://developer.spotify.com/documentation/general/guides/authorization-guide/'>Client Credentials Authorisation Flow</a>. <br>

<hr>

### Setup
Run ```npm i``` after cloning, and create a .env file in the root directory (or set it in your local environment) with your Spotify ClientID and and a callback URI, with the names: 
- REACT_APP_SPOTIFY_CLIENT_ID2, and
- REACT_APP_SPOTIFY_CALLBACK_URI

Your Spotify ClientID can be found by <a href='https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app'>registering your app</a>.

<br><hr>
And with that, <i>happy digging folks</i>.
