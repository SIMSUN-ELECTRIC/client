import Item from "./Item";
import logo1 from "../../assets/img/logo2.jpeg";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = (props) => {
  return (
    <div className="grid grid-cols-9 gap-10 px-10 py-10">
      <img src={logo1} alt="" className="w-20 rounded-full items-center mr-5" />
      <Item
        class={`${props.class} col-start-2 col-span-2`}
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
