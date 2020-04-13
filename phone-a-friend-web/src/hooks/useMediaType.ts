import { useState, useEffect } from 'react';
import useWindowWidth from './useWindowWidth';

const breakPoint = {
  huge: 1440,
  large: 1170,
  medium: 768,
  small: 450,
};

const useMediaType = (): string => {
  const screenSize = useWindowWidth();
  const [mediaType, setMediaType] = useState('desktop');
  useEffect(() => {
    if (screenSize > breakPoint.medium) {
      setMediaType('desktop');
    } else {
      setMediaType('mobile');
    }
  }, [screenSize]);
  return mediaType;
};

export default useMediaType;
