const Drawer = () => {
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
                <li>
                  <a>Person 1</a>
                </li>
                <li>
                  <a>Person 2</a>
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
