import { Component } from 'react';
import { ImageWrapper } from './style';
import cartImage from 'assets/Product.jpg';

interface IProps {}

export default class CartImageBox extends Component<IProps, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <ImageWrapper>
        <div>
          <button>+</button>
          <p>1</p>
          <button>-</button>
        </div>
        <img src={cartImage} />
      </ImageWrapper>
    );
  }
}
