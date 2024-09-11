import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
function Result() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-1/2 h-1/2 flex-col justify-center ml-80">
        <h1 className="text-center text-2xl font-serif">RESULT</h1>
        <img
          src="https://pub.mdpi-res.com/materials/materials-16-02972/article_deploy/html/images/materials-16-02972-g001.png?1680939721"
          alt="graph"
        />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Result;
