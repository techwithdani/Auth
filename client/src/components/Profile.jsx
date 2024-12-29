import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card glass w-96">
          <figure>
            <div className="avatar">
              <div className="w-24 rounded mt-6">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name</h2>
            <p>{userInfo.name}</p>
            <h2 className="card-title">Email</h2>
            <p>{userInfo.email}</p>
            <div className="card-actions justify-end">
              <Link to={"/update-profile"}>
                <button className="btn btn-primary">Update Profile</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
