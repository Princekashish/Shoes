import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-[#E7E7E3] min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App;
