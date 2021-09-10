import { unwrapResult } from '@reduxjs/toolkit';
import productApi from 'api/productApi';
import { getMe } from 'app/userSlice';
import SignIn from 'features/Auth/pages/SignIn';
import firebase from 'firebase';
import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

// Configure Firebase.
const config = {
  // apiKey: "AIzaSyB3FtOQKw_OKjif72Qla2IsG9nek1O71PI",
  // authDomain: "redux-photo-app-ea6ce.firebaseapp.com",
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
  // authDomain: "myapp-project-123.firebaseapp.com",
};

firebase.initializeApp(config);

function App() {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,

        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }

    fetchProductList();
  }, []);

  // Handle firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        // user logs out, handle something here
        console.log('User is not logged in');
        return;
      }

      // Get me when signed in
      // const action = getMe();
      try {
        const actionResult = await dispatch(getMe());
        const currentUser = unwrapResult(actionResult);
        console.log('Logged in user: ', currentUser);
      } catch (error) {
        console.log('Failed to login ', error.message);
        // show toast error
      }

    });

    return () => unregisterAuthObserver();
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut().then((data) => {
      // Sign-out successful.
      localStorage.removeItem('firebaseui::rememberedAccounts');
      console.log("Sign-out successful", data);
    }, function (error) {
      // An error happened.
      console.log("An error happened");
    });
  };

  const handleButtonClick = async () => {
    try {
      const params = {
        _page: 1,
        _limit: 10,

      };
      const response = await productApi.getAll(params);
      console.log(response);
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
    }
  }

  const onGetProductList = async () => {
    const response = await productApi.testGet();
    console.log(response);
  }

  const onCreateToken = async () => {
    const user = { email: "nvdinh0766777123@gmail.com", password: "123" };
    const res = await productApi.createToken(user);
    console.log(res.token);
    // lưu token xuống đĩa
    localStorage.setItem('token', res.token);
  }


  return (
    <div className="photo-app">
      <button onClick={handleLogout}>Logout</button>
      <button onClick={onGetProductList}>Get Product List</button>
      <button onClick={onCreateToken}>onCreateToken</button>
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Button onClick={handleButtonClick}>Fetch Product List</Button>

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route path="/sign-in" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;