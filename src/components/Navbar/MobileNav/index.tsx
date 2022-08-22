import { Component } from 'react';
import { MobileNavWrapper } from './style';
import { ReactComponent as PageLogo } from 'assets/icons/page-logo.svg';
import { ReactComponent as CartLogo } from 'assets/icons/cart.svg';
import { ReactComponent as MenuLogo } from 'assets/icons/menu.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

interface NavbarState {
  currency: '$' | '€' | '¥';
}

export default class MobileNav extends Component<NavbarState, unknown> {
  constructor(props: NavbarState) {
    super(props);
  }
  render() {
    return (
      <MobileNavWrapper>
         <PageLogo />

        <div className="right">
          <select
            id="currency-select"
            value={this.props.currency}
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

          <div>
            <CartLogo /> <span>3</span>
          </div>
          <MenuLogo className='menu'/>
        </div>
      </MobileNavWrapper>
    );
  }
}
