import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import "./App.css";
import { useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  const [token, setToken] = useState<string | null>(null);

  return (
    <>
      <NavBar />
      <Outlet context={{ token, setToken }} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Footer />
    </>
  );
}

export default App;
