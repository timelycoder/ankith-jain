import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="grid grid-cols-[1fr_3fr] gap-4">
        {/* First column = 1/4 */}
        <div className="bg-gray-100 p-4 rounded shadow">
          First Column (1/4 width)
        </div>

        {/* Second column = 3/4 */}
        <div className="bg-white p-6 rounded shadow">
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

            <div className="text-right">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
