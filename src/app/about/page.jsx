import React from "react";
import Person from "../../../public/Image (9).png";
import Image from "next/image";
// import Team1 from "../../../public/Image (10).png"; // Placeholder for first team member
// import Team2 from "../../../public/Image (11).png"; // Placeholder for second team member
// import Team3 from "../../../public/Image (12).png"; // Placeholder for third team member
// import Team4 from "../../../public/Image (13).png"; // Placeholder for fourth team member

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Existing Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-6 md:max-w-md">
          <h4 className="text-2xl md:text-3xl text-[#063255] leading-relaxed">
            We value human, <br /> organizational, and <br /> operational <br />{" "}
            intelligence, not just <br /> artificial
          </h4>
          <p className="text-[#063255] text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Aliquam leo odio, sagittis quis ornare quis.
          </p>
          <button className="bg-[#063255] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 transition duration-300 w-full md:w-auto">
            Work With Us
          </button>
        </div>
        <div className="mt-8 md:mt-0">
          <Image
            src={Person}
            alt="Person"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#063255] text-center mb-12">
          The energy of a start-up combined with 30 years of experience
        </h2>
        <p className="text-[#063255] text-center text-base md:text-lg mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
          suscipit tellus et pellentesque.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">15+</h3>
            <p className="text-[#063255] font-semibold mb-2">Awards received</p>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros elit et.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">500+</h3>
            <p className="text-[#063255] font-semibold mb-2">Clients served</p>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros elit et.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">34</h3>
            <p className="text-[#063255] font-semibold mb-2">Employees</p>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros elit et.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">130+</h3>
            <p className="text-[#063255] font-semibold mb-2">Custom solutions</p>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros elit et.
            </p>
          </div>
        </div>
      </div>

      {/* New Section 1: Local Identification */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-white p-6 md:p-12 rounded-lg shadow-md">
        <div className="md:max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-[#063255] mb-4">
            We want to get local identification in every corner of the world in
            this era of global citizenship.
          </h2>
          <p className="text-[#063255] text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
        </div>
        <div className="relative mt-8 md:mt-0">
          <Image
            src="" 
            alt="Team working together"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-4 right-4 w-16 h-16 bg-orange-500 opacity-50 rounded-lg"></div> {/* Orange overlay */}
        </div>
      </div>

      {/* New Section 2: Teamwork */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#063255] text-center mb-12">
          Teamwork is the only way we work
        </h2>
        <p className="text-[#063255] text-center text-base md:text-lg mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
          suscipit tellus et pellentesque.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Image
              src=""
              alt="Team member 1"
              width={300}
              height={400}
              className="rounded-lg object-cover w-full h-auto mb-4"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
            />
            <p className="text-gray-800 font-semibold">Team Member 1</p>
            <p className="text-gray-600 text-sm">Role</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Image
              src=""
              alt="Team member 2"
              width={300}
              height={400}
              className="rounded-lg object-cover w-full h-auto mb-4"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
            />
            <p className="text-gray-800 font-semibold">Team Member 2</p>
            <p className="text-gray-600 text-sm">Role</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Image
              src=""
              alt="Team member 3"
              width={300}
              height={400}
              className="rounded-lg object-cover w-full h-auto mb-4"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
            />
            <p className="text-gray-800 font-semibold">Team Member 3</p>
            <p className="text-gray-600 text-sm">Support Assistant</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Image
              src=""
              alt="Team member 4"
              width={300}
              height={400}
              className="rounded-lg object-cover w-full h-auto mb-4"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
            />
            <p className="text-gray-800 font-semibold">Selby Stuart</p>
            <p className="text-gray-600 text-sm">Support Assistant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;