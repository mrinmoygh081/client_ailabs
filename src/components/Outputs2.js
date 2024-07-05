import React from "react";
import vid from "../assets/Input Video - Edge Detection.mp4";
import vid2 from "../assets/Input Video - Edge Detection.mp4";
import resVideo from "../assets/Output Video - Edge Detection.mp4";

const Outputs = ({ isUploaded }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="card">
              <h2>Source Video1</h2>
              <video src={vid} controls />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card">
              <h2>Source Video2</h2>
              <video src={vid2} controls />
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="card">
              <h2>Findings</h2>
              {isUploaded ? (
                <video src={resVideo} controls />
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
