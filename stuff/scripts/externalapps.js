/* spotify "now playing" integration (unfinished)
const spotifyNowplaying = {
    name: "Spotify Now Playing",
    url: "https://api.spotify.com/v1/me/player/currently-playing"
};

// get the funny looking access token for the thingy
var spotifyAuthrequest = new XMLHttpRequest().open("POST", "https://accounts.spotify.com/api/token", true);


var spotifynowplayingrequest = new XMLHttpRequest().open("GET", spotifyNowplaying.url, true);
spotifynowplayingrequest.setRequestHeader("Authorization", "Bearer insert-access-token-here"); */