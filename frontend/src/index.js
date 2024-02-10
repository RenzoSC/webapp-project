import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import Contact from './Contact';
import Products from './Products';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { ProductContextProvider } from './ProductContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='contactos' element={<Contact/>}/>
        <Route path='productos' element={<ProductContextProvider><Products/></ProductContextProvider>}>
        
        </Route>
        <Route path='login' element={<SignIn/>}/>
        <Route path='register' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
