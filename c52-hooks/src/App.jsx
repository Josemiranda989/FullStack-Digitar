import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { Dolars } from "./components/Dolar/Dolars";
import { Printall } from "./components/Products/Printall";

function App() {
  return (
    <>
      <h1>Hooks</h1>
      <hr />
      <Counter />
      <hr />
      <Dolars />
      <hr />
      <Printall />
    </>
  );
}

export default App;
