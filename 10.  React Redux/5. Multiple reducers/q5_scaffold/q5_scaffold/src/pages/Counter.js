import { Count } from "../components/Count";
import { CounterActions } from "../components/CounterActions";

export const Counter = () => {
  return (
    <div className="page">
      <h1>Simple Counter</h1>
      <Count />
      <CounterActions />
    </div>
  );
};
