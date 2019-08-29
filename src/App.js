import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import EntityDashboard from './components/EntityDashboard';
import Header from './components/Header';
import Navigation from './components/Navigation';

// export const GlobalStyles = createGlobalStyle`
//   body, p, span, h1, h2, h3, h4, h5, input, button {
//     margin: 0;
//     border: 0;
//     padding: 0;
//     @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
//     font-family: 'Poppins', sans-serif;
//     /* line-height: 20px; */
//     letter-spacing: 0.2px;
//   }
//
//   span, p {
//     font-size: 12px;
//     border: 0;
//     margin: 0;
//     color: red;
//   }
//
//   /* These are general styles for the typography */
//   .extra-small {
//     font-size: 10px;
//   }
//
//   .small {
//     font-size: 11px;
//   }
//
//   .grey {
//     color: #7E7E7E;
//   }
//
//   .bold {
//     font-weight: 600;
//   }
//
//   .inline {
//     display: inline;
//   }
//
//   .padding-div {
//     padding: 20px 0px;
//   }
// `

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <EntityDashboard />
    </div>
  );
}

export default App;
