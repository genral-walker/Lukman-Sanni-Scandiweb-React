import { Component } from 'react';
import { DetailWrapper } from './style';

interface IProps {
  title: string;
  description: string;
  price: string;
  sizes: string[];
  colors: string[];
  type: 'pop-over-cart' | 'cart-page-cart';
}

export default class CartDetailBox extends Component<IProps, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { title, description, price, sizes, colors } = this.props;
    return (
      <DetailWrapper>
        <h2>{title}</h2>

        <p>
          {description}
          <span>{price}</span>
        </p>

        <p>Size:</p>
        <div>
          {sizes.map((size, idx) => (
            <button key={idx}>{size}</button>
          ))}
        </div>

        <p>Color:</p>
        <div>
          {colors.map((color, idx) => (
            <button key={idx} style={{ backgroundColor: color }}></button>
          ))}
        </div>
      </DetailWrapper>
    );
  }
}
