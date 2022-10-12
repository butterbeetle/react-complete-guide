import { Route } from "react-router-dom";
import Produects from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Produects />
      </Route>
    </div>
  );
}

export default App;
