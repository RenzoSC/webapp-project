import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import Contact from './Contact';
import Products from './Products';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PerfilForm from './PerfilForm';

import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { ProductContextProvider } from './ProductContext';
import { ProductDetail } from './ProductDetail';
import ProdsFav from './ProdsFav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='contactos' element={<Contact/>}/>
        <Route path='productos'>
          <Route path=':productName' element={<ProductContextProvider><ProductDetail/></ProductContextProvider>}/>
          <Route path='' element={<ProductContextProvider><Products/></ProductContextProvider>}/>
        </Route>
        <Route path='login' element={<SignIn/>}/>
        <Route path='register' element={<SignUp/>}/>
        <Route path='perfil' element={<PerfilForm/>}></Route>
        <Route path='productos-fav'>
          <Route path=':productName'element={<ProductContextProvider><ProductDetail/></ProductContextProvider>}/>
          <Route path='' element={<ProductContextProvider><ProdsFav/></ProductContextProvider>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
