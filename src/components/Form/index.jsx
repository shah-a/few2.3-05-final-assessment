import './Form.css';
import fetchCharacter from '../../utils/fetchCharacter';

function Form({ id, setId, setData }) {
  return (
    <div className="Form">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (id === 17) {
            return alert('17 is invalid. Sorry!');
          }
          const [res, err] = await fetchCharacter(id);
          if (err) {
            return alert(err);
          }
          return setData(res);
        }}
      >
        <h3>Enter SWAPI Character ID:</h3>
        <div className="input">
          <input
            type="number"
            min="1"
            max="83"
            value={id || 1}
            onChange={(e) => setId(parseInt(e.target.value, 10) || 1)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
