import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
