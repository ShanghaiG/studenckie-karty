import "./App.scss";
import io from "socket.io-client";
import PlayerCards from "./components/PlayerCards/PlayerCards";
import { store } from "./features/store";
import { Provider } from "react-redux";

const socket = io.connect("http://localhost:8001");

function App() {
  return (
    <div className="layout">
      <Provider store={store}>
        <PlayerCards socket={socket} />
      </Provider>
    </div>
  );
}

export default App;
