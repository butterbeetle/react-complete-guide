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

//Section 20
import { BrowserRouter } from "react-router-dom";
import AppSection20 from "./section20/App";
import "./section20/index.css";

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
    <BrowserRouter>
      <AppSection20 />
    </BrowserRouter>
  </div>
);
