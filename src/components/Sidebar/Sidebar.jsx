"use client"
import { useState } from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { LuBuilding2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-800 pl-5 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0`}
      >
        <div className="p-4 text-lg font-bold ">Dashboard</div>
        <nav>
          <ul>
            <li className="p-4 hover:bg-gray-700">
            
              <Link className="flex gap-1 items-center" href="/sell/dashboard"><MdDashboard /> Dashboard</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link className="flex gap-1 items-center" href="/sell/myProperties"><LuBuilding2 /> My Properties</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link className="flex gap-1 items-center" href="/sell/saveProperties"><FaRegHeart /> Saved Properties</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
