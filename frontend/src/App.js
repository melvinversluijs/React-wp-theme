import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Bring in Redux.
import { Provider } from "react-redux";
import store from "./store";

// Bring in utils.
import setBaseUrl from "./utils/setBaseUrl";

// Bring in components.
import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import Footer from "./components/layout/Footer";

// Bring in styling.
import "./scss/App.scss";

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
        <main className="content">
          <Route path="/" component={Home} />
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

// Export component.
export default App;
