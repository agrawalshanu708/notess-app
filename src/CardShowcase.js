export function CardShowcase({ card, setCard }) {
  function removeHandler(index) {
    setCard((card) => card.filter((item, ind) => index !== ind));
  }
  const pinnedNotes = card.filter((item) => item.pin === true);
  const unpinnedNotes = card.filter((item) => item.pin === false);

  console.log(pinnedNotes);
  return (
    <>
      <div className="pin-container">
        {<h1>Pinned Notes</h1> &&
          pinnedNotes.length >= 1 &&
          pinnedNotes.map(({ tittle, description, color }, index) => (
            <div key={index} style={{ backgroundColor: color }} className="box">
              <p>{tittle}</p>
              <p>{description}</p>
              <button onClick={() => removeHandler(index)}>Remove</button>
              {/* <button onClick={() => editHandler(index)}>EDIT</button> */}
            </div>
          ))}
      </div>
      <div className="unpin-container">
        {unpinnedNotes.map(({ tittle, description, color }, index) => (
          <div key={index} style={{ backgroundColor: color }} className="box">
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
