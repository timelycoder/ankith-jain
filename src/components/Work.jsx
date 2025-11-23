// // import React from "react";

// // export default function Work() {
// //   return (
// //     <div>
// //       <div className="space-y-6">
// //         {/* ---------------- SECTION 1 ---------------- */}
// //         <div className="grid grid-cols-[1fr_2fr] gap-4">
// //           {/* Left column 1/3 */}
// //           <div className="bg-blue-200 p-4 rounded shadow">
// //             Left Column (Section 1)
// //           </div>

// //           {/* Right column 2/3 */}
// //           <div className="grid grid-rows-[1fr_3fr] gap-4">
// //             {/* Top row = 1/4 */}
// //             <div className="bg-green-200 p-4 rounded shadow">Right Top Row</div>

// //             {/* Bottom row = 3/4 */}
// //             <div className="bg-green-300 p-4 rounded shadow">
// //               Right Bottom Row
// //             </div>
// //           </div>
// //         </div>

// //         {/* ---------------- SECTION 2 ---------------- */}
// //         <div className="grid grid-cols-[0.25fr_1fr_1fr] gap-4">
// //           {/* First column = 1/4 of Section 1 left column */}
// //           <div className="bg-red-200 p-4 rounded shadow">
// //             Section 2 - Column 1
// //           </div>

// //           {/* Second column */}
// //           <div className="bg-red-300 p-4 rounded shadow">
// //             Section 2 - Column 2
// //           </div>

// //           {/* Third column */}
// //           <div className="bg-red-400 p-4 rounded shadow">
// //             Section 2 - Column 3
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";

// export default function Work() {
//   return (
//     <div>
//       <div className="space-y-6">
//         {/* ---------------- SECTION 1 ---------------- */}
//         <div className="grid grid-cols-[1fr_2fr] gap-4">
//           {/* Left column 1/3 */}
//           <div className="bg-blue-200 p-4 rounded shadow">
//             Left Column (Section 1)
//           </div>

//           {/* Right column 2/3 */}
//           <div className="grid grid-rows-[1fr_3fr] gap-4">
//             {/* Top row = 1/4 */}
//             <div className="bg-green-200 p-4 rounded shadow">Right Top Row</div>

//             {/* Bottom row = 3/4 */}
//             <div className="bg-green-300 p-4 rounded shadow">
//               Right Bottom Row
//             </div>
//           </div>
//         </div>

//         {/* ---------------- SECTION 2 ---------------- */}
//         <div className="grid grid-cols-3 gap-4">
//           {/* All columns equal */}
//           <div className="bg-red-200 p-4 rounded shadow">
//             Section 2 - Column 1
//           </div>
//           <div className="bg-red-300 p-4 rounded shadow">
//             Section 2 - Column 2
//           </div>
//           <div className="bg-red-400 p-4 rounded shadow">
//             Section 2 - Column 3
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Work() {
  const cards = [
    {
      title: "Dynamic",
      subtitle: "WEB DESIGNING",
      img: "/mnt/data/pic.jpg#1",
    },
    {
      title: "Seven Studio",
      subtitle: "MOBILE DESIGNING",
      img: "/mnt/data/pic.jpg#2",
    },
    {
      title: "Raven Studio",
      subtitle: "BRANDING",
      img: "/mnt/data/pic.jpg#3",
    },
    {
      title: "Diesel H1",
      subtitle: "PHOTOGRAPHY",
      img: "/mnt/data/pic.jpg#4",
    },
    {
      title: "Submarine",
      subtitle: "MOBILE DESIGNING",
      img: "/mnt/data/pic.jpg#5",
    },
    {
      title: "Hydra Merc",
      subtitle: "WEB DESIGNING",
      img: "/mnt/data/pic.jpg#6",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-center text-4xl font-bold tracking-widest mb-10">
        ✹ ALL PROJECTS ✹
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-[#111] rounded-3xl overflow-hidden p-4 flex flex-col gap-4 hover:bg-[#181818] transition"
          >
            <div className="w-full h-56 overflow-hidden rounded-2xl">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs tracking-widest opacity-60">
                {card.subtitle}
              </span>
              <span className="text-xl font-semibold mt-1">{card.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
