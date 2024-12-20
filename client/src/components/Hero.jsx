import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Welcome to ByteBridge</h1>
            <p className="py-6">Connecting Conversations Seamlessly</p>
            <Link to={"/signin"}>
              <button className="btn btn-outline btn-primary">
                Join the Conversation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
