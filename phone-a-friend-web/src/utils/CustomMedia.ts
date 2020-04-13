import { generateMedia } from 'styled-media-query';

const breakPoint = {
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
};

const Screen = generateMedia({
  mobile: breakPoint.medium,
});

export default Screen;
