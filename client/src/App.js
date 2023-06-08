import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import Login from './components/Login';
// import Logout from './components/Logout';
import './App.css';
// import { fetchLikedRecipes } from './utils/ApiService';
import LikedRecipes from './pages/LikedRecipes';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthCtxProvider } from './context/Auth';
import { RecipeCtxProvider } from './context/RecipeContext';

import { useAuthCtx } from './hooks/useAuthCtx';



function App() {
  const { user } = useAuthCtx()
  console.log(user)

  return (
    // <AuthCtxProvider>
    //   <RecipeCtxProvider>
    <div className="App">
      <h1>App</h1>
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={user ? <LikedRecipes /> : <Navigate to='/login' />}
            />
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate to='/' />}
            />
            <Route
              path='/register'
              element={!user ? <Register /> : <Navigate to='/' />}
            />
            <Route
              path='/logout'
              element={user ? <Login /> : <Navigate to='/login' />}
            />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
    //   </RecipeCtxProvider>
    // </AuthCtxProvider>
  );
}

export default App;