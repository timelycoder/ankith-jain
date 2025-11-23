import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <div class="w-full min-h-screen p-4 space-y-6 bg-gray-100">
        {/* <!-- ---------------- TOP SECTION ---------------- --> */}

        <div class="grid grid-cols-2 gap-4">
          {/* <!-- LEFT COLUMN (equal size) --> */}
          <Link to="/about" className="block">
            <div class="bg-white p-4 rounded shadow">
              <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch ok </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* <!-- RIGHT COLUMN (equal size but inside 2 rows) --> */}
          <div class="grid grid-rows-2 gap-4">
            {/* <!-- RIGHT - TOP ROW --> */}
            <div class="bg-white p-4 rounded shadow">Right Top</div>

            {/* RIGHT - BOTTOM ROW divided into 2 columns */}

            <div className="grid grid-cols-2 gap-4">
              {/* Right Bottom Left clickable */}
              <Link
                to="/aboutme"
                className="block h-full" // ← make Link take full height
              >
                <div className="bg-white p-4 rounded shadow hover:shadow-lg transition h-full">
                  Right Bottom Left
                </div>
              </Link>

              {/* Right Bottom Right clickable */}
              <Link to="/work" className="block h-full">
                <div className="bg-white p-4 rounded shadow hover:shadow-lg transition h-full">
                  Right Bottom Right
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION  */}
        {/* <!-- 3 columns → middle column = half width, others equal --> */}
        <div class="grid grid-cols-12 gap-4">
          {/* <!-- Left column (3/12) --> */}
          <div class="col-span-3 bg-white p-4 rounded shadow">Middle Left</div>

          {/* <!-- Middle column (6/12 = half) --> */}
          <div class="col-span-6 bg-white p-4 rounded shadow">
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Middle</button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right column (3/12) --> */}
          <Link to="/about" className="col-span-3 block h-full">
            <div className="bg-white p-4 rounded shadow h-full">
              Middle Right
            </div>
          </Link>
        </div>

        {/* BOTTOM SECTION */}
        {/* <!-- 2 equal columns --> */}
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded shadow">
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Bottom left</button>
                </div>
              </div>
            </div>
          </div>
          <Link to="/contact" className="block">
            <div class="bg-white p-4 rounded shadow">
              <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>this is bottom right</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy right</button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      ;
    </div>
  );
}
