import { useState } from 'react';
import './StarWars.css';
import Form from '../Form';
import Display from '../Display';
import List from '../List';

function StarWars() {
  const [id, setId] = useState(1);
  const [list, setList] = useState([]);
  const [data, setData] = useState(null);

  return (
    <div className="StarWars">
      <section>
        <Form id={id} setId={setId} setData={setData} />
        <Display list={list} setList={setList} data={data} />
      </section>
      <section>
        <List />
      </section>
    </div>
  );
}

export default StarWars;
