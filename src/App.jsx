import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar/Navbar";
import CarList from "./components/CarList/CarList";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <CarList />
    </div>
  );
};

export default App;
