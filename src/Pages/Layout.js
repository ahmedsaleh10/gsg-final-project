import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav/TopNav";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <>
        <TopNav/>
        <Outlet />
        <Footer/>
    </>
  );
}

export default Layout;