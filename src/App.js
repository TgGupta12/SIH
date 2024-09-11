import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Result from "./components/Result";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/result" element={<Result/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
