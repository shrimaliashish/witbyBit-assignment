import { Routes, Route, useRoutes, BrowserRouter } from "react-router-dom";
import Students from "./components/Students";
import Users from "./components/Users";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/enalo" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
