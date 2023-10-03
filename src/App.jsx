import { BrowserRouter } from "react-router-dom";
import Category from "./components/Categories";
import Pages from "./pages/Pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
