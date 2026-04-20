import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center py-4 px-8 bg-[#0D131F]">
        <p className="font-black text-2xl hover:cursor-pointer text-white">hbtakahashi</p>
        <div>
          <nav>
            <ul className="flex text-lg  items-center text-[#94A3B8] hover:cursor-pointer gap-8">
              <li className=" hover:text-[#6BDC96] hover:underline underline-offset-8 ">Home</li>
               <li className="hover:text-[#6BDC96] hover:underline underline-offset-4">About</li>
              <li className="hover:text-[#6BDC96] hover:underline underline-offset-4">Works</li>
              <li className="hover:text-[#6BDC96] hover:underline underline-offset-4">Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
