// import React from "react";
// import showCase from "/public/SHOWCASE.png";
// import icon55 from "/public/icon55.svg";

// const Work = () => {
//   return (
//     <div>
//       <h1 className="flex items-center justify-center pb-10  mb-25 uppercase text-3xl"></h1>
//       <div className="grid grid-cols-3 gap-6 p-6">
//         {/* Box 1 */}
//         <div className="bg-[#1d1d1d] text-white rounded-2xl flex flex-col justify-end h-85 -mt-20 ">
//           <div className="-py-30">
//             <img
//               src={showCase}
//               alt=""
//               className="w-full h-64 md:h-80 lg:h-66 object-cover rounded-t-2xl"
//             />
//           </div>
//           <div className="flex justify-around mb-10">
//             <div>
//               <p className="text-[#5f5f5f] text-2xl">web design</p>
//               <p className="text-2xl">dynamic</p>
//             </div>
//             <div className="mt-5">
//               <img src={icon55} alt="" className="w-10 h-10" />
//             </div>
//           </div>
//         </div>

//         {/* Group: h1 + Box 2 + Box 3 */}
//         <div className="col-span-2 flex flex-col gap-4">
//           {/* Heading above both boxes */}
//           <h1 className="text-2xl font-bold text-center pb-10">All projects</h1>

//           {/* Inner grid for Box 2 + Box 3 */}
//           <div className="grid grid-cols-2 gap-6">
//             {/* Box 2 */}
//             <div className="bg-[#1d1d1d] text-white rounded-2xl flex flex-col items-center justify-center h-66">
//               <img src={showCase} alt="" />
//             </div>

//             {/* Box 3 */}
//             <div className="bg-[#1d1d1d] text-white rounded-2xl flex items-center justify-center h-66 ">
//               <img src={showCase} alt="" />
//             </div>
//           </div>
//         </div>

//         {/* Box 4 */}
//         <div className="bg-[#1d1d1d] text-white rounded-2xl flex items-center justify-center h-86 -mt-20">
//           <img src={showCase} alt="" />
//         </div>

//         {/* Box 5 */}
//         <div className="bg-[#1d1d1d] text-white rounded-2xl flex items-center justify-center h-66">
//           <img src={showCase} alt="" />
//         </div>

//         {/* Box 6 */}
//         <div className="bg-[#1d1d1d] text-white rounded-2xl flex items-center justify-center h-66">
//           <img src={showCase} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;
import React from "react";
import showCase from "/public/SHOWCASE.png";
import icon55 from "/public/icon55.svg";

const Work = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center pb-10 mb-25 uppercase text-3xl"></h1>
      <div className="grid grid-cols-3 gap-6 p-6">
        {/* Box 1 */}
        <div className="bg-[#1d1d1d] text-white rounded-2xl flex flex-col justify-end h-85 -mt-20">
          <div>
            <img
              src={showCase}
              alt=""
              className="w-full h-64 md:h-80 lg:h-66 object-cover rounded-t-2xl"
            />
          </div>
          <div className="flex justify-around mb-10 pt-4">
            <div>
              <p className="text-[#5f5f5f] text-2xl">web design</p>
              <p className="text-2xl">dynamic</p>
            </div>
            <div className="mt-5">
              <img src={icon55} alt="" className="w-10 h-10" />
            </div>
          </div>
        </div>

        {/* Group: h1 + Box 2 + Box 3 */}
        <div className="col-span-2 flex flex-col gap-4">
          {/* Heading above both boxes */}
          <h1 className="text-2xl font-bold text-center pb-10">All projects</h1>

          {/* Inner grid for Box 2 + Box 3 */}
          <div className="grid grid-cols-2 gap-6">
            {/* Box 2 */}
            <div className="bg-[#1d1d1d] text-white rounded-2xl flex flex-col justify-end h-66">
              <div>
                <img
                  src={showCase}
                  alt=""
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              </div>
              <div className="flex justify-around mb-4 pt-4">
                <div>
                  <p className="text-[#5f5f5f] text-2xl">web design</p>
                  <p className="text-2xl">dynamic</p>
                </div>
                <div className="mt-2">
                  <img src={icon55} alt="" className="w-10 h-10" />
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-[#1d1d1d] text-white rounded-2xl flex flex-col justify-end h-66">
              <div>
                <img
                  src={showCase}
                  alt=""
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              </div>
              <div className="flex justify-around mb-4 pt-4">
                <div>
                  <p className="text-[#5f5f5f] text-2xl">branding</p>
                  <p className="text-2xl">raven</p>
                </div>
                <div className="mt-2">
                  <img src={icon55} alt="" className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-[#1d1d1d] text-white rounded-2xl flex flex-col justify-end h-86 -mt-20">
          <div>
            <img
              src={showCase}
              alt=""
              className="w-full h-64 object-cover rounded-t-2xl"
            />
          </div>
          <div className="flex justify-around mb-4 pt-4">
            <div>
              <p className="text-[#5f5f5f] text-2xl">photography</p>
              <p className="text-2xl">diesel h1</p>
            </div>
            <div className="mt-2">
              <img src={icon55} alt="" className="w-10 h-10" />
            </div>
          </div>
        </div>

        {/* Box 5 */}
        <div className="bg-[#1d1d1d] text-white rounded-2xl flex flex-col justify-end h-66">
          <div>
            <img
              src={showCase}
              alt=""
              className="w-full h-48 object-cover rounded-t-2xl"
            />
          </div>
          <div className="flex justify-around mb-4 pt-4">
            <div>
              <p className="text-[#5f5f5f] text-2xl">mobile design</p>
              <p className="text-2xl">submarine</p>
            </div>
            <div className="mt-2">
              <img src={icon55} alt="" className="w-10 h-10" />
            </div>
          </div>
        </div>

        {/* Box 6 */}
        <div className="bg-[#1d1d1d] text-white rounded-2xl flex flex-col justify-end h-66">
          <div>
            <img
              src={showCase}
              alt=""
              className="w-full h-48 object-cover rounded-t-2xl"
            />
          </div>
          <div className="flex justify-around mb-4 pt-4">
            <div>
              <p className="text-[#5f5f5f] text-2xl">web design</p>
              <p className="text-2xl">hydra merc</p>
            </div>
            <div className="mt-2">
              <img src={icon55} alt="" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
