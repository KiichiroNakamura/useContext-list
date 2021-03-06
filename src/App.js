import { FirstList } from "./components/FirstList";
import {
  ListProvider,
  VideoLocalUrlProvider
} from "./providers/GlobalProvider";
import { Dropzone } from "./components/Dropzone";
import { MoviePlayer } from "./components/MoviePlayer";
import { Header } from "./components/Header";
import { CloudVideoUrl } from "./components/CloudVideoUrl";

import "./styles.css";
// import { CloudVideoUrl } from "./components/CloudVideoUrl";

export default function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <ListProvider>
        <VideoLocalUrlProvider>
          <div className="MainArea">
            <div className="SideArea">
              <Dropzone />
              <CloudVideoUrl />
              <FirstList />
            </div>
            <div className="PlayArea">
              <MoviePlayer />
            </div>
          </div>
        </VideoLocalUrlProvider>
      </ListProvider>
    </div>
  );
}
