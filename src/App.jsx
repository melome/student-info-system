import React, { useState } from 'react'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react';


import Navbar from './features/Navbar/Navbar'
import Dashboard from './features/Dashboard/Dashboard'

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <>
        <Navbar />
        <div>
          Hello {user.name}{' '}
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log out
          </button>
        </div>
        {/* <Dashboard /> */}
      </>
    );
  }

  // Redirect to login if not authenticated
  loginWithRedirect();
  return null; // Return null to avoid rendering anything before redirection
}

export default App