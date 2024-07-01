import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hightlights from "./components/Hightlights";
const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
    </main>
  );
};

export default App;
