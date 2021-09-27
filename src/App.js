import { First } from "./components/First";
import { FirstList } from "./components/FirstList";
import { Second } from "./components/Second";
import { Third } from "./components/Third";
import { TextProvider } from "./providers/TextProvider";
import { ListProvider } from "./providers/ListProvider";
import "./styles.css";
import { Dropzone } from "./components/Dropzone";
import { MoviePlayer2 } from "./components/MoviePlayer2";

export default function App() {
  return (
    <div className="App">
      {/*    <TextProvider> */}
      {/*      <First /> */}
      {/*      <Second /> */}
      {/*      <Third /> */}
      {/*    </TextProvider> */}
      <ListProvider>
        <Dropzone />
        <FirstList />
        <MoviePlayer2 />
      </ListProvider>
    </div>
  );
}
