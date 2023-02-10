import './styles/main.scss'
import { SnackbarProvider } from "notistack";
import { store } from './store'
import { Provider } from 'react-redux'

import Router from './Router';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <Router />
      </Provider>
    </SnackbarProvider>
  );
}

export default App;