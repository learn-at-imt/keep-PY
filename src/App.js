import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/posts" element={<Posts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



