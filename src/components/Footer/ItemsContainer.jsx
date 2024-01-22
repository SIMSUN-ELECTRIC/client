import Item from "./Item";
import logo1 from "../../assets/img/logo2.jpeg";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = (props) => {
  return (
    <div className="grid grid-cols-5 p-4 md:p-10">
      <img
        src={logo1}
        alt=""
        className="w-20 rounded-full items-center mr-5 md:block"
      />
      <Item class={`${props.class} `} Links={PRODUCTS} title="About Us" />
      <Item class={`${props.class} `} Links={RESOURCES} title="Services" />
      <Item class={`${props.class} `} Links={COMPANY} title="Product" />
      <Item Links={SUPPORT} title="Customer Services" />
    </div>
  );
};

export default ItemsContainer;
