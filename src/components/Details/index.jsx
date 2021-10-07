import './Details.css';

function Details({ data }) {
  return (
    <div className="Details">
      <p>{`Height: ${data.height}`}</p>
      <p>{`Mass: ${data.mass}`}</p>
      <p>{`Hair Colour: ${data.hair_color}`}</p>
      <p>{`Eye Colour: ${data.eye_color}`}</p>
      <p>{`Homeworld: ${data.homeworld.name}`}</p>
      <p>Appears in:</p>
      <ul>{data.films.map((film) => <li key={film.title}>{`${film.title}`}</li>)}</ul>
    </div>
  );
}

export default Details;
