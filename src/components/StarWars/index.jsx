import { useState, useEffect } from 'react';
import './StarWars.css';
import Form from '../Form';
import Display from '../Display';
import List from '../List';

function StarWars() {
  const [id, setId] = useState(1);
  const [list, setList] = useState([]);
  const [data, setData] = useState(null);

  // useEffect for filtering duplicates out of`list`
  // `list` each time it changes:
  useEffect(() => {
    setList([...new Set(list)]);
  }, [list]);

  return (
    <div className="StarWars">
      <section>
        <Form id={id} setId={setId} setData={setData} />
        <Display list={list} setList={setList} data={data} />
      </section>
      <section>
        <List list={list} />
      </section>
    </div>
  );
}

export default StarWars;
