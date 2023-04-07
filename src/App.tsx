import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/scollToTop';
import Header from './components/Header';
// import CartPage from './pages/CartPage';
import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import './styles/app.scss';
import Spinner from './components/Spinner';

const CartPage = React.lazy(() => import(/* webpackChunkName: "CartPage" */'./pages/CartPage'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */'./pages/NotFound'));

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='*' element={<NotFound />} />
              </Routes> 
            </Suspense>
          </BrowserRouter>      
        </div> 
      </div>
    </div>
  );
}

export default App;
