import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SinglePost from "./pages/singlePost/SinglePost";
import Write from "./pages/write/Write";
import UserSettings from "./pages/userSettings/UserSettings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
const {user} = useContext(Context);

  return (
    <Router>
      <TopBar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route
          path="/settings"
          element={user ? <UserSettings /> : <Login />}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
