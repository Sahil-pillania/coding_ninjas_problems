import "./styles.css";
import ButtonView from "./ButtonView";

export default function App() {
  return (
    <div className="App">
      <h3>Button Variants</h3>
      <div>
        <h3>Outlined Button</h3>
        <ButtonView filled="false" data="OUTLINED" />
      </div>
      <div>
        <h3>Filled Button</h3>
        <ButtonView color="#fc0202" bg="#00ffff" filled="true" data="FILLED" />
      </div>
    </div>
  );
}
