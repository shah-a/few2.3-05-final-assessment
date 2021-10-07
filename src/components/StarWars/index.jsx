import { useState } from 'react';
import { fetchCharacter } from '../../functions';

function StarWars() {
  const [id, setId] = useState(1);
  const [data, setData] = useState(null);
  const [list, setList] = useState([]);

  const handleSubmit = async () => {
    if (id === 17) {
      return alert('17 is invalid. Sorry!');
    }

    const [res, err] = await fetchCharacter(id);
    if (err) {
      return alert(err);
    }

    return setData(res);
  };

  const handleSave = () => {
    // Clunky-looking syntax, but it's necesssary
    // for setting `list` without duplicating entries
    setList([...new Set([...list, data])]);
  };

  return (
    <div className="StarWars">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          handleSubmit();
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
      {data && <button type="button" onClick={handleSave}>Save</button>}
    </div>
  );
}

export default StarWars;
