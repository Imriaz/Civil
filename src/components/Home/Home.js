import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import BubtHeader from "../BubtHeader/BubtHeader";
import Footers from "../Footers/Footers";

const Home = () => {
  useEffect(() => {
    document.title = "Department of Civil Engineering - BUBT";
  }, []);

  return (
    <div>
      {/* <BubtHeader /> */}
      {/* <Navbar /> */}
      <Header />
      <Banner />
      <Footers />
      
    </div>
  );
};

export default Home;
