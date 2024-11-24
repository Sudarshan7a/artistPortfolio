import { NavLink } from "react-router-dom";
import pro_lg from "./../../assets/images/profile/pro_lg.jpg";

function PageNav() {
  return (
    <nav className="h-[48px] w-full flex items-center px-28 justify-between">
      <Logo></Logo>
      <ul className="list-none flex gap-16 justify-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/commission">Commission</NavLink>
        </li>
        <li>
          <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink>
        </li>
      </ul>
      <Button variant={0} h={8}>
        Contact
      </Button>
    </nav>
  );
}

// eslint-disable-next-line react/prop-types
function Button({ children }) {
  return (
    <button
      className={`btn h-10 w-32 px-4 rounded-[36px] "text-[#f0f0f0] bg-[#f0f0f0]  border-2 border-[#f0f0f0] hover:text-[#f0f0f0] hover:bg-[#ff4c4c] " transition-all`}
    >
      {children}
    </button>
  );
}

export default PageNav;

const logoStyle = {
  color: "#333333",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "38.4px",
  letterSpacing: "0.064px",
};

function Logo() {
  return (
    <div className="flex items-center mr-3 gap-2">
      <img
        src={pro_lg}
        alt="logo"
        className="h-[36px] w-[36px] rounded-full "
      />
      <h1 style={logoStyle}>Ronal1710</h1>
    </div>
  );
}
