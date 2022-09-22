import ReactDOM from "react-dom/client";
import AppSection03 from "./section03/App";
import AppSection06 from "./section06/App";
import AppSection07 from "./section07/App";
import AppSection08 from "./section08/App";
import AppSection10 from "./section10/App";
import "./section10/index.css";
import { AuthContextProvider } from "./section10/store/auth-context";

/**
 * App :  section 03
 * App :  section 06
 * App :  section 07
 * App :  section 08
 * App :  section 06
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <AppSection03 /> */}
    {/* <AppSection06 /> */}
    {/* <AppSection07 /> */}
    {/* <AppSection08 /> */}
    <AuthContextProvider>
      <AppSection10 />
    </AuthContextProvider>
  </div>
);
