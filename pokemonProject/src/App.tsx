import { BrowserRouter } from "react-router-dom";
import AuthChecker from "./Routes/AuthChecker";

function App() {
  return (
    <BrowserRouter>
      <AuthChecker />
    </BrowserRouter>
  );
}

export default App;
