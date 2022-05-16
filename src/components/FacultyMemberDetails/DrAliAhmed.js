import React, { useEffect } from "react";
import Footers from "../Footers/Footers";
import Header from "../Header/Header";
import "./FacultyMemberDetails.css";
import DrAliAhmed_Photo from "../../images/Faculty_image/ChairmanSir.jpg";

const DrAliAhmed = () => {
  useEffect(() => {
    document.title = "Dr. Ali Ahmed | Civil - BUBT";
  }, []);
  return (
    <>
      <Header />

      <div class="page-content page-container" id="page-content">
        <div class="padding">
          <div class="row d-flex justify-content-center">
            <div class="col-xl-12 col-md-12">
              <div class="card user-card-full">
                <div class="row m-l-0 m-r-0">
                  <div class="col-sm-4 bg-c-lite-green user-profile">
                    <div class="card-block text-center text-white">
                      <div class="m-b-25">
                        <img
                          src={DrAliAhmed_Photo}
                          class="img-radius"
                          alt="User-Profile-Image"
                        />
                      </div>
                      <h3 class="f-w-600">Prof. Dr. Ali Ahmed</h3>
                      <h5 class="">Faculty Code: DAA</h5>
                      <p class="">
                        Chairman <span>| </span>
                        <span>Department of Civil Engineering</span>
                      </p>
                      <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="card-block">
                      <h3 class="m-b-20 p-b-5 b-b-default f-w-600">
                        Faculty Information
                      </h3>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10">Email</p>
                          <h6 class="text-muted f-w-400">
                            dr.aliahmed@bubt.edu.bd
                          </h6>
                        </div>
                        <div class="col-sm-3">
                          <p class="m-b-10">Phone</p>
                          <h6 class="text-muted f-w-400">+88-01553308982</h6>
                        </div>
                        <div class="col-sm-3">
                          <p class="">Room No</p>
                          <h6 class="text-muted f-w-400">205/B1</h6>
                        </div>
                      </div>
                      <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        Teaching Experience
                      </h6>
                      <div class="row">
                        <div class="">
                          <p class="m-b-10 f-w-600">Recent</p>
                          <h6 class="text-muted f-w-400">
                            Chairman, Department of Civil Engineering,
                            Bangladesh University of Business and Technology
                          </h6>
                        </div>
                        {/* <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Most Viewed</p>
                          <h6 class="text-muted f-w-400">Dinoter husainm</h6>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default DrAliAhmed;
