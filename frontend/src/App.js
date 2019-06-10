import React from "react";
import { BrowserRouter } from "react-router-dom";

// Bring in Redux.
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>Test</div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
