import React, { useEffect } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Route';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase/Firebase.config';
import { useDispatch } from 'react-redux';
import { setUser } from './features/auth/authSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(setUser(user.email))
      }
    })
  }, [])

  return (
    <div className="max-w-[1400px] mx-auto">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
