import React from 'react';
import Provider from './services/Provider';
import Table from './components/Table';
import Form from './components/Form';
// import './App.css';

function App() {
  return (
    <Provider>
      <Form />
      <Table />
    </Provider>
  );
}

export default App;
// app
