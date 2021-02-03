import "./App.css";
import Calendar from "./components/calendar";
import Background from "./components/background";

function App() {
  return (
    <div>
      <Background />
      <div className="App">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
