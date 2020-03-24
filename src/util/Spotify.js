const cliendId = "7886e54bd9cc4385a7b364d3fe91c805";
const redirectURI = "http://localhost:3000/";
let token;
const authEndpoint = 'https://accounts.spotify.com/authorize';

const Spotify = {
    getAccessToken() {
        if (token) {
            return token;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            token = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1])
            window.setTimeout(() => token = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return token;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }

    }

}

export default Spotify;