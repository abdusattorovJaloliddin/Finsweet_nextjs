import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-blue-50 flex flex-col md:flex-row items-start justify-between gap-12 border-4 border-blue-300">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-[#063255] mb-4">
          Have a question? Let's get in touch with us.
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          Fill up the form and our team will get back to you within 24 hrs
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 rounded-lg bg-blue-100 border-none focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 rounded-lg bg-blue-100 border-none focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 rounded-lg bg-blue-100 border-none focus:outline-none"
          />
          <textarea
            placeholder="Type message"
            className="w-full p-3 h-32 rounded-lg bg-blue-100 border-none focus:outline-none"
          />
          <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
            Submit
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <div className="flex gap-16">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#063255] mb-2">
                Location
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Tashkent, Uzbekistan
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#063255] mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                020 7993 2905
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                hi@finsweet.com
              </p>
            </div>
          </div>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11970.55797411778!2d69.2000!3d41.3000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e7c3%3A0xa5a472b6c52b0e4f!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1625234567890"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
