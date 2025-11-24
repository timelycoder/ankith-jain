import React from "react";
import { Link } from "react-router-dom";
import heroSrc from "/public/dp.png";
import showCase from "/public/SHOWCASE.png";
import icon55 from "/public/icon55.svg";

export default function Main() {
  return (
    <div>
      <div class="w-full min-h-screen p-4 space-y-6 bg-[#0f0f0f] text-[#ffffff]">
        {/* <!-- ---------------- TOP SECTION ---------------- --> */}

        <div class="grid grid-cols-2 gap-4">
          {/* <!-- LEFT COLUMN (equal size) --> */}
          <Link to="/about" className="block">
            <div class="bg-[#1d1d1d] text-[#ffffff]p-4 shadow rounded-2xl ">
              <div className="grid grid-cols-2 items-center gap-6 p-8 shadow-sm bg-[#1d1d1d]  rounded-xl">
                {/* Left Column: Image */}
                <div className="w-full h-44 object-cover rounded-xl">
                  <img
                    src={heroSrc}
                    alt="Movie"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Right Column: Text + icon */}
                <div className="flex flex-col justify-center gap-4 py-15">
                  <h2 className="text-2xl font-bold ">A WEB DEVELOPER</h2>
                  <h2 className="text-xl font-semibold">David Henderson</h2>
                  <p>I am a Web Designer based in San Francisco</p>

                  <div className="card-actions justify-end mt-2">
                    {/* icon or button */}
                    <img src={icon55} alt="" className="w-10 h-10" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* <!-- RIGHT COLUMN (equal size but inside 2 rows) --> */}
          <div class="grid grid-rows-[1fr_3fr] gap-4 h-full">
            {/* <!-- RIGHT - TOP ROW --> */}
            <div class="bg-[#1d1d1d] text-[#ffffff]p-4  shadow rounded-4xl  flex items-center justify-center h-full">
              Right Top
            </div>

            {/* RIGHT - BOTTOM ROW divided into 2 columns */}

            <div className="grid grid-cols-2 gap-4">
              {/* Right Bottom Left clickable */}
              <Link
                to="/aboutme"
                className="block h-full" // ← make Link take full height
              >
                <div className="bg-[#1d1d1d] text-[#ffffff]p-4  shadow hover:shadow-lg transition h-full rounded-2xl">
                  Right Bottom Left
                </div>
              </Link>

              {/* Right Bottom Right clickable */}
              <Link to="/work" className="block h-full">
                <div className="bg-[#1d1d1d] text-[#ffffff] p-4  shadow hover:shadow-lg transition h-full rounded-2xl">
                  <img
                    className="w-full h-44 object-cover rounded-xl"
                    src={showCase}
                    alt="Movie"
                  />
                  <h3 className="uppercase">show project</h3>
                  <div className="flex justify-start gap-36">
                    <div>
                      <h6>projects</h6>
                    </div>
                    <div>
                      <img src={icon55} alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION  */}
        {/* <!-- 3 columns → middle column = half width, others equal --> */}
        <div class="grid grid-cols-12 gap-4">
          {/* <!-- Left column (3/12) --> */}
          <div class="col-span-3 bg-[#1d1d1d] text-[#ffffff] p-4  shadow rounded-2xl">
            Middle Left
          </div>

          {/* <!-- Middle column (6/12 = half) --> */}
          <div class="col-span-6 bg-[#1d1d1d] text-[#ffffff] p-4  shadow rounded-2xl">
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end ">
                  <button className="btn btn-primary">Middle</button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right column (3/12) --> */}
          <Link to="/about" className="col-span-3 block h-full">
            <div className="bg-[#1d1d1d] text-[#ffffff]p-4  shadow h-full rounded-2xl">
              Middle Right
            </div>
          </Link>
        </div>

        {/* BOTTOM SECTION */}
        {/* <!-- 2 equal columns --> */}
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-[#1d1d1d] text-[#ffffff] p-4  shadow rounded-2xl">
            <h1>ok</h1>
          </div>

          <div className="p-4 rounded-2xl shadow bg-[#1d1d1d] text-[#ffffff]">
            <Link to="/contact" className="block">
              <div className="card-body">
                <h2 className="card-title text-white">Lets work together!</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
