function List({ list }) {
  return (
    <div className="List">
      <h1>List Component</h1>
      {list.map((character) => <h1 key={character.name}>{character.name}</h1>)}
    </div>
  );
}

export default List;
