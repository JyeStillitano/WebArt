import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import reportWebVitals from './reportWebVitals'

import './index.css'

import Header from "./components/Header"
import Home from './pages/Home'
import Digital from "./pages/Digital"
import Drawing from "./pages/Drawing"
import Sculpture from "./pages/Sculpture"

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#6d6d6d',
      main: '#424242',
      dark: '#1b1b1b'
    },
    secondary: {
      light: '#ffffff',
      main: '#e8eaf6',
      dark: '#b6b8c3'
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <div className="container">
            <BrowserRouter>
              {/* Header */}
              <Header logo={process.env.PUBLIC_URL + "/Signature.jpg"}/>
              {/* Content */}
              <Routes>
                <Route path="/WebArt" element={<Home />} />
                <Route path="/Digital" element={<Digital />} />
                <Route path="/Drawing" element={<Drawing />} />
                <Route path="/Sculpture" element={<Sculpture />} />
              </Routes>
            </BrowserRouter>
        </div>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
