import { Header, WorkSpace } from "./components";
import './styles/main.scss'
import { SnackbarProvider } from "notistack";
import { store } from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <div className="App">
          <Header />
          <WorkSpace /> 
        </div>
      </Provider>
    </SnackbarProvider>
  );
}

export default App;