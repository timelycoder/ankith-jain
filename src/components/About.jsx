import React from "react";

export default function About() {
  return (
    <div>
      <div class="w-full min-h-screen p-4 space-y-6 bg-gray-100">
        {/* <!-- ---------------- TOP SECTION ---------------- --> */}

        <div class="grid grid-cols-2 gap-4 ">
          {/* <!-- LEFT COLUMN (equal size) --> */}
          <div class="bg-white p-4 rounded shadow rounded-2xl">
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
                  <button className="btn btn-primary">About</button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- RIGHT COLUMN (equal size but inside 2 rows) --> */}
          <div class="grid grid-rows-[1fr_3fr] gap-4 h-full">
            {/* <!-- RIGHT - TOP ROW --> */}
            <div class="bg-white p-2 rounded shadow">Right Top</div>

            {/* RIGHT - BOTTOM ROW divided into 2 columns */}

            <div class="bg-white p-4 rounded shadow rounded-2xl">
              Right Bottom Right
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION  */}
        {/* <!-- 2 equal columns --> */}
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded shadow rounded-2xl">
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white p-4 rounded shadow rounded-2xl">
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy right</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}

        {/* ///////////////// */}
        {/* <!-- 3 columns → middle column = half width, others equal --> */}
        <div class="grid grid-cols-12 gap-4">
          {/* <!-- Left column (3/12) --> */}
          <div class="col-span-3 bg-white p-4 rounded shadow rounded-2xl">
            Middle Left
          </div>

          {/* <!-- Middle column (6/12 = half) --> */}
          <div class="col-span-6 bg-white p-4 rounded shadow rounded-2xl">
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
          <div class="col-span-3 bg-white p-4 rounded shadow rounded-2xl">
            Middle Right
          </div>
        </div>
      </div>
    </div>
  );
}
