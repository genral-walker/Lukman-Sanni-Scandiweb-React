import { Navbar } from 'components';
import { ROUTES } from 'constants/routes';
import { Component } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'App.style';

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={ROUTES.HOME} element={<h1></h1>} />
            <Route path={ROUTES.PRODUCT} element={<h1>product</h1>} />
            <Route path={ROUTES.CART} element={<h1>Cart</h1>} />
            <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
