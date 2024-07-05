import React from "react";
import vid from "../assets/Safety Violations.mp4";
import resVideo from "../assets/result.mp4";

const Outputs = ({ isUploaded }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-md-6 col-12">
            <div className="card">
              <h2>Source Video</h2>
              <video src={vid} controls />
            </div>
          </div> */}

          <div className="col-md-6 col-12">
            <div className="card">
              <h2>Findings</h2>
              {isUploaded ? (
                <video src={vid} controls />
              ) : (
                <p>Click on Process Now Button</p>
              )}
              {/* <video src={video} controls /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Outputs;