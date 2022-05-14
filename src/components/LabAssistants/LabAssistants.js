import React, { useEffect } from "react";
import Footers from "../Footers/Footers";
import Header from "../Header/Header";
import "./LabAssistants.css";
import Dummy_Lab_Assistant from "../../images/Lab_Assistant_image/dummy-Lab-Assistant.png";

const LabAssistants = () => {
  useEffect(() => {
    document.title = "Lab Assistants | Civil - BUBT";
  }, []);
  return (
    <div>
      <Header />
      <h1>Lab Assistants</h1>

      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="text-center card-box">
                <div class="member-card pt-2 pb-2">
                  <div class="thumb-lg member-thumb mx-auto">
                    <img
                      src={Dummy_Lab_Assistant}
                      class="rounded-circle img-thumbnail"
                      alt="Faculty-image"
                    />
                  </div>
                  <div class="">
                    <h3>Abul Kalam</h3>
                    <p class="">
                      Lab Assistant <span>| </span>
                      <span>Department of Civil Engineering</span>
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="text-center card-box">
                <div class="member-card pt-2 pb-2">
                  <div class="thumb-lg member-thumb mx-auto">
                    <img
                      src={Dummy_Lab_Assistant}
                      class="rounded-circle img-thumbnail"
                      alt="Faculty-image"
                    />
                  </div>
                  <div class="">
                    <h3>Karim</h3>
                    <p class="">
                      Lab Assistant <span>| </span>
                      <span>Department of Civil Engineering</span>
                    </p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="text-center card-box">
                <div class="member-card pt-2 pb-2">
                  <div class="thumb-lg member-thumb mx-auto">
                    <img
                      src={Dummy_Lab_Assistant}
                      class="rounded-circle img-thumbnail"
                      alt="Faculty-image"
                    />
                  </div>
                  <div class="">
                    <h3>Rahim</h3>
                    <p class="">
                      Lab Assistant <span>| </span>
                      <span>Department of Civil Engineering</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footers />
    </div>
  );
};

export default LabAssistants;
