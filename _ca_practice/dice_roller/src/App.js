import { Page } from "components/Page";
import "./App.css";
import DiceRoll from "./components/DiceRollMain";

function App() {
  return (
    <div className="container">
      <Page />
      <hr style={{ marginBottom: "3em", marginTop: "3em" }} />
      <DiceRoll />
    </div>
  );
}

export default App;
