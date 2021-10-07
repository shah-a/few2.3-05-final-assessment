import { handleSubmit } from '../../functions';

function Form({ id, setId, setData }) {
  return (
    <div className="Form">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          handleSubmit(id, setData);
        }}
      >
        <label>
          <h3>Enter SWAPI Character ID:</h3>
          <input
            type="number"
            min="1"
            max="83"
            value={id}
            onChange={(e) => setId(parseInt(e.target.value, 10))}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
