import styled from 'styled-components';
import backgroundSimple from 'common/src/assets/image/app/mobile3.png';
const BoxWrapper = styled.section`
  @media (max-width: 768px) {
    // background-image: url(${backgroundSimple}) !important;
    background-image: none !important;
  }`;

  export { BoxWrapper };