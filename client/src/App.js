import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SinglePost from "./pages/singlePost/SinglePost";
import Write from "./pages/write/Write";
import UserSettings from "./pages/userSettings/UserSettings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  const userLoggedIn = true;

  return (
    <Router>
      <TopBar user={userLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route
          path="/register"
          element={userLoggedIn ? <Home /> : <Register />}
        />
        <Route path="/login" element={userLoggedIn ? <Home /> : <Login />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/write" element={userLoggedIn ? <Write /> : <Login />} />
        <Route
          path="/settings"
          element={userLoggedIn ? <UserSettings /> : <Login />}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
