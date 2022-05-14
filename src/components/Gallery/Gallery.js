import React, { useEffect } from "react";
import Footers from "../Footers/Footers";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery | Civil - BUBT";
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <h1>This is Gallery Section</h1>
      <Footers />
    </div>
  );
};

export default Gallery;
