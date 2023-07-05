import "./styles.css";
import { Actions } from "./components/Actions";
import { Timer } from "./components/Timer";
import { Provider } from "react-redux";
//  add redux imports here
import { store } from "./store";

export default function App() {
  return (
    <div className="App">
      <h1>Simple Timer</h1>
      <Provider store={store}>
        <Timer />
        <Actions />
      </Provider>
    </div>
  );
}
