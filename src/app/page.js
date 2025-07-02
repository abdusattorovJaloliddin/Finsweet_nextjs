"use client";
import React from "react";
import Image from "next/image";
import Image1 from "../../public/Image (1).png";
import Image2 from "../../public/Image (2).png";
import Image3 from "../../public/Image (3).png";
import Image4 from "../../public/Image (4).png";
import Image5 from "../../public/Image (5).png";
import Image6 from "../../public/Image (6).png";
import Image7 from "../../public/Image (7).png";
import Image8 from "../../public/Image (8).png";

const Homepage = () => {
  return (
    <section className=" container mx-auto py-2">
      <div className="px-10 py-18.5 flex flex-col md:flex-row items-center justify-between gap-12 bg-[#e6f1fd]">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight mb-4">
            Prosper with our <br />
            <span className="text-blue-700">bespoke solutions</span>
          </h1>
          <p className="text-gray-600 mb-6 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          <div className="flex gap-6 mb-8">
            <button className="bg-orange-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-500 transition">
              See Our Services
            </button>
            <button className="text-gray-800 hover:bg-orange-400 hover:text-white px-6 py-2 rounded-full font-semibold transition">
              See All Services
            </button>
          </div>

          <div>
            <p className="text-gray-500 mb-2">Worked with 100+ Companies</p>
            <Image
              src="/Header%20Logos.png"
              alt="Company logos"
              width={400}
              height={50}
              className="p-2 rounded-lg"
            />
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-2xl md:max-w-md lg:max-w-lg mx-auto text-center">
          <Image
            src="/Image.png"
            alt="Smiling Businessman"
            width={500}
            height={500}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>

      <div className="mt-16 px-6 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We help more than 1500 companies from all sectors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <Image
              src={Image1}
              alt="Business Strategy"
              width={400}
              height={250}
              className="rounded-xl mb-5 w-full h-56 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Business strategy
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et,
            </p>
            <a
              href="#"
              className="text-orange-500 font-medium hover:underline flex items-center gap-1"
            >
              Learn More <span>→</span>
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <Image
              src={Image2}
              alt="Digitalization"
              width={400}
              height={250}
              className="rounded-xl mb-5 w-full h-56 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Digitalization
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et,
            </p>
            <a
              href="#"
              className="text-orange-500 font-medium hover:underline flex items-center gap-1"
            >
              Learn More <span>→</span>
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <Image
              src={Image3}
              alt="Risk Assessment"
              width={400}
              height={250}
              className="rounded-xl mb-5 w-full h-56 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Risk assessment
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et,
            </p>
            <a
              href="#"
              className="text-orange-500 font-medium hover:underline flex items-center gap-1"
            >
              Learn More <span>→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 bg-blue-50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
            We are building software solutions <br></br> that solve your
            business <br></br> challenges
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Invoicing", image: "/Image (1).png", icon: "💰" },
            { title: "Support", image: "/Image (1).png", icon: "⭐" },
            { title: "Surveying", image: "/Image (1).png", icon: "❤️" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center"
            >
              <div className="mb-4">
                <span className="text-4xl" role="img" aria-label={item.title}>
                  {item.icon}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 bg-gray-50 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The energy of a start-up <br></br> combined with 30 years of
            experience.{" "}
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.{" "}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                15+
              </h3>
              <p className="text-gray-600 text-sm font-bold">Awards received</p>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros elit.
              </blockquote>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                500+
              </h3>
              <p className="text-gray-600 text-sm font-bold">Clients served </p>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros elit.
              </blockquote>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <Image
            src={Image4}
            alt="Team member"
            className="relative z-10 rounded-lg w-full max-w-md mx-auto"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 bg-blue-50 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <div className="flex space-x-4 mb-6">
            <button className="px-4 py-2 text-gray-600 hover:text-orange-500 border border-gray-300 rounded-lg hover:bg-white">
              Business Strategy
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-orange-500 border border-gray-300 rounded-lg hover:bg-white">
              Digitalization
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-orange-500 border border-gray-300 rounded-lg hover:bg-white">
              Risk Assessment
            </button>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Helping clients with research and strategy for their business
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque. <br></br> <br></br> Mattis
            purus. Vivamus commodo suscipit tellus et pellentesque. Curabitur
            sit amet eros blandit esq.
          </p>

          <a
            href="#"
            className="text-orange-500 font-semibold text-sm flex items-center hover:underline"
          >
            See all services <span className="ml-2">→</span>
          </a>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <Image
            src={Image5}
            alt="Team collaboration"
            className="relative z-10 rounded-lg w-full max-w-md mx-auto"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-stretch justify-between">
        <div className="md:w-1/2 flex">
          <Image
            src={Image6}
            alt="Person with coffee"
            className="w-full object-cover"
          />
        </div>

        <div className="md:w-1/2 h-auto bg-orange-500 text-white p-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            Energy of a start-up combined with 30 years of experience.
          </h2>
          <button className="px-6 py-2 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100">
            See Job Vacancies
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Finsweet Was A Dream To Work With
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Maecenas efficitur scelerisque lorem, et varius lacus. Pellentesque
            a arcu ut diam dapibus mattis vel vel orci. Vivamus eleifend nec
            felis vel auctor.
          </p>
          <div className="flex items-center">
            <Image
              src={Image8}
              alt="Chikelu Neo"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-900 font-semibold">Chikelu Neo</p>
              <p className="text-orange-500 text-sm">CEO at MazeAI</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <Image
            src={Image7}
            alt="Testimonial video"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="container mx-auto px-6 py-12 bg-blue-50">
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest Blog & News
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <Image
              src={Image1}
              alt="Business Strategy"
              width={400}
              height={250}
              className="rounded-xl mb-5 w-full h-56 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Business strategy
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et,
            </p>
            <a
              href="#"
              className="text-orange-500 font-medium hover:underline flex items-center gap-1"
            >
              Learn More <span>→</span>
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <Image
              src={Image2}
              alt="Digitalization"
              width={400}
              height={250}
              className="rounded-xl mb-5 w-full h-56 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Digitalization
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et,
            </p>
            <a
              href="#"
              className="text-orange-500 font-medium hover:underline flex items-center gap-1"
            >
              Learn More <span>→</span>
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <Image
              src={Image3}
              alt="Risk Assessment"
              width={400}
              height={250}
              className="rounded-xl mb-5 w-full h-56 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Risk assessment
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et,
            </p>
            <a
              href="#"
              className="text-orange-500 font-medium hover:underline flex items-center gap-1"
            >
              Learn More <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
