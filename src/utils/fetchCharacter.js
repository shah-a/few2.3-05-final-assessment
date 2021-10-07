const fetchByUrl = async (url) => {
  const res = await fetch(url);
  if (!res.ok) return [null, new Error(res.statusText)];
  return [await res.json(), null];
};

const fetchCharacter = async (id) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  if (!res.ok) return [null, new Error(res.statusText)];
  const data = await res.json();

  const [homeworld, err] = await fetchByUrl(data.homeworld);
  if (err) return [null, new Error(err)];

  // Mutates data's homeworld url with homeworld details
  data.homeworld = homeworld;

  return [data, null];
};

export default fetchCharacter;
