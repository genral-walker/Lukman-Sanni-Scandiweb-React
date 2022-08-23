import { Component } from 'react';
import { NavbarWrapper } from './style';
import { ReactComponent as PageLogo } from 'assets/icons/page-logo.svg';
import { ReactComponent as CartLogo } from 'assets/icons/cart.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

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
    elem.id === 'popup-cart'
      ? this.updateCart()
      : this.setState((state, _) => ({ popupCartOpen: !state.popupCartOpen }));
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
            <CartLogo /> <span>3</span>
            {popupCartOpen && <div id="popup-cart"></div>}
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
