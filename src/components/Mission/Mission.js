import React from "react";
import Header from "../Header/Header";
import { useEffect } from "react";
import Footers from "../Footers/Footers";

const Mission = () => {
  useEffect(() => {
    document.title = "Our Labs";
  }, []);
  return (
    <div>
      <Header />

      <h1>Mission of the Civil Details</h1>
      <p>
        Deliver students a high-quality education in civil engineering areas
        that constitutes enhancing broadest contexts of knowledge, skills, and
        attitudes to meet the measurement of program outcomes, enable them to
        conduct advanced research, and create innovative knowledge to build
        sustainable infrastructure and economic welfare of the nation and the
        globe. <br />
        The specific missions of the Department of Civil Engineering are: <br />{" "}
        • To impart advanced knowledge in contemporary science and technology to
        meet the challenges in the field of Civil Engineering and to contribute
        to national and global developments. <br /> • To prepare students to
        have the ability to innovate through technical education, professional
        training, and advanced research. <br /> • To inculcate students to think
        critically, react logically, communicate effectively, work safely, gain
        self-confidence fully and behave ethically and morally to become
        professionals in practice and successful in societal environment. <br />{" "}
        • To excel students in the process of life-long learning to make
        persistently progress in their careers.
      </p>

      <Footers />
    </div>
  );
};

export default Mission;
