import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar, Publicidad } from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Publicidad />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Publicidad />
      <h1>Vite + React + DIGITAR</h1>
    </>
  );
}

export default App;
