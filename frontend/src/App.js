import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Bring in Redux.
import { Provider } from "react-redux";
import store from "./store";

// Bring in utils.
import setBaseUrl from "./utils/setBaseUrl";

// Bring in actions.
import { getHomePage } from "./actions/pages";

// Bring in components.
import Loader from "./components/layout/Loader";
import ErrorList from "./components/layout/ErrorList";
import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import Footer from "./components/layout/Footer";
import PostsOverview from "./components/posts/PostsOverview";
import Post from "./components/post/Post";
import Page from "./components/page/Page";

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
        <Loader />
        <Header />
        <main className="content">
          <ErrorList />
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={PostsOverview} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/page/:id" component={Page} />
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

// Export component.
export default App;
