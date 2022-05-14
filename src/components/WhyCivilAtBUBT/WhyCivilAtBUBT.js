import React from "react";
import { useEffect } from "react";
import Footers from "../Footers/Footers";
import Header from "../Header/Header";

const WhyCivilAtBUBT = () => {
  useEffect(() => {
    document.title = "Why Civil At BUBT";
  }, []);
  return (
    <div>
      <Header />
      <p style={{ color: "black" }}>
        Bangladesh University of Business and Technology (BUBT), one of the
        top-ranking universities in Bangladesh, was established in 2003 under
        the private university act, 1992 with the approval of the Ministry of
        Education and the University Grants Commission (UGC) of Bangladesh.{" "}
      </p>

      <p style={{ color: "black" }}>
        BUBT runs magnificently sixteen undergraduate and graduate programs and
        most recently, the Bachelor of Science in Civil Engineering (B.Sc. in
        CE) Program under the Department of Civil Engineering was hosted to
        strengthen the Faculty of Engineering and Applied Sciences. Accordingly,
        the Department offers the degree of B.Sc. in Civil Engineering in the
        five major branches of Structural Engineering, Geotechnical Engineering,
        Transportation Engineering, Environmental Engineering, and Water
        Resources Engineering. To achieve the program objectives, the department
        introduced an international standard curriculum that includes basic
        science courses, humanities, and core engineering courses in the field
        of civil engineering to produce competent engineers. The principal goals
        of the Department of Civil Engineering are to disseminate knowledge,
        develop professional skills and innovate through training and research
        in the interdisciplinary areas of the program that meets the challenges
        of the 21st century in the issues of economic and social development by
        building sustainable infrastructure and clean environment within our
        country and the globe.
      </p>
      <Footers />
    </div>
  );
};

export default WhyCivilAtBUBT;
