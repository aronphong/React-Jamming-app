const clientID = "7886e54bd9cc4385a7b364d3fe91c805";
const redirectURI = "http://localhost:3000/";
let token;

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
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessUrl;
        };
    },

    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        });
    },

    savePlaylist(name, arrTrackURI) {
        if (!name || arrTrackURI.length === 0) {
            return
        }

        const accessToken = Spotify.getAccessToken();
        const headers =  { Authorization: `Bearer ${accessToken}` }
        let userID = "";

        return fetch("https://api.spotify.com/v1/me", {
            headers: headers
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            userID = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: name})
            }).then(response => response.json()
            ).then(jsonResponse => {
                const playListID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/playlists/${playListID}/tracks`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({uris: arrTrackURI})
                })
            })
        });
    },
}

export default Spotify;