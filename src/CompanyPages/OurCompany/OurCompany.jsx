import React from "react";
import './OurCompany.css'

const OurCompany = () => {
  return (
    <>
      <div>
        <div className="cardinfra " >
          <div className="qkiflexkaamkare sm:m-16">
            <div className="cardinner ">
              <div className="imgg ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17124.219485667665!2d88.33768204388784!3d22.576551611280404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02777b6e77a7b1%3A0xc2b5321759b6d987!2sHMP%20House!5e0!3m2!1sen!2sin!4v1686565788904!5m2!1sen!2sin"
                  width={500}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className=""

                />
              </div>
              <div className="textinfraa">
                <h1 className="text-4xl">OFFICE LOCATIONS</h1>
                <p className="text-2xl">
                  Flat No. T-1,104,1st Floor,Tower-1 Plot No. GH o1/A,Sector
                  16C, Exotica Dreamville,Greater Noida, U.P.201203
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="cardinfra">
          <div className="qkiflexkaamkare sm:m-16 m-5">
            <div className="cardinner">
              <div className="img" style={{ order: 2 }}>
                <img
                  src="./industryimg/exfin presentation  final_page-0005.jpg"
                  alt
                />
              </div>
              <div className="textinfra">
                <h1 className="text-4xl">Our Branches</h1>
                <p className="text-left">
                  We also have our branch office in Ranchi, Aurangabad from
                  where we provide services to the clients
                  <br />
                  <br />
                </p>
                <h3 className="text-2xl font-bold">Aurangabad : </h3>
                <br />
                <p className="text-left translate-x-2 text-xl">
                Old G. T Road, Malti Complex Above Canara Bank, Aurangabad -
                824101. (Bihar)

                </p>
                <br />
                <br />
                <h3 className="text-2xl font-bold">Dehri On Shone Branch:</h3>
                <br />
                <p className="text-left translate-x-2 text-xl">
                Ground Floor, Hari Apartment, Near Hotel Urvashi, Gandhi Nagar,
                Rohtas - 821307. (Bihar)

                </p>
                <br />
                <br />
                <h3 className="text-2xl font-bold">Ranchi Branch:</h3>
                <br />
                <p className="text-left translate-x-2 text-xl">
                3rd floor, Apsara Hotel Circular Road, Lalpur Ranchi 834001
                (Jharkhand)
                  </p>
                <br />
                <br />
                <h3 className="text-2xl font-bold">Raniganj Branch:</h3>
                <br />
                <p className="text-left translate-x-2 text-xl">
                Ramalaya Bhawan, Inside Jayswal Cold Storage Near TDB College
                Main Gate Raniganj - 713347(WB)
                </p>
                <br />
                <br />
                <p />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default OurCompany;
