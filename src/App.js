import { FirstList } from "./components/FirstList";
import {
  ListProvider,
  VideoLocalUrlProvider
} from "./providers/GlobalProvider";
import "./styles.css";
import { Dropzone } from "./components/Dropzone";
import { MoviePlayer } from "./components/MoviePlayer";

export default function App() {
  return (
    <div className="App">
      <ListProvider>
        <VideoLocalUrlProvider>
          <Dropzone />
          <FirstList />
          <MoviePlayer />
        </VideoLocalUrlProvider>
      </ListProvider>
    </div>
  );
}
