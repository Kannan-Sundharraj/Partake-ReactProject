import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cookies from './pages/Cookies';
import Wafers from './pages/Wafers';
import Grahams from './pages/Grahams';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Store';
import CartItems from './pages/CartItems';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cookies' element={<Cookies/>}/>
            <Route path='/wafers' element={<Wafers/>}/>
            <Route path='/grahams' element={<Grahams/>}/>
            <Route path='/carts' element={<CartItems/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  )
}

export default App;