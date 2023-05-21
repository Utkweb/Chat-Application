import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/main/Login";
import Register from "./components/main/Register";
import Main from "./components/main";
// import Home from "./components/main/Home";
import Content from "./components/main/Content";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/">
            <Route element={<Login />} path="login" />
            <Route element={<Register />} path="register" />
            <Route element={<Content />} path="content" />
            {/* <Route element={<UserManager />} path="usermanager" />
            <Route element={<ContactUs />} path="contact" /> */}

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
