import styled from 'styled-components';
import addToCartImg from 'assets/icons/add-to-cart.svg';
interface Props {
  outOfStock: boolean;
}

export const PreviewWrapper = styled.div<Props>`
  padding: 11px 11px 16px;
  background-color: white;
  border-radius: 2px;
  position: relative;
  transition: all 0.6s;

  ${({ outOfStock }) =>
    outOfStock &&
    `
    pointer-events: none;
    &::after {
      content: 'OUT OF STOCK';
      position: absolute;
      z-index: 50;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: inherit;
      color: #505050;
      opacity: .5;
      font-size: 24px;
      display: grid;
      place-items: center;
      padding-bottom: 27%;
    }`}
  &:hover {
    box-shadow: 0px 4px 28px rgba(168, 172, 176, 0.4);
    & > p::after {
     transform: scale(1);
    }
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  p {
    font-weight: lighter !important;
    font-size: 17px;
    color: #6a6969;
    margin-top: 20px;
    cursor: pointer;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 52px;
      right: 15px;
      width: 40px;
      height: 40px;
      transform: scale(0);
      background: url(${addToCartImg}) center no-repeat;
      background-size: contain;
      border-radius: 100%;
      transition: all 0.3s cubic-bezier(0, 1.1, 0.8, 0.87 );
    }
    span {
      font-weight: 500;
      display: block;
      color: initial;
      margin-top: 8px;
    }
  }
`;
