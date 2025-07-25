import Image from "next/image";
import React from "react";
import Logo from "../../../public/Logo (2).svg";
import { FaFacebook } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="bg-[#063255]">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={24}
              className="py-2"
            />
            <p className="text-[#e6f1fd] py-4">Bespoke software solutions</p>
            <span className="flex gap-4 justify-center sm:justify-start">
              <FaFacebook className="text-white" />
              <FaYoutubeSquare className="text-white" />
              <FaSquareInstagram className="text-white" />
              <CiTwitter className="text-white" />
            </span>
          </div>
          <div className="flex flex-col">
            <p className="text-[#e6f1fd] font-semibold mb-4">Company</p>
            <Link
              className="text-[#e6f1fd] hover:text-orange-400 block py-1"
              href="/about"
            >
              About Us
            </Link>
            <Link
              className="text-[#e6f1fd] hover:text-orange-400 block py-1"
              href="/service"
            >
              Services
            </Link>
            <Link
              className="text-[#e6f1fd] hover:text-orange-400 block py-1"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-[#e6f1fd] hover:text-orange-400 block py-1"
              href="/careers"
            >
              Careers
            </Link>
          </div>
          <div className="flex flex-col">
            <p className="text-[#e6f1fd] font-semibold mb-4">Connect</p>
            <p className="text-[#e6f1fd] py-1">hi@finsweet.com</p>
            <p className="text-[#e6f1fd] py-1">+(123) 456-7890</p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-[#e6f1fd] font-semibold mb-4">Join Newsletter</p>
            <input
              className="p-2 border rounded-2xl mt-2 w-full sm:w-48 bg-amber-50 border-none"
              type="text"
              placeholder="Type email here"
            />
            <button className="bg-orange-400 text-white px-6 py-2 rounded-full font-semibold mt-2 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
