// ! Effects with event listners need cleanup to avoid memory leaks
// * Without returning a cleanup function, a new event listner would be added each time the component re-renders -> will cause bugs and decrease performance to the point of crashing. Because effects run after every render and not just once, React calls our cleanup function before each re-render and before unmounting to clean up each effect call.

import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  const increment = () => setClickCount(prev => prev + 1);

  useEffect(() => {
    document.addEventListener('mousedown', increment);

    // ! cleanup
    return () => {
      document.removeEventListener('mousedown', increment);
    }
  })

  return (
    <h1>Document Clicks: {clickCount}</h1>
  );
};