import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-300">
        <Link to={"/home"}>
          <button className="btn btn-ghost text-xl">ByteBridge</button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
