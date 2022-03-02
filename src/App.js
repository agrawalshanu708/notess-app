import { CardShowcase } from "./CardShowcase";
import { InputBar } from "./InputBar";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [card, setCard] = useState([]);
  return (
    <div className="App">
      <InputBar card={card} setCard={setCard} />
      <CardShowcase card={card} setCard={setCard} />
    </div>
  );
}
