import './Form.css';
import fetchCharacter from '../../utils/fetchCharacter';

// eslint-disable-next-line object-curly-newline
function Form({ id, setId, setData, setLoading }) {
  return (
    <div className="Form">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);

          if (id === 17) {
            setLoading(false);
            return alert('17 is invalid. Sorry!');
          }

          const [res, err] = await fetchCharacter(id);
          if (err) {
            setLoading(false);
            return alert(err);
          }

          setLoading(false);
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
