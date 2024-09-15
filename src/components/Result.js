import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
function Result() {
  return (
    <div className="flex flex-col min-h-screen mt-3">
      <Navbar />
      <main className="flex-grow flex flex-col items-center p-8 bg-gray-100">
        <div className="w-2/4 flex flex-col space-y-8">
          <h1 className="text-3xl font-serif text-center text-gray-800 mb-8">RESULTS</h1>
          
          {/* Value Display Section */}
          <div className="w-full flex flex-col space-y-4 mb-8">
            <div className="flex justify-between bg-white rounded-lg shadow-md p-4">
              <div className="w-1/4 bg-gray-50 p-4 rounded-lg shadow-inner">
                <h3 className="text-lg font-medium text-gray-600">UTS (Ultimate Tensile Strength):</h3>
                <p className="text-xl font-semibold text-gray-800">450 MPa</p>
              </div>
              <div className="w-1/4 bg-gray-50 p-4 rounded-lg shadow-inner">
                <h3 className="text-lg font-medium text-gray-600">Elongation:</h3>
                <p className="text-xl font-semibold text-gray-800">12%</p>
              </div>
              <div className="w-1/4 bg-gray-50 p-4 rounded-lg shadow-inner">
                <h3 className="text-lg font-medium text-gray-600">Conductivity:</h3>
                <p className="text-xl font-semibold text-gray-800">37 MS/m</p>
              </div>
            </div>
          </div>

          {/* Graph Display Section */}
          <div className="flex flex-col space-y-8">
            {/* UTS Graph */}
            <div className="w-full bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">UTS (Ultimate Tensile Strength)</h2>
              <img
                src="https://www.researchgate.net/profile/Hariharan-Krishnaswamy-2/publication/331672557/figure/fig6/AS:735498037366789@1552367805810/Variation-of-yield-strength-YS-Ultimate-strength-UTS-and-uniform-elongation-UE.jpg"
                alt="UTS Graph"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Elongation Graph */}
            <div className="w-full bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Elongation</h2>
              <img
                src="https://www.researchgate.net/publication/339595053/figure/fig3/AS:863963877240833@1582996448112/The-stress-elongation-of-the-initial-copper-and-aluminum-alloy-and-the-Cu-AA6061.png"
                alt="Elongation Graph"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Conductivity Graph */}
            <div className="w-full bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Conductivity</h2>
              <img
                src="https://pub.mdpi-res.com/materials/materials-16-02972/article_deploy/html/images/materials-16-02972-g001.png?1680939721"
                alt="Conductivity Graph"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
      <div className="text-red-700 font-serif font-bold text-center mb-0 mt-2">Result has been successfully recorder for your entered values</div>
      <Footer />
    </div>
  );
}

export default Result;
