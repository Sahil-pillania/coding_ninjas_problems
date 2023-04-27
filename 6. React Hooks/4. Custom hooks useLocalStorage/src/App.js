import "./styles.css";
import { useRef } from "react";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  const [name, setName] = useLocalStorage("name", "");
  const [age, setAge] = useLocalStorage("age", 1);

  const nameInput = useRef();
  const ageInput = useRef();

  const handleClear = () => {
    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    const age = ageInput.current.value;

    setName(name);
    setAge(age);

    handleClear();
  };

  return (
    <div className="App">
      <div id="name">Name - {name}</div>
      <div id="age">Age - {age}</div>
      <form onSubmit={handleChange}>
        <input placeholder="Name" ref={nameInput} />
        <input placeholder="Age" type="number" min="1" ref={ageInput} />
        <button className="btn">Change</button>
      </form>
    </div>
  );
}
