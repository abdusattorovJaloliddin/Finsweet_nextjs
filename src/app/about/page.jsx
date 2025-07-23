import React from "react";
import Person from "../../../public/Image (9).png";
import Image from "next/image";
import About from "../../../public/About.png";
import Team1 from "../../../public/Image 1.png";
import Team2 from "../../../public/Image 2.png";
import Team3 from "../../../public/Image 3.png";
import Team4 from "../../../public/Image 4.png";
import Imagecopy from "../../../public/Image copy.png"
import SlideTeam1 from "../../../public/Image (1).png"
import SlideTeam2 from "../../../public/Image (2).png"
import SlideTeam3 from "../../../public/Image (3).png"

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
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
            src={About}
            alt="Team working together"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-4 right-4 w-16 h-16 bg-orange-500 opacity-50 rounded-lg"></div>
        </div>
      </div>

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
              src={Team1}
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
              src={Team2}
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
              src={Team3}
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
              src={Team4}
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

      <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-white p-6 md:p-12 rounded-lg shadow-md">
        <div className="flex flex-col gap-4 md:max-w-md">
          <h2 className="text-2xl md:text-3xl text-[#063255] leading-relaxed">
            Finsweet Was A Dream To Work With
          </h2>
          <p className="text-[#063255] text-base md:text-lg leading-relaxed">
            Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel.
            Pellentesque arcu vitae diam dapibus mattis vel ori. Vivamus eleifend nec
            felis vel auctor.
          </p>
          <div className="flex items-center gap-4">
            <Image
              src={Person}
              alt="Chikelu Neo"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-[#063255] font-semibold">Chikelu Neo</p>
              <p className="text-gray-600 text-sm">CEO at MazOA</p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 relative w-full max-w-xl">
          <Image
            src={Imagecopy}
            alt="Testimonial Video"
            width={600}
            height={600}
            className="rounded-lg object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <button className="absolute bottom-4 right-4 bg-orange-500 text-white rounded-full w-18 h-10 flex items-center justify-center">
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="text-sm">Play Video</span>
            </span>
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-[#063255] mb-8 pl-6">Latest Blog & News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={SlideTeam1}
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
              src={SlideTeam2}
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
              src={SlideTeam3}
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

export default AboutPage;