import { uniqBy } from 'lodash/array';
import './Display.css';

function Display({ list, setList, data }) {
  return (
    <div className="Display">
      <h1>{data.name}</h1>
      <div className="details">
        <h3>{`Height: ${data.height}`}</h3>
        <h3>{`Mass: ${data.mass}`}</h3>
        <h3>{`Hair Colour: ${data.hair_color}`}</h3>
        <h3>{`Eye Colour: ${data.eye_color}`}</h3>
        <h3>{`Homeworld: ${data.homeworld.name}`}</h3>
      </div>
      <button
        type="button"
        onClick={() => {
          const newList = uniqBy([...list, data], 'name');
          setList(newList);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default Display;
