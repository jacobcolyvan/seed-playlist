# Seed Playlists (Spotify)
<b>Deployed link:</b> https://seed-playlists.netlify.app/

<i>Generate your own daily mixes.</i>

This is a site that lets you call on Spotify's API to generate playlists based on a set of parameters you give it, such as:  genre, artist, tracks, or values such as instrumentalness, valence, or tempo. <br>
Pretty much a huge form, that lets you create and save playlists to your Spotify account. <br>

It is built with React, and styled using Material-UI. Requests are done using axios, and Spotify-auth is done completely client-side using the <a href='https://developer.spotify.com/documentation/general/guides/authorization-guide/'>Client Credentials Authorisation Flow</a>. <br>

<hr>

### Setup
If you want to set up your own copy of this site, run ```npm i``` after cloning, and create a ```.env``` file in the root directory (or set it in your local environment) with your Spotify ClientID and a callback URI, with the names:
- ```REACT_APP_SPOTIFY_CLIENT_ID2```, and
- ```REACT_APP_SPOTIFY_CALLBACK_URI```.

Your Spotify ClientID can be found by <a href='https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app'>registering your app</a>.

<hr>


If interested, other Spotify-based sites that I've written are:
* <ins>Spotify Metadata</ins> – <a href=https://github.com/jacobcolyvan/spotify-metadata target="_blank"> Github</a>, <a href=https://spotify-metadata.netlify.app/ target="_blank">deployed</a>.
* <ins>Mix Master</ins> – <a href="https://github.com/jacobcolyvan/mix-master" target="_blank"> Github</a>, <a href="https://mix-master.netlify.app/" target="_blank">deployed</a>.

<hr>

Otherwise, <br>
<i>Happy Coding, Stay Safe</i> \
and <i>Enjoy the Music</i>.
