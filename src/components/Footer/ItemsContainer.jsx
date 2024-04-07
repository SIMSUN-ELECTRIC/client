import { Link } from "react-router-dom";
import Item from "./Item";
import { useSelector } from "react-redux";
import logo1 from "../../assets/img/logo2.jpeg";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT, SUPPORTS } from "./Menus";
const ItemsContainer = (props) => {
  const user = useSelector((state) => state.user);
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 ml-3 p-4 md:p-6 ">
      <div className="mt-10 hidden md:block">
        <Link to="/">
          <img
            src={logo1}
            alt="logo img"
            className=" w-12  md:w-20 rounded-full items-center md:mr-5"
          />
        </Link>
      </div>
      <Item className={`${props.class} `} Links={PRODUCTS} title="About Us" />
      <Item className={`${props.class} `} Links={RESOURCES} title="Services" />
      <Item className={`${props.class} `} Links={COMPANY} title="Product" />
      {user.isAuthenticated ? (
        <Item Links={SUPPORT} title="Customer Services" />
      ) : (
        <Item Links={SUPPORTS} title="Customer Services" />
      )}
    </div>
  );
};

export default ItemsContainer;
