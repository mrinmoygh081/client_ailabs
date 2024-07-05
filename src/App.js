import React, { useState } from "react";
import "./App.css";
import Outputs from "./components/Outputs";
import Outputs1 from "./components/Outputs1";
import Outputs2 from "./components/Outputs2";
import Outputs3 from "./components/Outputs3";
import Outputs4 from "./components/Outputs4";
import Outputs5 from "./components/Outputs5";
import Outputs6 from "./components/Outputs6";

function App() {
  const [isUploaded, setIsUploaded] = useState(false);

  const submit = () => {
    setIsUploaded(true);
  };
  const [isUploaded1, setIsUploaded1] = useState(false);

  const submit1 = () => {
    setIsUploaded1(true);
  };
  const [isUploaded2, setIsUploaded2] = useState(false);

  const submit2 = () => {
    setIsUploaded2(true);
  };
  const [isUploaded3, setIsUploaded3] = useState(false);

  const submit3 = () => {
    setIsUploaded3(true);
  };
  const [isUploaded4, setIsUploaded4] = useState(false);

  const submit4 = () => {
    setIsUploaded4(true);
  };
  const [isUploaded5, setIsUploaded5] = useState(false);

  const submit5 = () => {
    setIsUploaded5(true);
  };
  const [isUploaded6, setIsUploaded6] = useState(false);

  const submit6 = () => {
    setIsUploaded6(true);
  };

  return (
    <>
      <div className="header">
        {/* <div className="logo">
          <img
            src={require("./assets/logo1.jpg")}
            alt="Datacore Logo"
            className="logoImg"
          />
          <h2>DCG Data-Core Systems (India) Pvt. Ltd.</h2>
        </div> */}

        <h3>Bag Count</h3>
        <Outputs isUploaded={isUploaded} />

        <div className="col-12 mt-2">
          <button className="btn_style" name="submit" onClick={() => submit()}>
            <span>Process Now</span>
          </button>
        </div>
        <h3>Motion Detactions</h3>

        <Outputs1 isUploaded={isUploaded1} />

        <div className="col-12 mt-2">
          <button className="btn_style" name="submit" onClick={() => submit1()}>
            <span>Process Now</span>
          </button>
        </div>
        <h3>Edge Detactions</h3>
        <Outputs2 isUploaded={isUploaded2} />

        <div className="col-12 mt-2">
          <button className="btn_style" name="submit" onClick={() => submit2()}>
            <span>Process Now</span>
          </button>
        </div>

        <h3>Fire Detactions</h3>
        <Outputs3 isUploaded={isUploaded3} />

        <div className="col-12 mt-2">
          <button className="btn_style" name="submit" onClick={() => submit3()}>
            <span>Process Now</span>
          </button>
        </div>
        <h3>SVD</h3>
        <Outputs4 isUploaded={isUploaded4} />

        <div className="col-12 mt-2">
          <button className="btn_style" name="submit" onClick={() => submit4()}>
            <span>Process Now</span>
          </button>
        </div>
        <h3>Helmat Detaction</h3>
        <Outputs5 isUploaded={isUploaded5} />

        <div className="col-12 mt-2">
          <button className="btn_style" name="submit" onClick={() => submit5()}>
            <span>Process Now</span>
          </button>
        </div>
        <h3>Safety Violation</h3>
        <Outputs6 isUploaded={isUploaded6} />

        <div className="col-12 mt-2">
          <button className="btn_style" name="submit" onClick={() => submit6()}>
            <span>Process Now</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import Outputs from "./components/Outputs";

// function App() {
//   const [isUploaded, setIsUploaded] = useState(false)

//   const submit = () => {
//     setIsUploaded(true)
//   }

//   return (
//     <>
//       <div className="header">
//         <div className="logo">
//           <img src={require('./assets/logo1.jpg')} alt="Datacore Logo" className="logoImg" />
//           <h2>DCG Data-Core Systems (India) Pvt. Ltd.</h2>
//         </div>

//         <h1>Video Analytics in Manufacturing</h1>

//         <Outputs isUploaded={isUploaded} />

//         <div className="col-12 mt-2">
//           <button
//             className="btn_style"
//             name="submit"
//             onClick={() => submit()}
//           >
//             <span>Process Now</span>
//           </button>
//         </div>
//       </div>

//     </>
//   );
// }

// export default App;
