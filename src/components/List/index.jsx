function List({ list }) {
  return (
    <div className="List">
      <h1>List Component</h1>
      {list.map((character) => <h1>{character.name}</h1>)}
    </div>
  );
}

export default List;
