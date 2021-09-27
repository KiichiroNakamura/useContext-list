import { First } from "./components/First";
import { FirstList } from "./components/FirstList";
import { Second } from "./components/Second";
import { Third } from "./components/Third";
import { TextProvider } from "./providers/TextProvider";
import { ListProvider } from "./providers/ListProvider";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/*    <TextProvider> */}
      {/*      <First /> */}
      {/*      <Second /> */}
      {/*      <Third /> */}
      {/*    </TextProvider> */}
      {/* <ListProvider> */}
      <FirstList />
      {/* </ListProvider> */}
    </div>
  );
}
