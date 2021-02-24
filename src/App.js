import "./App.css";
import Calendar from "./components/calendar";
import Images from "./components/images";
//import Video from "./components/video";

function App() {
  return (
    <div>
      <Images />
      <div className="App">
        <Calendar />
      </div>
      <h4 className="App">July 20th 1969</h4>
      <h5 className="App">Apollo 11: </h5>
      <div className="App">
        <a
          className="App"
          href="https://www.youtube.com/watch?v=4cOhZy7dhTo"
          target="_blank"
        >
          Launch
        </a>
        &nbsp; &nbsp; &nbsp;
        <a
          className="App"
          href="https://www.youtube.com/watch?v=RONIax0_1ec"
          target="_blank"
        >
          Landing on moon
        </a>
        &nbsp; &nbsp; &nbsp;
        <a
          className="App"
          href="https://www.youtube.com/watch?v=gg5Ncc9GODY"
          target="_blank"
        >
          First step on the moon
        </a>
        &nbsp; &nbsp; &nbsp;
        <a
          className="App"
          href="https://www.youtube.com/watch?v=snCNhgY6r5o"
          target="_blank"
        >
          Splash down
        </a>
      </div>
      &nbsp; &nbsp; &nbsp;
    </div>
  );
}

export default App;
