import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavLink
            className="nav-link"
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link"
            to="/about"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            About
          </NavLink>
          <NavLink
            className="nav-link"
            to="/product"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Product
          </NavLink>
        </header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
