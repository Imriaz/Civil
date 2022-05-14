import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footers from "../Footers/Footers";
import Dummy_A_Stuff from "../../images/Administrative_Staff/Admin-stuff.jpg";

const AdministrativeStaffs = () => {
  useEffect(() => {
    document.title = "Administrative Staffs | Civil - BUBT";
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
                      src={Dummy_A_Stuff}
                      class="rounded-circle img-thumbnail"
                      alt="Faculty-image"
                    />
                  </div>
                  <div class="">
                    <h3>Babul Kalam</h3>
                    <p class="">
                      Administrative Staff <span>| </span>
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
                      src={Dummy_A_Stuff}
                      class="rounded-circle img-thumbnail"
                      alt="Faculty-image"
                    />
                  </div>
                  <div class="">
                    <h3>Karim</h3>
                    <p class="">
                      Administrative Staff <span>| </span>
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
                      src={Dummy_A_Stuff}
                      class="rounded-circle img-thumbnail"
                      alt="Faculty-image"
                    />
                  </div>
                  <div class="">
                    <h3>Rahim</h3>
                    <p class="">
                      Administrative Staff <span>| </span>
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

export default AdministrativeStaffs;
