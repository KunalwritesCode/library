import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './styles.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Auth0Provider
    domain="dev-gjmar0bhby0zjaq1.us.auth0.com"
    clientId="yvJ7Nz9XFIL7oH0qtjM3kb8jWXauzVNj"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >       
  <App />
</Auth0Provider>
  </BrowserRouter>
  
  
);


