import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center p-4">
        <p className="font-bold text-2xl">hbtakahashi</p>
        <div>
          <nav>
            <ul className="flex items-center gap-20">
              <li className="hover:text-green-300 hover:underline">Home</li>
              <li>Works</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
