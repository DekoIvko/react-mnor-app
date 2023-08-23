import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";

function App() {
  console.log(process.env);
  if (process.env.NODE_ENV === "development") {
    // console.log = function () {};
  }
  return (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <main>
            <Main />
          </main>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}

export default App;
