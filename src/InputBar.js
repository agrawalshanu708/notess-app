import { useState } from "react";

export function InputBar({
  card,
  setCard,
  bgcolor,
  setBgColor,
  pinned,
  setPinned
}) {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  // console.log(card);
  return (
    <>
      <form className="input-container">
        <input
          style={{ backgroundColor: bgcolor }}
          onChange={(e) => setTittle(e.target.value)}
          placeholder="Write tittle"
          value={tittle}
        />

        <textarea
          style={{ backgroundColor: bgcolor }}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <div className="button-box">
          <button
            className="Submit-btn"
            onClick={(e) => {
              setCard((card) => [
                ...card,
                { tittle, description, color: bgcolor, pin: pinned }
              ]);
              e.preventDefault();
              setTittle("");
              setDescription("");
              setPinned(false);
            }}
          >
            ADD
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setPinned((prev) => !prev);
            }}
          >
            {pinned ? "unpin" : "pin"}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setBgColor("#f5a2a2");
            }}
          >
            RED
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setBgColor("#a8c4f3");
            }}
          >
            Blue
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setBgColor("#c0f3a7");
            }}
          >
            Green
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setBgColor("#e5ba7b");
            }}
          >
            Yellow
          </button>
        </div>
      </form>
    </>
  );
}
