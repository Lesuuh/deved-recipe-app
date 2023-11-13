import { Categories } from "./components/Categories";
import { Pages } from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
