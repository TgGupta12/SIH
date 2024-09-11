import React from "react";
import Marquee from "react-fast-marquee";
function Navbar() {
  return (
    <div>
      <div className="w-full bg-slate-50 flex h-8 items-center">
        <div className="text-l ml-5 bg-gray-300 w-16 text-center h-9 flex items-center">
          Updates
        </div>
        <div className="bg-slate-50 w-1/3 h-7">
          <Marquee>KYC updation of physical folios 25/03/2024 | MOU scheme for sale of Aluminium Metal-2024-25 | </Marquee>
        </div>

        <div className="w-5 h-4 mx-2">
          <img
            src="https://www.pngarts.com/files/2/Pause-Transparent.png"
            alt="pause"
          />
        </div>
        <div className="w-5 h-4 ml-2 mr-14">
          <img
            src="http://freevector.co/wp-content/uploads/2014/06/73596-pause-round-button.png"
            alt="start"
          />
        </div>
        <div className="mx-3">
          <h2>Skip to main content</h2>
        </div>
        <div>
          <h2>Screen Reader Access</h2>
        </div>
        <div className="text-sm mx-2 ml-5">
          <h2>A-</h2>
        </div>
        <div className="mx-2">
          <h2>A</h2>
        </div>
        <div className="text-lg mx-2">
          <h2>A+</h2>
        </div>
        <div className="bg-white w-6 border-solid border-2 border-black text-center h-6 ml-3">
          <h2>A</h2>
        </div>
        <div className="bg-black text-white w-6 text-center mr-28 h-6">
          <h2>A</h2>
        </div>
        <div className="w-5 h-4 mx-2">
          <img
            src="http://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
            alt="IND"
          />
        </div>

        <div className="mr-8">
          <p>हिंदी </p>
        </div>
        <div className="w-5 h-4 mx-2 bg-gray-200">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.uXrlPvJjpFf3xkdpLFi_VQHaGy&pid=Api&P=0&h=180"
            alt="search"
          />
        </div>
      </div>
      <div className="flex w-full gap-8">
        <div className="ml-5 py-4 flex-col">
          <img
            src="https://d2ah634u9nypif.cloudfront.net/wp-content/themes/nalco/images/nalco-logo.png"
            alt="NALCO logo"
          />
          <p>A Navratna CPSE | A Govt. of India Enterprise</p>
        </div>
        <div className="flex gap-3 items-center ml-80">
          <img src="http://pluspng.com/img-png/play-store-logo-png-google-play-store-logo-png-transparent-amp-svg-vector-pluspng-2400x2746.png" alt="play" className="w-5 h-6 ml-80"  />
          <img src="https://tse1.mm.bing.net/th?id=OIP.pW0TOZyl_OZMIuo5HjUsyQHaIf&pid=Api&P=0&h=180" alt="apple" className="w-5 h-6" />
          <img src="https://www.pngmart.com/files/13/Instagram-Logo-PNG-Image-1.png" alt="inst" className="w-5 h-6" />
          <img src="http://www.freepnglogos.com/uploads/official-linkedin-logo----17.png" alt="in" className="w-6 h-4" />
          <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-photo-0.png" alt="yt" className="w-10 h-9" />
          <img src="https://tse4.mm.bing.net/th?id=OIP.QHODby_bS81-x2of8vCIhgHaHa&pid=Api&P=0&h=180" alt="fb" className="w-7 h-6" />
        </div>
        <div className="flex items-center">
            <img src="https://d2ah634u9nypif.cloudfront.net/wp-content/themes/nalco/images/bbbp.png" alt="logo2" className="ml-7" />
        </div>
        <div className="flex items-center">
            <div className="flex-col ">
                <div className="w-8 h-1 bg-red-950 my-2"></div>
                <div  className="w-8 h-1 bg-red-950 my-2"></div>
                <div className="w-8 h-1 bg-red-950 my-2"></div>
                <h2 className="text-red-950">Menu</h2>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
