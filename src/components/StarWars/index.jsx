import { useState } from 'react';
import { handleSubmit, handleSave } from '../../functions';

function StarWars() {
  const [id, setId] = useState(1);
  const [list, setList] = useState([]);
  const [data, setData] = useState(null);

  return (
    <div className="StarWars">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          handleSubmit(id, setData);
        }}
      >
        <label>
          <h3>Enter SWAPI Character ID:</h3>
          <input
            type="number"
            min="1"
            max="83"
            value={id}
            onChange={(e) => setId(parseInt(e.target.value, 10))}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h1>{data && data.name}</h1>
      <h2>{data && `Height: ${data.height}`}</h2>
      <h2>{data && `Mass: ${data.mass}`}</h2>
      <h2>{data && `Hair Colour: ${data.hair_color}`}</h2>
      <h2>{data && `Eye Colour: ${data.eye_color}`}</h2>
      {data && (
        <button type="button" onClick={() => handleSave(list, setList, data)}>
          Save
        </button>
      )}
    </div>
  );
}

export default StarWars;
