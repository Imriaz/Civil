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
      <div class="mx-5">
        <div class="jumbotron">
          <h1>Our Lab</h1>
          <p>Welcome to Civil Department, BUBT</p>
        </div>

        <div class="row">
          <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            />
          </div>
          <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            />
          </div>
          <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            />
          </div>
          <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            />
          </div>
          <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            />
          </div>
          <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            />
          </div>
          <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            />
          </div>
          <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            />
          </div>
          <div class="col-sm-6 col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
              alt=""
              class="fluid img-thumbnail"
            />
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default OurLabs;
