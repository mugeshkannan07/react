import React, { useEffect, useState } from 'react';

export const Usingstates = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  useEffect(()=> {
    console.log('Usingstates')
  })

  return (
    <div>
      <button onClick={handleClick}>Usestate {count}</button>
    </div>
  );
};




