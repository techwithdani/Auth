const Drawer = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Start chatting with your friends
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
    </>
  );
};

export default Drawer;
