import "./App.css";
import Home from "./components/home/Home";
import { Shop } from "./features/shop/Shop";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Shop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/affiliate' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
