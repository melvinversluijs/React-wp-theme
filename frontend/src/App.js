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
import PostsOverview from "./components/PostsOverview/PostsOverview";

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
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={PostsOverview} />
          <Route exact path="/blog" component={PostsOverview} />
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

// Export component.
export default App;
