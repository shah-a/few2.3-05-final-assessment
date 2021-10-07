const fetchCharacter = async (id) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  if (!res.ok) return [null, new Error(res.statusText)];
  return [await res.json(), null];
};

export default fetchCharacter;
