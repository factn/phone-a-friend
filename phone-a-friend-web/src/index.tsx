import React from 'react';
import ReactDOM from 'react-dom';

// import { ThemeProvider } from 'styled-components';

// import 'sanitize.css';
// import theme from './utils/theme';
import GlobalStyle from './utils/GlobalStyle';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from './contexts/AppContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import whyDidYouRender from '@welldone-software/why-did-you-render';

const MainContainer = () => {
  // eslint-disable-next-line no-undef
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    whyDidYouRender(React, {
      onlyLogs: true,
      titleColor: 'green',
      diffNameColor: 'darkturquoise',
    });
  }
  toast.configure();

  return (
    <>
      {/* <ToastContainer /> */}
      <GlobalStyle />
      <AppProvider>
        <App />
      </AppProvider>
    </>
  );
};

MainContainer.whyDidYouRender = true;

ReactDOM.render(<MainContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
