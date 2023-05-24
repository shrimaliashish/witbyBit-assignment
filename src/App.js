import { Routes, Route, useRoutes, BrowserRouter } from "react-router-dom";
import Students from "./components/Students";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Students />} />
      </Routes>
    </div>
  );
}

export default App;
