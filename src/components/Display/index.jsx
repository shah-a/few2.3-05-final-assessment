function Display({ list, setList, data }) {
  return (
    <div className="Display">
      <h1>{data && data.name}</h1>
      <h2>{data && `Height: ${data.height}`}</h2>
      <h2>{data && `Mass: ${data.mass}`}</h2>
      <h2>{data && `Hair Colour: ${data.hair_color}`}</h2>
      <h2>{data && `Eye Colour: ${data.eye_color}`}</h2>
      {data && (
        <button type="button" onClick={() => setList([...list, data])}>
          Save
        </button>
      )}
    </div>
  );
}

export default Display;
