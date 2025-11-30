//spotify "now playing" integration
const spotifyNowplaying = {
    name: "Spotify Now Playing",
    url: "https://api.spotify.com/v1/me/player/currently-playing"
};

var spotifynowplayingrequest =
new XMLHttpRequest().open("GET", spotifyNowplaying.url, true);

