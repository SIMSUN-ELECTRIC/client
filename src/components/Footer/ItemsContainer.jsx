import Item from "./Item";
import logo1 from "../../assets/img/logo2.jpeg";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = (props) => {
  return (
    <div className="grid grid-cols-8 md:grid-cols-9 gap-10 p-4 md:p-10">
      <img
        src={logo1}
        alt=""
        className="w-20 rounded-full items-center mr-5 hidden md:block"
      />
      <Item
        class={`${props.class} col-start-1 col-span-2 md:col-start-2`}
        Links={PRODUCTS}
        title="About Us"
      />
      <Item
        class={`${props.class} col-span-2`}
        Links={RESOURCES}
        title="Services"
      />
      <Item
        class={`${props.class} col-span-2`}
        Links={COMPANY}
        title="Product"
      />
      <Item
        class={`${props.class} col-span-2`}
        Links={SUPPORT}
        title="Customer Services"
      />
    </div>
  );
};

export default ItemsContainer;
