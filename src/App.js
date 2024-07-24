import "./App.css";
import Home from "./components/home/Home";
import { Shop } from "./features/shop/Shop";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import Page from './components/page/Page';

function App() {
  return (
    <div className="App">
      <Page
        pageTitle="Onioman: Home"
        pageDescription="Welcome to Onioman, your source for top affiliate marketing deals and insights. Discover expert reviews, strategies, and more!"
      />
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
