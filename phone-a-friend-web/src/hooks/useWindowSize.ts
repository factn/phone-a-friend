import { useState, useEffect } from 'react';


function useWindowSize() {
    const isClient = typeof window === 'object';
    const getSize = () => (
        {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
          }
    )
  
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
        console.log('useWindow')
      if (!isClient) {
        return;
      }

      function handleResize() {
        setWindowSize(getSize());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return windowSize;
  
  }

  export default useWindowSize;