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
// import AppSection10 from "./section10/App";
// import { AuthContextProvider } from "./section10/store/auth-context";
// import "./section10/index.css";

//Section 11
// import AppSection11 from "./section11/App";
// import "./section11/index.css";

//Section 12
import AppSection12 from "./section12/App";
import "./section12/index.css";

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
    <AppSection12 />
  </div>
);
