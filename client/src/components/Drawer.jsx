import { useState } from "react";
import { useGetAllUsersMutation } from "../redux/slices/usersApiSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

const Drawer = () => {
  const [users, setUsers] = useState([]);

  const { userInfo } = useSelector((state) => state.auth);

  const [getAllUsers, { isLoading }] = useGetAllUsersMutation();

  const getUsers = async () => {
    try {
      const res = await getAllUsers().unwrap();
      setUsers(res.filter((person) => person.name !== userInfo.name));
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <h1 className="text-3xl font-bold mb-6">
                Your Bridge to Instant Communication
              </h1>
              <label
                htmlFor="my-drawer"
                className="btn btn-primary drawer-button"
                onClick={getUsers}
              >
                Start Chatting
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <h1>Chats</h1>
                {isLoading && <Spinner />}
                <li>
                  {users.map((person) => (
                    <a key={person._id}>{person.name}</a>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
