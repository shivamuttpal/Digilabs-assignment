import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Desktop from './desktop';
import Tablet from './tablet';
import Mobile from './mobile';  

const index = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Update screenWidth on window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Initial setup and cleanup
    window.addEventListener('resize', handleResize);
    setScreenWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run effect only once on mount

  if (screenWidth >= 1024) {
    return <Desktop />;
  } else if (screenWidth >= 768) {
    return <Tablet />;
  } else {
    return <Mobile />;
  }
};


export default index;
