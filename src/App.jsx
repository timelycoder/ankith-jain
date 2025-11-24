import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

// import Main from "./components/Main";

function App() {
  return (
    <div className="px-26 py-5">
      <Navbar />
      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
