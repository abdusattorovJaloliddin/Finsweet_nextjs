import React from "react";
import Person from "../../../public/Header Image (1).png";
import Image from "next/image";
import SlideTeam1 from "../../../public/Image (1).png";
import SlideTeam2 from "../../../public/Image (2).png";
import SlideTeam3 from "../../../public/Image (3).png";

const Correers = () => {
  return (
    <div className=" mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-12">
        <div className="flex flex-col gap-4 sm:gap-6 md:max-w-md">
          <h5 className="text-xl sm:text-2xl md:text-3xl text-[#063255] leading-relaxed">
            We hired people who are very passionate about what they do
          </h5>
          <p className="text-[#063255] text-sm sm:text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Aliquam leo odio, sagittis quis ornare quis.
          </p>
          <button className="bg-[#063255] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-orange-500 transition duration-300 w-full md:w-auto">
            View Positions
          </button>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-0">
          <Image
            src={Person}
            alt="Person"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="mt-12 sm:mt-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#063255] mb-6 sm:mb-8">
          See our open positions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-blue-50 rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="text-base sm:text-lg font-semibold text-[#063255] mb-1 sm:mb-2">
              Full Stack Developer
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">
              Bengaluru - Full Time
            </p>
            <a href="#" className="text-orange-500 font-medium text-xs sm:text-sm">
              Apply Now
            </a>
          </div>

          <div className="bg-blue-50 rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="text-base sm:text-lg font-semibold text-[#063255] mb-1 sm:mb-2">
              Testing Engineer
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">
              Bengaluru - Full Time
            </p>
            <a href="#" className="text-orange-500 font-medium text-xs sm:text-sm">
              Apply Now
            </a>
          </div>

          <div className="bg-blue-50 rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="text-base sm:text-lg font-semibold text-[#063255] mb-1 sm:mb-2">
              Hr Manager+
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">
              Mumbai - Full Time
            </p>
            <a href="#" className="text-orange-500 font-medium text-xs sm:text-sm">
              Apply Now
            </a>
          </div>

          <div className="bg-blue-50 rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="text-base sm:text-lg font-semibold text-[#063255] mb-1 sm:mb-2">
              Full Stack Developer
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">
              Bengaluru - Full Time
            </p>
            <a href="#" className="text-orange-500 font-medium text-xs sm:text-sm">
              Apply Now
            </a>
          </div>

          <div className="bg-blue-50 rounded-lg p-3 sm:p-4 shadow-md">
            <h3 className="text-base sm:text-lg font-semibold text-[#063255] mb-1 sm:mb-2">
              Testing Engineer
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">
              Bengaluru - Full Time
            </p>
            <a href="#" className="text-orange-500 font-medium text-xs sm:text-sm">
              Apply Now
            </a>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto px-4">
          <div className="py-8 sm:py-12 mt-12 sm:mt-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#063255] mb-6 sm:mb-8 pl-4 sm:pl-6">
              Latest Blog & News
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={SlideTeam1}
                  alt="Why you have to digitalize in 2021"
                  width={400}
                  height={300}
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-xl font-semibold text-[#063255] mb-1 sm:mb-2">
                    Why you have to digitalize <br className="sm:hidden" />in 2021
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
                    amet eros blandit, hendrerit elit et.
                  </p>
                  <a href="#" className="text-orange-500 font-medium text-xs sm:text-sm">
                    Learn More →
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={SlideTeam2}
                  alt="Our internal process and longterm vision"
                  width={400}
                  height={300}
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-xl font-semibold text-[#063255] mb-1 sm:mb-2">
                    Our internal process and longterm vision
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
                    amet eros blandit, hendrerit elit et.
                  </p>
                  <a href="#" className="text-orange-500 font-medium text-xs sm:text-sm">
                    Learn More →
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={SlideTeam3}
                  alt="Helping the next generation of leaders"
                  width={400}
                  height={300}
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-xl font-semibold text-[#063255] mb-1 sm:mb-2">
                    Helping the next generation of leaders
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
                    amet eros blandit, hendrerit elit et.
                  </p>
                  <a href="#" className="text-orange-500 font-medium text-xs sm:text-sm">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Correers;