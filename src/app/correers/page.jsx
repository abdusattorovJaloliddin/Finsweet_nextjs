"use client";
import React from "react";
import Image from "next/image";
const Correers = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 flex flex-col gap-4 md:max-w-md">
          <h5 className="text-xl sm:text-2xl md:text-3xl text-[#063255] leading-snug font-semibold">
            We hired people who are very passionate about what they do
          </h5>
          <p className="text-[#063255] text-sm sm:text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden sm:block" />
            Aliquam leo odio, sagittis quis ornare quis.
          </p>
          <button className="bg-[#063255] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 transition duration-300 w-full md:w-auto">
            View Positions
          </button>
        </div>
        <div className="flex-1 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/teamany.png"
            alt="Person"
            width={350}
            height={350}
            className="rounded-lg w-full h-auto object-cover max-w-[490px]" 
            sizes="(max-width: 768px) 80vw, 330px"
          />
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#063255] mb-8">
          See our open positions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            { title: "Full Stack Developer", location: "Bengaluru - Full Time" },
            { title: "Testing Engineer", location: "Bengaluru - Full Time" },
            { title: "Hr Manager", location: "Mumbai - Full Time" },
            { title: "Full Stack Developer", location: "Bengaluru - Full Time" },
            { title: "Testing Engineer", location: "Bengaluru - Full Time" },
          ].map((job, idx) => (
            <div key={idx} className="bg-blue-50 rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold text-[#063255] mb-2">{job.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{job.location}</p>
              <a href="#" className="text-orange-500 font-medium text-sm">
                Apply Now →
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#063255] mb-8">
          Latest Blog & News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              img: "/team1.png",
              title: "Why you have to digitalize in 2021",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit.",
            },
            {
              img: "/team2.png",
              title: "Our internal process and longterm vision",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit.",
            },
            {
              img: "/team3.png",
              title: "Helping the next generation of leaders",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit.",
            },
          ].map((blog, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={blog.img}
                alt={blog.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#063255] mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>
                <a href="#" className="text-orange-500 font-medium text-sm">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Correers;
