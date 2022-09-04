import { ProductPreview } from 'components';
import { Component } from 'react';
import { ListingsWrapper } from './style';

export default class ProductListings extends Component {
  render() {
    return (
      <ListingsWrapper>
        <h1>Category name</h1>

        <div>
          <ProductPreview
            image={require('assets/preview.jpg')}
            description="Apollo Running Short"
            price="$50.00"
            outOfStock
          />
           <ProductPreview
            image={require('assets/preview.jpg')}
            description="Apollo Running Short"
            price="$50.00"
            outOfStock
          />
           <ProductPreview
            image={require('assets/preview.jpg')}
            description="Apollo Running Short"
            price="$50.00"
          />
           <ProductPreview
            image={require('assets/preview.jpg')}
            description="Apollo Running Short"
            price="$50.00"
          />
           <ProductPreview
            image={require('assets/preview.jpg')}
            description="Apollo Running Short"
            price="$50.00"
            outOfStock
          />
           <ProductPreview
            image={require('assets/preview.jpg')}
            description="Apollo Running Short"
            price="$50.00"
          />
           <ProductPreview
            image={require('assets/preview.jpg')}
            description="Apollo Running Short"
            price="$50.00"
          />
           <ProductPreview
            image={require('assets/preview.jpg')}
            description="Apollo Running Short"
            price="$50.00"
            outOfStock
          />
           <ProductPreview
            image={require('assets/preview.jpg')}
            description="Apollo Running Short"
            price="$50.00"
            outOfStock
          />
           <ProductPreview
            image={require('assets/preview.jpg')}
            description="Apollo Running Short"
            price="$50.00"
          />
           <ProductPreview
            image={require('assets/preview.jpg')}
            description="Apollo Running Short"
            price="$50.00"
            outOfStock
          />
           <ProductPreview
            image={require('assets/preview.jpg')}
            description="Apollo Running Short"
            price="$50.00"
            outOfStock
          />
        </div>
      </ListingsWrapper>
    );
  }
}
