import './List.css';

function List({ list }) {
  const characterList = list.map((character) => (
    <div key={character.name}>
      <h1>{character.name}</h1>
    </div>
  ));

  return (
    <div className="List">
      {list.length > 0 && <h3>Character List</h3>}
      <div className="card">
        {characterList}
      </div>
    </div>
  );
}

export default List;
