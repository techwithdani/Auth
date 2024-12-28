import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      {userInfo ? (
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">ByteBridge</a>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/profile"} className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar bg-base-300">
          <Link to={"/home"}>
            <button className="btn btn-ghost text-xl">ByteBridge</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default NavBar;
