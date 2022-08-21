import { Component } from 'react';
import { NavbarWrapper } from './style';
import { ReactComponent as PageLogo } from 'assets/icons/page-logo.svg';
import { ReactComponent as CartLogo } from 'assets/icons/cart.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

interface NavbarState {
  currency: '$' | '€' | '¥';
}

export default class Navbar extends Component<any, NavbarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currency: '$',
    };
  }

  render() {
    const { currency } = this.state;

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

          <CartLogo />
        </div>
      </NavbarWrapper>
    );
  }
}
