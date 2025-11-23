import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <div className="grid grid-cols-[1fr_3fr] gap-4">
        {/* First column = 1/4 */}
        <div>
          <div className="bg-gray-100 p-4 rounded shadow">
            First Column (1/4 width)
            <div className="card bg-base-100 shadow-sm grid grid-cols-4">
              {/* Left Column (1/4) */}
              <div className="col-span-1 flex justify-center items-center">
                <FaEnvelope className="w-8 h-8 text-primary" />
              </div>

              {/* Right Column (3/4) */}
              <div className="card-body col-span-3">
                <h2 className="card-title">MAIL US</h2>
                <p>info@bluebase.com</p>
                <p>info@bluebase2.com</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <div className="card bg-base-100 shadow-sm grid grid-cols-4">
              {/* Left Column (1/4) */}
              <div className="col-span-1 flex justify-center items-center">
                <FaPhoneAlt className="w-8 h-8 text-primary" />
              </div>

              {/* Right Column (3/4) */}
              <div className="card-body col-span-3">
                <h2 className="card-title">MAIL US</h2>
                <p>info@bluebase.com</p>
                <p>info@bluebase2.com</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <div className="card bg-base-100 shadow-sm grid grid-cols-4">
              {/* Left Column (1/4) */}
              <div className="col-span-1 flex justify-center items-center">
                <FaMapMarkerAlt className="w-8 h-8 text-primary" />
              </div>

              {/* Right Column (3/4) */}
              <div className="card-body col-span-3">
                <h2 className="card-title">MAIL US</h2>
                <p>info@bluebase.com</p>
                <p>info@bluebase2.com</p>
              </div>
            </div>
          </div>
          {/* ///////////// */}
          <div className="bg-gray-100 p-4 rounded shadow">
            <div className="card bg-base-100 shadow-sm grid grid-row-2">
              {/* Left Column (1/4) */}
              <div className="col-span-1 flex justify-center items-center">
                <h2 className="card-title">MAIL US</h2>
              </div>

              {/* Right Column (3/4) */}
              <div className="card-body col-span-3">
                <FaMapMarkerAlt className="w-8 h-8 text-primary" />
                <FaMapMarkerAlt className="w-8 h-8 text-primary" />
                <FaMapMarkerAlt className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Second column = 3/4 */}
        <div className="bg-white p-6 rounded shadow card bg-base-100 w-full shadow-sm rounded-2xl">
          {/* Headline */}
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full"
                rows={4}
              />
            </div>

            <div className="text-center rounded-2xl">
              <button
                type="submit"
                className="btn btn-primary w-full rounded-xl"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
