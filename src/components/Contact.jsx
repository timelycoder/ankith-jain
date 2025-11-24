import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Dribbble, Twitter, Instagram } from "iconoir-react";

export default function Contact() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4  text-[#ffffff]">
        {/* First column = 1/4 */}
        <div className="col-span-4 ">
          <div className="p-4 rounded shadow">
            <h2 className="text-xl uppercase">Contact info</h2>
            <div className=" shadow-sm grid grid-cols-4">
              {/* Left Column (1/4) */}
              <div className="col-span-1 flex justify-center items-center">
                <div className="w-20 h-20 bg-[#1f1f1f]  border-0 flex items-center justify-center">
                  <FaEnvelope className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Right Column (3/4) */}
              <div className="card-body col-span-3">
                <h2 className="card-title text-[#938269] uppercase">MAIL US</h2>
                <p>info@bluebase.com</p>
                <p>info@bluebase2.com</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded shadow">
            <div className="card shadow-sm grid grid-cols-4">
              {/* Left Column (1/4) */}
              <div className="col-span-1 flex justify-center items-center">
                <div className="w-20 h-20 bg-[#1f1f1f]  border-0 flex items-center justify-center">
                  <FaPhoneAlt className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Right Column (3/4) */}
              <div className="card-body col-span-3">
                <h2 className="card-title text-[#938269] uppercase">
                  contact us
                </h2>
                <p>+1504-899-8221</p>
                <p>+1504-899-5456</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded shadow">
            <div className="card shadow-sm grid grid-cols-4">
              {/* Left Column (1/4) */}
              <div className="col-span-1 flex justify-center items-center">
                <div className="w-20 h-20 bg-[#1f1f1f]  border-0 flex items-center justify-center">
                  <FaMapMarkerAlt className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Right Column (3/4) */}
              <div className="card-body col-span-3">
                <h2 className="card-title text-[#938269] uppercase">
                  Location
                </h2>

                <p className="uppercase">22 Baker Street,Texas</p>
                <p className="uppercase">United States</p>
                <p className="uppercase">W1U 3BW</p>
              </div>
            </div>
          </div>
          {/* ///////////// */}
          <div className="p-4 rounded shadow">
            <div className="card shadow-sm grid grid-row-2">
              {/* Left Column (1/4) */}
              <div className="col-span-1 flex justify-center items-center">
                <h2 className="card-title">MAIL US</h2>
              </div>

              {/* Right Column (3/4) */}
              <div className="card-body col-span-3 flex flex-row gap-4">
                <div className="w-20 h-20 rounded-full bg-[#1d1d1d]  border-0 flex items-center justify-center">
                  <Dribbble width={30} height={30} color="#fff" />
                </div>
                <div className="w-20 h-20 rounded-full bg-[#1d1d1d]  border-0 flex items-center justify-center">
                  <Twitter width={30} height={30} color="#fff" />
                </div>
                <div className="w-20 h-20 rounded-full bg-[#1d1d1d]  border-0 flex items-center justify-center">
                  <Instagram width={30} height={30} color="#fff" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second column = 3/4 */}
        <div className="col-span-8 p-6   card bg-[#1d1d1d] text-[#ffffff] w-full shadow-sm rounded-2xl">
          {/* Headline */}

          {/* Contact Form */}
          <form className="space-y-5">
            <h2 className="text-5xl font-bold mb-20">
              Let's work <span className="text-[#5b78f6]">together</span>
            </h2>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="input w-full bg-[#262626] h-16 border-0 "
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full bg-[#262626] h-16 border-0 "
              />
            </div>

            <div>
              <input
                type="text"
                placeholder=" Your Subject"
                className="input input-bordered w-full bg-[#262626] h-16 border-0 "
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full bg-[#262626] h-46 border-0 "
                rows={4}
              />
            </div>

            <div className="text-center rounded-2xl">
              <button
                type="submit"
                className="btn w-full rounded-xl bg-[#323232] border-0 text-xl text-[#ffffff] h-16  "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
