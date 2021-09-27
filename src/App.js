import { First } from "./components/First";
import { Second } from "./components/Second";
import { Third } from "./components/Third";
import { TextProvider } from "./providers/TextProvider";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TextProvider>
        <First />
        <Second />
        <Third />
      </TextProvider>
    </div>
  );
}
