import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  };

  const handleOnline = () => {
    setStatus(true);
  };

  const handleOffline = () => {
    setStatus(false);
  };

  useEffect(() => {
    document.title = `You have clicked ${count} times.`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [count]);

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
      <h2>Mouse position</h2>
      {JSON.stringify(mousePosition, null, 2)}

      <h2>Network status</h2>
      <p>
        You are <strong>{status ? 'online' : 'offline'}</strong>
      </p>
    </div>
  );
};
export default App;
