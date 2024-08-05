import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const navContainerStyles = {
    height: "50px",
    margin: "1rem",
    border: "solid 1px black",
    display: "flex",
    gap: "1em",
    alignItems: "center",
    padding: "0 1em",
  };

  const { user, logout } = useAuth();


  // const user1: User = {
  //   email: "hadi@hadi.com",
  //   userName: "Hadi",
  // };
  // const login = () => {
  //   setUser(user1);
  // };

  return (
    <nav style={navContainerStyles}>
      <NavLink to={"/"}>Homepage</NavLink>
      {/* {user && <NavLink to={"/characters"}>Characters</NavLink>} */}
      <NavLink to={"/characters"}>Characters</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      {user ? (
        <Button onClick={logout} variant="danger">
          Logout
        </Button>
      ) : (
        <NavLink to={"/login"}>Login</NavLink>
      )}
    </nav>
  );
};

export default NavBar;
