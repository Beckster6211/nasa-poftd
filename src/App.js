import "./App.css";
import Calendar from "./components/calendar";
import Images from "./components/images";

function App() {
  return (
    <div>
      <Images />
      <div className="App">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
