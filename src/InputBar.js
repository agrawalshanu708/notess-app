import { useState } from "react";

export function InputBar({ card, setCard }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  console.log(card);
  return (
    <>
      <form className="input-container">
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          value={name}
        />
        <input
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Your Conatct Number"
          value={number}
        />
        <textarea
          placeholder="write your address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <button
          className="Submit-btn"
          onClick={(e) => {
            setCard((card) => [...card, { name, number, address }]);
            e.preventDefault();
            setName("");
            setNumber("");
            setAddress("");
          }}
        >
          ADD
        </button>
      </form>
    </>
  );
}
