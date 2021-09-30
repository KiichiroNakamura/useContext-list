import { FirstList } from "./components/FirstList";
import {
  ListProvider,
  VideoLocalUrlProvider
} from "./providers/GlobalProvider";
import { Dropzone } from "./components/Dropzone";
import { MoviePlayer } from "./components/MoviePlayer";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
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
