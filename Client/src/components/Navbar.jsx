import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    setDisplay((prevState) => {
      return !prevState;
    });
  };
  return (
    <header>
      <Link>
        <h1>Homyz</h1>
      </Link>
      <div className="navbar-ball"></div>
      {display ? (
        <nav className="display-for-small">
          {/* <Link to={"properties"}>Properties</Link>
          <Link to={"contact"}>Contact</Link>
          <Link to={"add-property"}>Add Property</Link> */}
          <Link to={"#"} className="login">
            Login
          </Link>
        </nav>
      ) : (
        ""
      )}
      <nav className="display-for-large">
        {/* <Link to={"#"}>Properties</Link>
        <Link to={"contact"}>Contact</Link>
        <Link to={"add-property"}>Add Property</Link> */}
        <Link to={"#"} className="login">
          Login
        </Link>
      </nav>

      <div className="bars" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
