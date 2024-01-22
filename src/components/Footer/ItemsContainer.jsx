import Item from "./Item";
import logo1 from "../../assets/img/logo2.jpeg";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = (props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 ml-3 p-4 md:p-10 ">
      <div className="mt-10 hidden md:block">
        <img
          src={logo1}
          alt=""
          className=" w-12  md:w-20 rounded-full items-center md:mr-5"
        />
      </div>
      <Item class={`${props.class} `} Links={PRODUCTS} title="About Us" />
      <Item class={`${props.class} `} Links={RESOURCES} title="Services" />
      <Item class={`${props.class} `} Links={COMPANY} title="Product" />
      <Item Links={SUPPORT} title="Customer Services" />
    </div>
  );
};

export default ItemsContainer;
