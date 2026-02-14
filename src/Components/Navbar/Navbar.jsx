import { CiHome } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { FcAbout } from "react-icons/fc";
import { MdOutlineEventAvailable } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 hidden md:block bg-transparent">
        <nav className="flex justify-between items-center md:mx-5 py-4">
          <div className="flex items-center mx-3 gap-3">
            <img className="md:w-9 w-7" src="croeso-icon.png" alt="" />
            <span className="font-bold md:text-xl text-sky-300 drop-shadow-[0_0_10px_rgba(135,206,250,0.8)]">
              CROESO 2K25
            </span>
          </div>

          
            <ul className="flex gap-14 mx-3 text-xl">
              {["/", "/about", "/event", "/member"].map((path, i) => (
                <NavLink
                  key={i}
                  to={path}
                  className={({ isActive }) =>
                    `cursor-pointer transition transform hover:scale-110 hover:font-medium
                     drop-shadow-[0_0_10px_rgba(135,206,250,0.8)]
                     ${isActive ? "text-yellow-400" : "text-sky-300"}`
                  }
                >
                  <li>
                    {path === "/"
                      ? "Home"
                      : path.replace("/", "").charAt(0).toUpperCase() +
                        path.slice(2)}
                  </li>
                </NavLink>
              ))}
            </ul>
        
        </nav>
      </div>

      {/* Mobile Bottom Navbar */}
      
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/90 backdrop-blur border-t border-sky-300/30">
          <nav className="flex justify-around items-center py-2 max-w-[768px] mx-auto">
            {[
              { to: "/", icon: <CiHome size={24} />, label: "Home" },
              { to: "/about", icon: <FcAbout size={24} />, label: "About" },
              { to: "/event", icon: <MdOutlineEventAvailable size={24} />, label: "Event" },
              { to: "/member", icon: <GoPeople size={24} />, label: "Member" },
            ].map((item, i) => (
              <NavLink
                key={i}
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col items-center min-w-[60px] px-2 py-2 rounded-lg
                   transition-all duration-300
                   ${isActive
                     ? "text-yellow-400 bg-yellow-400/10 scale-105"
                     : "text-sky-300 hover:bg-sky-300/10 hover:-translate-y-1"}`
                }
              >
                {item.icon}
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      
    </>
  );
};

export default Navbar;
