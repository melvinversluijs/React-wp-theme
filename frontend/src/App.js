import React from "react";
import { BrowserRouter } from "react-router-dom";

// Bring in Redux.
import { Provider } from "react-redux";
import store from "./store";

// Bring in utils.
import setBaseUrl from "./utils/setBaseUrl";

// Bring in components.
import Header from "./components/layout/Header";

/**
 * App component.
 */
const App = () => {
  // Set the base api url.
  setBaseUrl();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div>Test</div>
      </BrowserRouter>
    </Provider>
  );
};

// Export component.
export default App;
