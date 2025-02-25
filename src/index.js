import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import reportWebVitals from "./reportWebVitals"

import "./index.css"

import Home from "./pages/Home"

import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      light: "#6d6d6d",
      main: "#424242",
      dark: "#1b1b1b",
    },
    secondary: {
      light: "#ffffff",
      main: "#e8eaf6",
      dark: "#b6b8c3",
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div className="container">
        <BrowserRouter>
          {/* Header*/}
          <a
            className="LogoContainer"
            href="https://jyes.dev"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="Logo"
              src={process.env.PUBLIC_URL + "/Signature.jpg"}
              alt="Jye Stillitano"
            />
          </a>
          {/* Content */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
