import React from 'react';
import {MyRoutes} from './Routers/routes';
import {ToastContainer} from 'react-toastify';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <MyRoutes />
    </div>
  );
}

export default App;
