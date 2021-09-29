import { First } from "./components/First";
import { FirstList } from "./components/FirstList";
import { Second } from "./components/Second";
import { Third } from "./components/Third";
import { TextProvider } from "./providers/TextProvider";
import { ListProvider, VideoLocalUrlProvider } from "./providers/ListProvider";
import "./styles.css";
import { Dropzone } from "./components/Dropzone";
import { MoviePlayer2 } from "./components/MoviePlayer2";
import { MoviePlayer3 } from "./components/MoviePlayer3";

export default function App() {
  return (
    <div className="App">
      {/*    <TextProvider> */}
      {/*      <First /> */}
      {/*      <Second /> */}
      {/*      <Third /> */}
      {/*    </TextProvider> */}
      <ListProvider>
        <VideoLocalUrlProvider>
          <Dropzone />
          <FirstList />
          <MoviePlayer3 />
        </VideoLocalUrlProvider>
      </ListProvider>
    </div>
  );
}
