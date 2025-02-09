import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold mb-6">Auth Home</h1>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default HomePage;
