import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import ReactDOM from "react-dom";
import App from "./App";
import Theme from "./components/Theme/Theme";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] =
  "Client-ID s4vKfYaVnOdjrsuCUuI721AwVG99BzmbhKbxjZBq3MU ";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Theme>
        <App />
      </Theme>
    </Router>
  </Provider>,
  document.getElementById("root")
);
