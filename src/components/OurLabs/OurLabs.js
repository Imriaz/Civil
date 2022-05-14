import React from "react";
import { useEffect } from "react";
import Header from "./../Header/Header";
import Footers from "../Footers/Footers";

const OurLabs = () => {
  useEffect(() => {
    document.title = "Our Labs";
  }, []);

  return (
    <div>
      <Header />

      <h1>Civil Labs Page</h1>

      <Footers />
    </div>
  );
};

export default OurLabs;
