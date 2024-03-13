import { useState } from "react";
import Home from "./components/Home";
import GamePlay from "./components/gamePlay";

function App() {
  const [state, setState] = useState(true);

  const toggleGmae = () => {
    setState((prev) => !prev);
  };

  return <>{state ? <GamePlay /> : <Home toggle={toggleGmae} />}</>;
}

export default App;
