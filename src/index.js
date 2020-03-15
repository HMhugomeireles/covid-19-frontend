import "./globals";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  body {
    width:100%;
    background: #333;
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }
`;

ReactDOM.render(
  <div>
    <GlobalStyle />
    <App />
  </div>,
  document.getElementById("root")
);
