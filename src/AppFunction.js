import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  useEffect(() => {
    document.title = `You have clicked ${count} times.`;
  });

  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Click increment count
      </button>
      {count}

      <h2>Toggle lights</h2>
      <img
        src={
          isOn
            ? 'https://icon.now.sh/highlight/fd0'
            : 'https://icon.now.sh/highlight/aaa'
        }
        style={{
          height: '50px',
          width: '50px'
        }}
        onClick={toggleLight}
        alt="flashlight"
      />
    </div>
  );
};
export default App;
