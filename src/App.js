import "./App.css";
import CardComponent from "./components/CardComponent/CardComponent";
import piano1 from "./assets/images/piano1.jpg";
import piano2 from "./assets/images/piano2.jpg";
import piano3 from "./assets/images/piano3.jpg";
import piano4 from "./assets/images/piano4.jpg";
import piano5 from "./assets/images/piano5.jpg";

function App() {
  const cards = [
    { src: piano1 },
    { src: piano2 },
    { src: piano3 },
    { src: piano4 },
    { src: piano5 },
  ];

  return (
    <div className="App">
      <CardComponent cards={cards} />
    </div>
  );
}

export default App;
