import { Component } from 'react';
import { PreviewWrapper } from './style';

interface IProps {
  image: string;
  description: string;
  price: string;
  outOfStock?: boolean;
}

export default class ProductPreview extends Component<IProps, any> {
  render() {
    const { image, outOfStock, description, price } = this.props;
    return (
      <PreviewWrapper outOfStock={outOfStock || false}>
        <img src={image} alt={description} />
        <p>
          {description}
          <span>{price}</span>
        </p>
      </PreviewWrapper>
    );
  }
}
