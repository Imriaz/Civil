import React from "react";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Footers from "../Footers/Footers";
import Header from "../Header/Header";

const Vision = () => {
  useEffect(() => {
    document.title = "Our Labs";
  }, []);
  return (
    <div>
      <Header />

      <h1>Vision of the Department</h1>
      <p style={{ color: "black" }}>
        Create a competent Civil Engineering Program with academic excellence,
        innovation, and research for facing current and future challenges of
        humanity.
      </p>

      <Footers />
    </div>
  );
};

export default Vision;
