import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import Contact from './Contact';
import Products from './Products';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ProductContextProvider } from './ProductContext';

const router = createBrowserRouter([{
  path:'/',
  element:<Home/>
},
{
  path:'/contactos',
  element:<Contact/>
},
{
  path:'/productos',
  element:(<ProductContextProvider><Products/></ProductContextProvider>)
},
{
  path:'/login',
  element:<SignIn/>
},
{
  path:'/register',
  element:<SignUp/>
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
