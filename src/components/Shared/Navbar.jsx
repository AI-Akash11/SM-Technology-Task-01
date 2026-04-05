import React from "react";

const Navbar = () => {
  return (

    <div className="drawer drawer-start relative z-50">
      {/* Drawer Toggle Checkbox */}
      <input id="mobile-sidebar" type="checkbox" className="drawer-toggle" />

      {/* Main Navbar Bar */}
      <div className="drawer-content flex flex-col">
        <nav className="w-full h-20 flex items-center justify-between xl:px-[15px]  bg-transparent z-50">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img
                src="/Logo.png"
                alt="Floka"
                className="h-11 xl:h-7 object-contain"
              />
            </a>
          </div>
          {/* Links */}
          <div>
            <a
              className="text-black text-lg font-semibold hidden xl:block"
              href="#"
            >
              Home
            </a>
          </div>
          <div>
            <a
              className="text-black text-lg font-semibold hidden xl:block"
              href="#"
            >
              Pages
            </a>
          </div>
          <div>
            <a
              className="text-black text-lg font-semibold hidden xl:block"
              href="#"
            >
              Portfolio
            </a>
          </div>
          <div>
            <a
              className="text-black text-lg font-semibold hidden xl:block"
              href="#"
            >
              Blog
            </a>
          </div>

          {/* email and icon */}
          <div className="hidden xl:block">
            <div className="flex gap-5">
              <span className="text-black text-lg font-semibold">
                info@floka.com
              </span>

              <span>|</span>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="10" y="0" width="4" height="4" fill="black" />

                  <rect x="0" y="10" width="4" height="4" fill="black" />

                  <rect x="10" y="10" width="4" height="4" fill="black" />

                  <rect x="20" y="10" width="4" height="4" fill="black" />

                  <rect x="10" y="20" width="4" height="4" fill="black" />
                </svg>
              </span>
            </div>
          </div>

          {/* Right side: Contact / Sidebar Toggler */}
          <div className="flex items-center gap-10 xl:hidden">
            {/* Hamburger Button to open Drawer */}
            <label
              htmlFor="mobile-sidebar"
              className="cursor-pointer drawer-button flex flex-col items-end gap-2.5 group"
            >
              <span className="w-8 h-[2px] bg-black block"></span>
              <span className="w-6 h-[2px] bg-black block"></span>
              <span className="w-8 h-[2px] bg-black block"></span>
            </label>
          </div>
        </nav>
      </div>

      {/* Sidebar View (Drawer Side) */}
      <div className="drawer-side z-[100]">
        {/* overlay layer */}
        <label
          htmlFor="mobile-sidebar"
          aria-label="close sidebar"
          className="drawer-overlay bg-black/50 backdrop-blur-sm"
        ></label>

        {/* Sidebar Content */}
        <div className="bg-white min-h-screen w-full md:w-[300px] flex flex-col p-10 relative overflow-y-auto">
          {/* Logo + Close Btn */}
          <div className="flex items-center justify-between mb-10">
            <img
              src="/Logo.png"
              alt="Floka Logo"
              className="h-[42px] object-contain"
            />
            <label
              htmlFor="mobile-sidebar"
              className="cursor-pointer text-black bg-[#f5f5f5] transition-colors absolute top-0 right-0"
            >
              {/* Close cross icon mapping the user's screenshot */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 stroke-black"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>

          {/* Search Box */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="KEYWORDS..."
              className="w-full bg-[#f6f6f6] border-none rounded-lg py-3 px-5 pr-14 text-[14px] font-body tracking-wider text-black focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-black border-none">
              {/* Search icon mapping */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* NavLinks */}
          <ul className="flex flex-col flex-1 divide-y divide-gray-100/60 w-full">
            {["Home", "Pages", "Portfolio", "Blog"].map((item) => (
              <li
                key={item}
                className="flex items-center justify-between py-2 cursor-pointer group"
              >
                <span className="font-heading font-semibold text-black group-hover:text-gray-500 transition-colors">
                  {item}
                </span>
                {/* Down Chevron */}
                <div className="bg-[#f6f6f6] p-1.5 rounded-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[14px] w-[14px] text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
