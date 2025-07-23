import Image from "next/image";
import React from "react";
import Person from "../../../public/Image (10).png";
import HeaderImage from "../../../public/Header Image.png";
import SlideTeam1 from "../../../public/Image (1).png";
import SlideTeam2 from "../../../public/Image (2).png";
import SlideTeam3 from "../../../public/Image (3).png";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 rounded-xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={Person}
                alt="Andrew Jonson"
                width={40}
                height={40}
                className="rounded-lg object-cover"
              />
              <div>
                <p className="text-gray-700 text-sm font-medium">Andrew Jonson</p>
                <p className="text-gray-500 text-xs">Posted on 27th January 2021</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#063255] mb-4">
              Our internal process and longterm vision
            </h2>
            <p className="text-gray-600 text-base mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized. We aim to attain the
            </p>
            <a
              href="#"
              className="text-orange-500 font-semibold text-sm hover:underline"
            >
              Read More <span className="ml-2">→</span>
            </a>
          </div>

          <div className="flex-1">
            <Image
              src={HeaderImage}
              alt="Office Setting"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="py-16">
        <h3 className="text-2xl md:text-3xl font-bold text-[#063255] mb-8">
          All Posts
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={SlideTeam1}
              alt="Why you have to digitalize in 2021"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-[#063255] mb-2">
                Why you have to digitalize <br /> in 2021
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
                amet eros blandit, hendrerit elit et.
              </p>
              <a href="#" className="text-orange-500 font-medium text-sm hover:underline">
                Learn More →
              </a>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={SlideTeam2}
              alt="Our internal process and longterm vision"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-[#063255] mb-2">
                Our internal process and longterm vision
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
                amet eros blandit, hendrerit elit et.
              </p>
              <a href="#" className="text-orange-500 font-medium text-sm hover:underline">
                Learn More →
              </a>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={SlideTeam3}
              alt="Helping the next generation of leaders"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-[#063255] mb-2">
                Helping the next generation of leaders
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
                amet eros blandit, hendrerit elit et.
              </p>
              <a href="#" className="text-orange-500 font-medium text-sm hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={SlideTeam3}
              alt="Helping the next generation of leaders"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-[#063255] mb-2">
                Helping the next generation of leaders
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
                amet eros blandit, hendrerit elit et.
              </p>
              <a href="#" className="text-orange-500 font-medium text-sm hover:underline">
                Learn More →
              </a>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={SlideTeam1}
              alt="Why you have to digitalize in 2021"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-[#063255] mb-2">
                Why you have to digitalize <br /> in 2021
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
                amet eros blandit, hendrerit elit et.
              </p>
              <a href="#" className="text-orange-500 font-medium text-sm hover:underline">
                Learn More →
              </a>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={SlideTeam2}
              alt="Our internal process and longterm vision"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-[#063255] mb-2">
                Our internal process and longterm vision
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
                amet eros blandit, hendrerit elit et.
              </p>
              <a href="#" className="text-orange-500 font-medium text-sm hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
