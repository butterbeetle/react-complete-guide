import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Produects from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Produects />
        </Route>
      </main>
    </div>
  );
}

export default App;
