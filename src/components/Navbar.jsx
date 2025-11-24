import { Link } from "react-router-dom";

export default function Navbar() {
  const menuItems = [
    <li>
      <Link to="/" className="text-xl">
        Home
      </Link>
    </li>,
    <li>
      <Link to="/about" className="text-xl">
        About
      </Link>
    </li>,
    <li>
      <Link to="/work" className="text-xl">
        Works
      </Link>
    </li>,
    <li>
      <Link to="/contact" className="text-xl">
        Contact
      </Link>
    </li>,
  ];
  return (
    <div>
      <div className="navbar bg-[#0f0f0f] text-[#ffffff] shadow-sm pb-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <div>
            <Link to="/" className="text-4xl font-[1000]">
              GridX
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Let's talk</a> */}
          <button className="btn bg-[#323232] text-2xl text-[#ffffff] rounded-xl border-0">
            Let's talk
          </button>
        </div>
      </div>
    </div>
  );
}
