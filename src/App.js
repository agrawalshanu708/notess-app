import { CardShowcase } from "./CardShowcase";
import { InputBar } from "./InputBar";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [card, setCard] = useState([]);
  const [bgcolor, setBgColor] = useState("");
  const [pinned, setPinned] = useState(false);

  return (
    <div className="App">
      <InputBar
        card={card}
        setCard={setCard}
        bgcolor={bgcolor}
        setBgColor={setBgColor}
        pinned={pinned}
        setPinned={setPinned}
      />
      <CardShowcase card={card} setCard={setCard} bgcolor={bgcolor} />
    </div>
  );
}
