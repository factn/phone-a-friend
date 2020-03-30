import React from "react";
import ReactDOM from "react-dom";

// import { ThemeProvider } from 'styled-components';

// import 'sanitize.css';
// import theme from './utils/theme';
import GlobalStyle from "./utils/GlobalStyle";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { AppProvider } from "./contexts/AppContext";

const MainContainer = () => (
  <>
    <GlobalStyle />
    <AppProvider>
      <App />
    </AppProvider>
  </>
);

ReactDOM.render(<MainContainer />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
