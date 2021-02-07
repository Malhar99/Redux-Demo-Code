import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Bugs from "./components/bugs";
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Bugs/>
    </Provider>
  );
}

export default App;
