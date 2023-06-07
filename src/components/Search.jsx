import { useState } from 'react';

export default function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('');

  const handleKey = (event) => {
    if (event.key === 'Enter') handleSubmit();
  };
  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          type='search'
          id='search-field'
          placeholder='search'
          onKeyDown={handleKey}
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        <button
          className='btn'
          style={{ position: 'absolute', top: 0, right: 0 }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
}
