import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import NotFound from './components/NotFound';
import productApi from 'api/productApi';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {

  const onCreateToken = async () => {
    const user = { email: "nvdinh0766777123@gmail.com", password: "123" };
    const res = await productApi.createToken(user);
    console.log(res.token);
    // lưu token xuống đĩa
    localStorage.setItem('token', res.token);
  }

  const onGetProductList = async () => {
    const response = await productApi.testGet();
    console.log(response);
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log("Sign-out successful!");
  };

  return (
    <div className="photo-app">
      <button onClick={onCreateToken}>onCreateToken</button>
      <button onClick={onGetProductList}>Get Product List</button>
      <button onClick={handleLogout}>Logout</button>
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;