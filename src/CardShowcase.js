export function CardShowcase({ card, setCard }) {
  function removeHandler(index) {
    setCard((card) => card.filter((item, ind) => index !== ind));
  }
  console.log(card);

  return (
    <>
      <div className="card-container">
        {card.map(({ name, number, address }, index) => (
          <div key={index} className="box">
            <p>Name: {name}</p>
            <p>Number: {number}</p>
            <p>Address: {address}</p>
            <button onClick={() => removeHandler(index)}>Remove</button>
            {/* <button onClick={() => editHandler(index)}>EDIT</button> */}
          </div>
        ))}
      </div>
    </>
  );
}
