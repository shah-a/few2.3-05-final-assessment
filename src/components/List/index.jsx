function List({ list }) {
  const characterList = list.map((character) => (
    <div key={character.name}>
      <h2>{character.name}</h2>
      <h3>{`Homeworld: ${character.homeworld.name}`}</h3>
    </div>
  ));

  return (
    <div className="List">
      {list.length > 0 && <h1>Character List</h1>}
      {characterList}
    </div>
  );
}

export default List;
