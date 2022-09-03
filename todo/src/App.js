import './App.css';
import ToDo from './ToDo/ToDo';
import Header from "./Header";
import React from 'react';

const App = () =>
{
  return (
    <div>
      <Header />
      <ToDo />
    </div>
  );
};

export default App;
