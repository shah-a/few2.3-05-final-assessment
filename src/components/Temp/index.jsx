import React from 'react';

function test() {
  console.log('it works');
}

function Temp() {
  return (
    <div className="Temp" style={{ alignSelf: 'center' }}>
      <button type="button" onClick={test}>
        Click me
      </button>
    </div>
  );
}

export default Temp;
