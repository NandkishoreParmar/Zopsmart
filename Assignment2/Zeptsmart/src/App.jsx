import React, { useState, useEffect } from 'react';

function AppTrafficLight() {
  const [color, setColor] = useState('green'); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (color) {
        case 'green':
          setColor('yellow');
          break;
        case 'yellow':
          setColor(color === 'green' ? 'yellow' : 'red');
          break;
        case 'red':
          setColor('yellow');
          break;
        default:
          break;
      }
    }, getTimeForColor(color));

    return () => clearInterval(intervalId);
  }, [color]);

  const getTimeForColor = (currentColor) => {
    switch (currentColor) {
      case 'green':
        return 3000; 
      case 'yellow':
        return currentColor === 'green' ? 2000 : 5000;
      case 'red':
        return 2000; 
      default:
        return 0;
    }
  };

  const bulbStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: color,
    margin: '50px auto',
    transition: 'background-color 1s ease',
  };

  return (
    <div>
      <div style={bulbStyle}></div>
    </div>
  );
}

export default AppTrafficLight;
