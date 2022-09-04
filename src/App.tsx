import { Navbar } from 'components';
import { ROUTES } from 'constants/routes';
import { Component } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'App.style';
import { CartPage, ProductListingsPage, ProductPage } from 'pages';

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={ROUTES.HOME} element={<ProductListingsPage />} />
            <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
            <Route path={ROUTES.CART} element={<CartPage />} />
            <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
