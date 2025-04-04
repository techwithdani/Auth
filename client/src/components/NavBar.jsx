import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { useLogoutMutation } from "../redux/slices/usersApiSlice";

const NavBar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {userInfo ? (
        <button onClick={logoutHandler}>Logout</button>
      ) : (
        <h1>To Do</h1>
      )}
    </>
  );
};

export default NavBar;
