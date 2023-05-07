import { Link, Outlet, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
          alt="logo"
          onClick={() => window.location.replace("/")}
        />

        <nav>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { border: "2px solid #fff", backgroundColor: "#e1d1f976" }
                : undefined
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { border: "2px solid #fff", backgroundColor: "#e1d1f976" }
                : undefined
            }
            to="/list"
          >
            List
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { border: "2px solid #fff", backgroundColor: "#e1d1f976" }
                : undefined
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
