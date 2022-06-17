import React from 'react';
import Provider from './services/Provider';
import Stars from './components/Stars';
import Header from './components/Header';
import Table from './components/Table';
import Form from './components/Form';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: sans-serif;
  }

  html {
    overflow-X: hidden;
    background-color: #101010;
  }

  body { 
    width: 100vw;
  }
`;

function App() {
  return (
    <Provider>
    <GlobalStyle/>
      <Stars />
      <Header />
      <Form />
      <Table />
      <Footer />
    </Provider>
  );
}

export default App;
