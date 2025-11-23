import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

// import Main from "./components/Main";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-26 py-10">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default App;
