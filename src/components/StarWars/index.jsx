import { useState } from 'react';
import { fetchCharacter } from '../../functions';

function StarWars() {
  const [id, setId] = useState(1);
  const [name, setName] = useState(null);

  return (
    <div className="StarWars">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (id === 17) return alert('17 is invalid. Sorry!');
          const [data, err] = await fetchCharacter(id);
          if (err) return alert(err);
          return setName(data.name);
        }}
      >
        <input
          type="number"
          min="1"
          max="83"
          value={id}
          onChange={(e) => setId(parseInt(e.target.value, 10))}
        />
        <button type="submit">Submit</button>
      </form>
      <h1>{name}</h1>
    </div>
  );
}

export default StarWars;
