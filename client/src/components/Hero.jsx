import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-6">
              Authentication and Authorization
            </h1>
            <Link to={"/signin"}>
              <button className="btn btn-outline btn-primary">Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
