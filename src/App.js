import { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDatalayerValue } from "./Datalayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDatalayerValue();

  //useEffect runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("person", user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });

    spotify.getPlaylist("37i9dQZEVXcJkNNcdQmG9e").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );
  }, []);

  console.log("alien", token);
  return (
    //BEN
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* spotify logo */}
      {/* Login with spotify btn */}
    </div>
  );
}

export default App;
