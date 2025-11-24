import React from "react";
import { Link } from "react-router-dom";
import heroSrc from "/public/dp.png";
import showCase from "/public/SHOWCASE.png";

export default function Main() {
  return (
    <div>
      <div class="w-full min-h-screen p-4 space-y-6 bg-[#0f0f0f] text-[#ffffff]">
        {/* <!-- ---------------- TOP SECTION ---------------- --> */}

        <div class="grid grid-cols-2 gap-4">
          {/* <!-- LEFT COLUMN (equal size) --> */}
          <Link to="/about" className="block">
            <div class="bg-[#1d1d1d] text-[#ffffff]p-4 shadow rounded-2xl ">
              <div className="  shadow-sm flex justify-between items-center">
                <div className="w-full h-44 object-cover rounded-xl">
                  <img src={heroSrc} alt="Movie" />
                </div>
                <div>
                  <h2>A WEB DEVELOPER</h2>
                  <h2>David Henderson</h2>
                  <p>I am a Web Designer based in san francisco</p>

                  <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Watch ok </button> */}
                    <img className="w-1/2" src={showCase} alt="Movie" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* <!-- RIGHT COLUMN (equal size but inside 2 rows) --> */}
          <div class="grid grid-rows-[1fr_3fr] gap-4 h-full">
            {/* <!-- RIGHT - TOP ROW --> */}
            <div class="bg-[#1d1d1d] text-[#ffffff]p-4  shadow rounded-4xl">
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
                  <h3>show project</h3>
                  <div className="flex justify-start gap-36">
                    <div>
                      <h6>projects</h6>
                    </div>
                    <div>
                      <h4>btn</h4>
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
