import React, { useState } from "react";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const bukaSidebar = () => {
    setSidebar(true);
    console.log(sidebar);
  };

  const tutupSidebar = () => {
    setSidebar(false);
    console.log(sidebar);
    
  };

  return (
    <section className="fixed z-40 w-screen md:hidden">
      <button onClick={bukaSidebar} className=" mt-6 mr-6 bg-white/80 hover:bg-blue-100 rounded-full p-2 shadow transition fixed top-3 right-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-15 h-15 text-blue-500"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className={`absolute right-0 flex justify-center w-64 h-screen transform transition-all duration-500  ${sidebar ? "translate-x-0" : "translate-x-full"}`}>
        {/* Background with opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-300 to-cyan-200 pointer-events-none"></div>
        {/* Content above background */}
        <div className="relative flex flex-col w-full h-full items-end justify-center">
          <button
          onClick={tutupSidebar}
          className="mt-6 mr-6 bg-white/80 hover:bg-blue-100 rounded-full p-2 shadow transition fixed top-3 right-1"
          aria-label="Close sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-blue-500"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

          <ul className="flex flex-col justify-center items-end gap-8 z-10 pr-10">
            <li className="nav-links">
              <a className="bg-white/80 p-2 rounded-2xl text-blue-500 drop-shadow-xl hover:bg-blue-100" href="">Home</a>
            </li>
            <li className="nav-links">
              <a className="bg-white/80 p-2 rounded-2xl text-blue-500 drop-shadow-xl hover:bg-blue-100" href="">About</a>
            </li>
            <li className="nav-links">
              <a className="bg-white/80 p-2 rounded-2xl text-blue-500 drop-shadow-xl hover:bg-blue-100" href="">Information</a>
            </li>
            <li className="nav-links">
              <a className="bg-white/80 p-2 rounded-2xl text-blue-500 drop-shadow-xl hover:bg-blue-100" href="/quiz">Quiz</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
