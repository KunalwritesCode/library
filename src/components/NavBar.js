import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Preloader from './preloader';
import SearchBar from './SearchBar';

const NavBar = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Preloader />
      <nav className='navbar'>
    
    
      <button className='button' onClick={() => loginWithRedirect()}>Log In</button>;
    </nav>
           
           <SearchBar />

    </div>
  )
}

export default NavBar
