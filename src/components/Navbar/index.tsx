import { Component } from 'react';
import { NavbarWrapper } from './style';
import { ReactComponent as PageLogo } from 'assets/icons/page-logo.svg';
import { ReactComponent as CartLogo } from 'assets/icons/cart.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { CartDetailBox, CartImageBox } from 'components';

interface NavbarState {
  currency: '$' | '€' | '¥';
  popupCartOpen: boolean;
}

export default class Navbar extends Component<any, NavbarState> {
  constructor(props: any) {
    super(props);

    this.state = {
      currency: '$',
      popupCartOpen: false,
    };

    this.updateCart = this.updateCart.bind(this);
    this.handleCartClickType = this.handleCartClickType.bind(this);
  }

  updateCart() {
    console.log('walker');
  }

  handleCartClickType(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const elem = evt.target as HTMLElement;
    // elem.id === 'popup-cart'
    //   ? this.updateCart()
    //   : this.setState((state, _) => ({ popupCartOpen: !state.popupCartOpen }));

    if (elem.id === 'cart-quantity') {
      this.setState((state, _) => ({ popupCartOpen: !state.popupCartOpen }));
    }
  }

  render() {
    const { currency, popupCartOpen } = this.state;

    return (
      <NavbarWrapper>
        <div>
          <p>WOMEN</p>
          <p>MEN</p>
          <p>KIDS</p>
        </div>

        <Link to={ROUTES.HOME}>
          <PageLogo />
        </Link>

        <div>
          <select
            id="currency-select"
            value={currency}
            onChange={(evt) =>
              this.setState({
                currency: evt.target.value as NavbarState['currency'],
              })
            }
          >
            <option value="$">$ USD</option>
            <option value="€">€ EUR</option>
            <option value="¥">¥ JPY</option>
          </select>

          <div onClick={this.handleCartClickType}>
            <CartLogo />
            <span id="cart-quantity">3</span>
            {/* If no cart item  do not display the above. Also disable the handleCartClick */}
            {popupCartOpen && (
              <div id="popup-cart">
                <h3>
                  <b>My Bags.</b> 3 items
                </h3>

                <div className="cart-main">
                  <div className="cart-info">
                    <CartDetailBox
                      title="Apollo"
                      description="Running Short"
                      price="$50.00"
                      colors={['red', 'brown', 'blue']}
                      sizes={['XS', 'S', 'M', 'L']}
                      type="pop-over-cart"
                    />
                    <CartImageBox />
                  </div>
                  <div className="cart-info">
                    <CartDetailBox
                      title="Apollo"
                      description="Running Short"
                      price="$50.00"
                      colors={['red', 'brown', 'blue']}
                      sizes={['XS', 'S', 'M', 'L']}
                      type="pop-over-cart"
                    />
                    <CartImageBox />
                  </div>
                </div>

                <h4>
                  <span>Total</span>
                  <span>$200.00</span>
                </h4>

                <div className="btn-wrapper">
                  <button>VIEW BAG</button>
                  <button>CHECK OUT</button>
                </div>
              </div>
            )}
          </div>
        </div>
        {popupCartOpen && (
          <span
            className="blur"
            onClick={() => this.setState({ popupCartOpen: false })}
          ></span>
        )}
      </NavbarWrapper>
    );
  }
}
