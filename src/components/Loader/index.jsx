import './Loader.css';
import dots from './three-dots.svg';

function Loader() {
  return (
    <div className="Loader">
      <h1>Loading</h1>
      <img src={dots} alt="" width="75" />
    </div>
  );
}

export default Loader;
