import { useState } from 'react';

function StarWars() {
  const [id, setId] = useState('');

  return (
    <div className="StarWars">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Submitted: ', id);
        }}
      >
        <input
          type="number"
          min="1"
          max="83"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StarWars;
