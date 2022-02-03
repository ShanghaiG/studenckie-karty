import "./App.scss";
import PlayerCards from "./components/PlayerCards/PlayerCards";
import {store} from "./features/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="layout">
        <Provider store={store}>
            <PlayerCards/>
        </Provider>
    </div>
  );
}

export default App;
