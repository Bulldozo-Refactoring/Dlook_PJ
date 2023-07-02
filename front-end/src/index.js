import App from 'App';
import { store } from 'app/store';
import GlobalStyle from 'app/style/GlobalStyle';
import theme from 'app/style/theme';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider, StyleSheetManager } from 'styled-components';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme' && prop !== 'sx'}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle $theme={theme} />
        <App />
      </Provider>
    </ThemeProvider>
  </StyleSheetManager>
);
