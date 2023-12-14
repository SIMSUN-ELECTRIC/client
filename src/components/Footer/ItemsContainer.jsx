import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="About Us" />
      <Item Links={RESOURCES} title="Services" />
      <Item Links={COMPANY} title="Product" />
      <Item Links={SUPPORT} title="Customer Services" />
    </div>
  );
};

export default ItemsContainer;
