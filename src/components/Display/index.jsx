import { uniqBy } from 'lodash/array';
import Details from '../Details';
import './Display.css';

function Display({ list, setList, data }) {
  return (
    <div className="Display">
      <h1>{data.name}</h1>
      <Details data={data} />
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
