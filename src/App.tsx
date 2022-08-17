import { ROUTES } from 'constants/routes';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path={ROUTES.HOME} element={<h1>Home</h1>} />
        <Route path={ROUTES.PRODUCT} element={<h1>product</h1>} />
        <Route path={ROUTES.CART} element={<h1>Cart</h1>} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
