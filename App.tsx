import { Provider } from "react-redux";
// import Navigation from "./src/navigation/Navigation";
import Navigation from "./src/navigation/Navigation";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";

const App = () => {
  return (
    <GestureHandlerRootView>
      <StatusBar
        backgroundColor="transparent"
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  )
}
export default App;