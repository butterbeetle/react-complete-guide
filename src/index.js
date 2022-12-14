import ReactDOM from "react-dom/client";

//Section 03
// import AppSection03 from "./section03/App";

// //Section 06
// import AppSection06 from "./section06/App";

// //Section 07
// import AppSection07 from "./section07/App";

// //Section 08
// import AppSection08 from "./section08/App";

// //Section 10
// import { AuthContextProvider } from "./section10/store/auth-context";
// import AppSection10 from "./section10/App";
// import "./section10/index.css";

//Section 11 & 17
// import AppSection11 from "./section11/App";
// import "./section11/index.css";

//Section 12
// import AppSection12 from "./section12/App";
// import "./section12/index.css";

//Section 13
// import AppSection13 from "./section13/App";
// import "./section13/index.css";

//Section 14
// import AppSection14 from "./section14/App";
// import "./section14/index.css";

//Section 15_1
// import AppSection15One from "./section15_1/App";
// import "./section15_1/index.css";

//Section 15_1
// import AppSection15Two from "./section15_2/App";
// import "./section15_2/index.css";

//Section 16
// import AppSection16 from "./section16/App";
// import "./section16/index.css";

//Section 18
// import { Provider } from "react-redux";
// import store from "./section18/store";
// import AppSection18 from "./section18/App";
// import "./section18/index.css";

//Section 19
// import { Provider } from "react-redux";
// import store from "./section19/store";
// import AppSection19 from "./section19/App";
// import "./section19/index.css";

//Section 20 React version 5
// import { BrowserRouter } from "react-router-dom";
// import AppSection20 from "./section20/App";
// import "./section20/index.css";

//Section 20 React version 6
// import { BrowserRouter } from "react-router-dom";
// import AppSection20v6 from "./section20v6/App";
// import "./section20v6/index.css";

//Section 22
// import { BrowserRouter } from "react-router-dom";
// import { AuthContextProvider } from "./section22/store/auth-context";
// import AppSection22 from "./section22/App";
// import "./section22/index.css";

//Section 24
// import AppSection24 from "./section24/App";
// import "./section24/index.css";

//Section 25
// import { BrowserRouter } from "react-router-dom";
// import AppSection25 from "./section25/App";
// import "./section25/index.css";
// // import ProductsContext from "./section25/context/products-context";
// import configureProductsStore from "./section25/hooks-store/products-store";
// configureProductsStore();
// // import productReducer from "./section25/store/reducers/products";
// // import { Provider } from "react-redux";
// // import { combineReducers, createStore } from "@reduxjs/toolkit";
// // const rootReducer = combineReducers({
// //   shop: productReducer,
// // });
// // const store = createStore(rootReducer);

//Section 26
// import AppSection26 from "./section26/App";
// import "./section26/index.css";

//Section 28
// import AppSection28 from "./section28/App";
// import AuthContextProvider from "./section28/context/auth-context";
// import "./section28/index.css";

//Section 29
import AppSection29 from "./section29/App";
import "./section29/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <AppSection03 /> */}
    {/* <AppSection06 /> */}
    {/* <AppSection07 /> */}
    {/* <AppSection08 /> */}

    {/* <AuthContextProvider>
      <AppSection10 />
    </AuthContextProvider> */}

    {/* <AppSection11 /> */}
    {/* <AppSection12 /> */}
    {/* <AppSection13 /> */}
    {/* <AppSection14 /> */}
    {/* <AppSection15One /> */}
    {/* <AppSection15Two /> */}
    {/* <AppSection16 /> */}

    {/* <Provider store={store}>
      <AppSection18 />
    </Provider> */}

    {/* <Provider store={store}>
      <AppSection19 />
    </Provider> */}

    {/* <BrowserRouter>
      <AppSection20 />
    </BrowserRouter> */}

    {/* <BrowserRouter>
      <AppSection20v6 />
    </BrowserRouter> */}

    {/* <AuthContextProvider>
      <BrowserRouter>
        <AppSection22 />
      </BrowserRouter>
    </AuthContextProvider> */}

    {/* <AppSection24 /> */}

    {/* <ProductsContext>
      <BrowserRouter>
        <AppSection25 />
      </BrowserRouter>
    </ProductsContext> */}
    {/* <BrowserRouter>
      <AppSection25 />
    </BrowserRouter> */}
    {/* <AppSection26 /> */}
    {/* <AuthContextProvider>
      <AppSection28 />
    </AuthContextProvider> */}
    <AppSection29 />
  </div>
);
