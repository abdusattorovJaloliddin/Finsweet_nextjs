import React from "react";
import Image from "next/image";
const Service = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-6 md:max-w-md">
          <h5 className="text-2xl md:text-3xl text-[#063255] leading-relaxed">
            We serve clients with ground breaking solutions{" "}
          </h5>
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
            src="/Developer.png"
            alt="Person"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="mt-16">
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-full sm:w-1/3">
              <Image
                src="/Muzican.png"
                alt="Business Strategy"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-48 sm:h-full"
              />
            </div>
            <div className="w-full sm:w-2/3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#063255] mb-2">
                Business strategy
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam leo odio, sagittis quis ornare quis, consectetur
                adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
              </p>
              <ul className="text-gray-600 text-sm sm:text-base list-disc pl-5">
                <li>Cost strategy</li>
                <li>Differentiated product or service strategy</li>
                <li>Focus on a niche strategy</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row-reverse items-center gap-4">
            <div className="w-full sm:w-1/3">
              <Image
                src="/Teacher.png"
                alt="Digitalization"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-48 sm:h-full"
              />
            </div>
            <div className="w-full sm:w-2/3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#063255] mb-2">
                Digitalization
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam leo odio, sagittis quis ornare quis, consectetur
                adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-full sm:w-1/3">
              <Image
                src="/Sportsmen.png"
                alt="Business Strategy"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-48 sm:h-full"
              />
            </div>
            <div className="w-full sm:w-2/3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#063255] mb-2">
                Business strategy
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam leo odio, sagittis quis ornare quis, consectetur
                adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
              </p>
              <ul className="text-gray-600 text-sm sm:text-base list-disc pl-5">
                <li>Cost strategy</li>
                <li>Differentiated product or service strategy</li>
                <li>Focus on a niche strategy</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row-reverse items-center gap-4">
            <div className="w-full sm:w-1/3">
              <Image
                src="/Visitor.png"
                alt="Digitalization"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-48 sm:h-full"
              />
            </div>
            <div className="w-full sm:w-2/3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#063255] mb-2">
                Artificial intelligence
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam leo odio, sagittis quis ornare quis, consectetur
                adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-full sm:w-1/3">
              <Image
                src="/Joma.png"
                alt="Business Strategy"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-48 sm:h-full"
              />
            </div>
            <div className="w-full sm:w-2/3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#063255] mb-2">
                Smart Contracts
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam leo odio, sagittis quis ornare quis, consectetur
                adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
              </p>
              <ul className="text-gray-600 text-sm sm:text-base list-disc pl-5">
                <li>Cost strategy</li>
                <li>Differentiated product or service strategy</li>
                <li>Focus on a niche strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-[#063255] mb-8 pl-6">Latest Blog & News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/team1.png"
              alt="Why you have to digitalize in 2021"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#063255] mb-2">
                Why you have to digitalize
                <br />in 2021
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
                amet eros blandit, hendrerit elit et.
              </p>
              <a href="#" className="text-orange-500 font-medium text-sm">
                Learn More →
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/team2.png"
              alt="Our internal process and longterm vision"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#063255] mb-2">
                Our internal process and longterm vision
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
                amet eros blandit, hendrerit elit et.
              </p>
              <a href="#" className="text-orange-500 font-medium text-sm">
                Learn More →
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/team3.png"
              alt="Helping the next generation of leaders"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#063255] mb-2">
                Helping the next generation of leaders
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
                amet eros blandit, hendrerit elit et.
              </p>
              <a href="#" className="text-orange-500 font-medium text-sm">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;