import fetchCharacter from './utils/fetchCharacter';

const handleSubmit = async (id, setData) => {
  if (id === 17) {
    return alert('17 is invalid. Sorry!');
  }

  const [res, err] = await fetchCharacter(id);
  if (err) {
    return alert(err);
  }

  return setData(res);
};

const handleSave = (list, setList, data) => {
  // Clunky-looking syntax, but it's necesssary
  // for setting `list` without duplicating entries
  setList([...new Set([...list, data])]);
};

export { handleSubmit, handleSave };
