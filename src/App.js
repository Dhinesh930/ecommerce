import React from "react";
import Index from "./router/Index";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ToastContainer />
        <Index />
      </div>
    </Provider>
  );
}

export default App;
