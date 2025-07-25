"use client";
import React from "react";
import Image from "next/image";
const Homepage = () => {
  return (
    <section>
      <div className="bg-[#e6f1fd]">
        <div className="mx-auto py-4 container px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-4">
              Prosper with our <br />
              <span className="text-blue-900">bespoke solutions</span>
            </h1>
            <p className="text-gray-600 mb-6 max-w-full sm:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique.
            </p>
            <div className="flex gap-4 sm:gap-6 mb-8">
              <button className="bg-orange-400 text-white px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-orange-500 transition">
                See Our Services
              </button>
              <button className="text-gray-800 hover:bg-orange-400 hover:text-white px-4 sm:px-6 py-2 rounded-full font-semibold transition">
                See All Services
              </button>
            </div>
            <div>
              <p className="text-gray-500 mb-2">Worked with 100+ Companies</p>
              <Image
                src="/Header_Logos.png"
                alt="Company logos"
                width={400}
                height={50}
                className="w-full max-w-[300px] sm:max-w-[400px] h-auto p-2 rounded-lg"
              />
            </div>
          </div>
          <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <Image
              src="/Image_first.png"
              alt="Smiling Businessman"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16 px-6 my-2">
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
              src="/team1.png"
              alt="Business strategy"
              layout="responsive"
              width={400}
              height={250}
              className="rounded-xl mb-5 object-cover"
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
              src="/team2.png"
              alt="Digitalization"
              layout="responsive"
              width={400}
              height={250}
              className="rounded-xl mb-5 object-cover"
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
              src="/team3.png"
              alt="Risk assessment"
              layout="responsive"
              width={400}
              height={250}
              className="rounded-xl mb-5 object-cover"
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
      <div className="bg-[#e6f1fd]">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
              We are building software solutions <br />
              that solve your business <br />
              challenges
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
              commodo suscipit tellus et pellentesque.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
              <div className="mb-4">
                <span className="text-4xl" role="img" aria-label="Invoicing">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Invoicing</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
              <div className="mb-4">
                <span className="text-4xl" role="img" aria-label="Support">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
              <div className="mb-4">
                <span className="text-4xl" role="img" aria-label="Surveying">❤️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Surveying</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
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
            width={400}
            height={250}
            src="/Favorites1.png"
            alt="Favorites Team member"
            className="relative z-10 rounded-lg w-full max-w-md mx-auto"
          />
        </div>
      </div>
      <div className="bg-[#e6f1fd]">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
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
              src="/Favorites2.png"
              width={400}
              height={250}
              alt="Team collaboration"
              className="relative z-10 rounded-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-stretch justify-between">
        <div className="md:w-1/2 flex">
          <Image
            src="/Favorites3.png"
            width={400}
            height={250}
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
              src="/Favorites41.png"
              width={400}
              height={250}
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
            src="/Favorites4.png"
            width={400}
            height={250}
            alt="Testimonial video"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="bg-[#e6f1fd]">
        <div className="container mx-auto px-6 py-12">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Latest Blog & News
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <Image
                src="/team1.png"
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
                src="/team2.png"
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
                src="/team3.png"
                width={400}
                height={250}
                alt="Risk Assessment"
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
      </div>
    </section>
  );
}
export default Homepage;