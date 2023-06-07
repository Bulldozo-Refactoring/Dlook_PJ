import Header from "./Header/Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <div id="header"><Header /></div>
      <div id="container">{props.children}</div>
      <div id="footer"><Footer /></div>
    </>
  );
}

export default Layout;