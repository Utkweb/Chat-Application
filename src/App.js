import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Content />} path="/content" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
