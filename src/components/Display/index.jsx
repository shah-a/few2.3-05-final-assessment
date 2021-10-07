import { uniqBy } from 'lodash/array';

function Display({ list, setList, data }) {
  return (
    <div className="Display">
      <h1>{data && data.name}</h1>
      <h3>{data && `Height: ${data.height}`}</h3>
      <h3>{data && `Mass: ${data.mass}`}</h3>
      <h3>{data && `Hair Colour: ${data.hair_color}`}</h3>
      <h3>{data && `Eye Colour: ${data.eye_color}`}</h3>
      <h3>{data && `Homeworld: ${data.homeworld.name}`}</h3>
      {data && (
        <button
          type="button"
          onClick={() => {
            const newList = uniqBy([...list, data], 'name');
            setList(newList);
          }}
        >
          Save
        </button>
      )}
    </div>
  );
}

export default Display;
