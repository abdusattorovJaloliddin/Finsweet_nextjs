"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logotip from "../../../public/Logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="container mx-auto flex items-center justify-between p-4">
      <Link href="/">
        <Image
          src={Logotip}
          alt="Logotip"
          width={100}
          height={24}
          className="text-blue-500"
        />
      </Link>
      <div
        className="md:hidden flex flex-col gap-1.5 cursor-pointer relative"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div
          className={`w-10 h-1 rounded-2xl bg-blue-900 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-3" : "translate-y-0"
          }`}
        ></div>
        <div
          className={`w-10 h-1 rounded-2xl bg-blue-900 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
          }`}
        ></div>
        <div
          className={`w-10 h-1 rounded-2xl bg-blue-900 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 -translate-y-3" : "translate-y-0"
          }`}
        ></div>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
        onClick={() => setIsMenuOpen(false)}
      >
        <Link
          href="/about"
          className="text-black font-bold hover:text-yellow-600 hover:bg-yellow-100 rounded-2xl p-2 transition duration-300 ease-in-out"
        >
          About Us
        </Link>
        <Link
          href="/correers"
          className="text-black font-bold hover:text-yellow-600 hover:bg-yellow-100 rounded-2xl p-2 transition duration-300 ease-in-out"
        >
          Careers
        </Link>
        <Link
          href="/service"
          className="text-black font-bold hover:text-yellow-600 hover:bg-yellow-100 rounded-2xl p-2 transition duration-300 ease-in-out"
        >
          Services
        </Link>
        <Link
          href="/blog"
          className="text-black font-bold hover:text-yellow-600 hover:bg-yellow-100 rounded-2xl p-2 transition duration-300 ease-in-out"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="text-black font-bold hover:text-yellow-600 hover:bg-yellow-100 rounded-2xl p-2 transition duration-300 ease-in-out"
        >
          Contact Us
        </Link>
        <Link
          href=""
          className="text-black font-bold hover:text-yellow-600 hover:bg-yellow-100 rounded-2xl p-2 transition duration-300 ease-in-out"
        >
          Clone project
        </Link>
      </div>
    </header>
  );
};

export default Header;
