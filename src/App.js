import {Provider} from "react-redux"
import { store } from "./store/index";
import './App.css';
import MainPage from "./components/pages/mainPage";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <MainPage />
    </div>
    </Provider>
  );
}

export default App;
