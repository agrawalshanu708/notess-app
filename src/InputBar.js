import { useState } from "react";

export function InputBar({ card, setCard }) {
  const [tittle, setTittle] = useState("");

  const [description, setDescription] = useState("");

  console.log(card);
  return (
    <>
      <form className="input-container">
        <input
          onChange={(e) => setTittle(e.target.value)}
          placeholder="Write tittle"
          value={tittle}
        />

        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button
          className="Submit-btn"
          onClick={(e) => {
            setCard((card) => [...card, { tittle, description }]);
            e.preventDefault();
            setTittle("");
            setDescription("");
          }}
        >
          ADD
        </button>
      </form>
    </>
  );
}
