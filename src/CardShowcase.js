export function CardShowcase({ card, setCard }) {
  function removeHandler(index) {
    setCard((card) => card.filter((item, ind) => index !== ind));
  }
  console.log(card);

  return (
    <>
      <div className="card-container">
        {card.map(({ tittle, description }, index) => (
          <div key={index} className="box">
            <p>{tittle}</p>
            <p>{description}</p>
            <button onClick={() => removeHandler(index)}>Remove</button>
            {/* <button onClick={() => editHandler(index)}>EDIT</button> */}
          </div>
        ))}
      </div>
    </>
  );
}
