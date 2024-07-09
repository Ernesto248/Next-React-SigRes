//make a navigation component using Link from next/link with the links home cuarto estudiante
"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-4">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="rounded-lg"
          />
        </Link>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow space-x-10">
          <Link
            href="/"
            className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            href="/cuarto/list/"
            className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            Cuarto
          </Link>
          <Link
            href="/estudiante/list/"
            className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            Estudiante
          </Link>
        </div>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-2 py-1 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400"
        >
          <FaBars className="fill-current h-4 w-4" />
        </button>
      </div>
    </nav>
  );
}
