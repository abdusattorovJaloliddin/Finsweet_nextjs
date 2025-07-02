import React from "react";
import Person from "../../../public/Image (9).png";
import Image from "next/image";

const Correers = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-6 md:max-w-md">
          <h5 className="text-2xl md:text-3xl text-[#063255] leading-relaxed">
            We hired people who are very passionate about what they do
          </h5>
          <p className="text-[#063255] text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Aliquam leo odio, sagittis quis ornare quis.
          </p>
          <button className="bg-[#063255] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 transition duration-300 w-full md:w-auto">
            View Positions
          </button>
        </div>

        <div className="mt-8 md:mt-0">
          <Image
            src={Person}
            alt="Person"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Correers;
