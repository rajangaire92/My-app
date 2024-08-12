import { RiAdminFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="bg-red-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-3xl font-bold">
            <span className="text-white text-3xl font-serif">A</span>
            <span className="text-white text-5xl ">b</span>
            <span className="text-black text-5xl">o</span>
            <span className="text-white text-5xl">r</span>
            <span className="text-white text-5xl">t</span>
          </div>
        </div>
        <ul className="hidden md:flex space-x-4 text-white underline text-sm">
          <li className="hover:text-slate-200">
            <a href="limited">Limited Editions</a>
          </li>

          <li className="hover:text-slate-200">
            <a href="hotdeal">Hot Deal Off The Weekend</a>
          </li>
          <li className="hover:text-slate-200">
            <a href="Abortaccessories">Abort Accessories</a>
          </li>
        </ul>
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder=" Search"
            className="px-2 py-1 rounded-xl border border-gray-300"
          />
          <button>
            <RiAdminFill
              onClick={Navbar}
              className="text-white pl-2 pr-0 size-8 hover:text-slate-300"
            />
          </button>
          <button className="ml-4 text-white hover:text-slate-300">
            Login
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <ul className="flex flex-col space-y-2 text-white mt-2 underline">
          <li className="hover:text-slate-200">
            <a href="limited">Limited Editions</a>
          </li>

          <li className="hover:text-slate-200">
            <a href="hotdeal">Hot Deal Off The Weekend</a>
          </li>
          <li className="hover:text-slate-200">
            <a href="Abortaccessories">Abort Accessories</a>
          </li>
          <li>
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 rounded-xl border border-gray-300 mt-2"
            />
          </li>

          <button>
            {" "}
            <RiAdminFill className=" hover:text-slate-300" />
          </button>
          <li>
            <button className="text-white mt-2 hover:text-slate-300">
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
