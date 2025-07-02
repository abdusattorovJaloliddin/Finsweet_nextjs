import Image from "next/image";
import React from "react";
import Person from "../../../public/Image (10).png";
import HeaderImage from "../../../public/Header Image.png";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <div className="px-4 py-12 bg-blue-50">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src={Person}
                alt="Andrew Jonson"
                width={40}
                height={40}
                className="rounded-lg object-cover"
              />
              <div>
                <p className="text-gray-700 text-sm">Andrew Jonson</p>
                <p className="text-gray-500 text-xs">
                  Posted on 27th January 2021
                </p>
              </div>
            </div>

            <h6 className="text-3xl md:text-4xl font-bold text-[#063255] mb-4">
              Our internal process and longerm vision
            </h6>
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

          <div className="mt-8 md:mt-0">
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
    </div>
  );
};

export default Blog;
