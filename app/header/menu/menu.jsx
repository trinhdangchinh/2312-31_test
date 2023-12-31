import MenuItems from "./menuItems";

const defaultBgClass =
  "bg-w text-Tmd menus grid grid-cols-12 gap-4 items-center warp ";
const defaultitemsClass =
  "menu-items col-span-12  cursor-pointer hover:bg-prim3 rounded-md pl-4 ";

const Menu = ({
  bgClass = defaultBgClass,
  itemsClass = defaultitemsClass,
  menus,
}) => {
  const depthLevel = 0;

  return (
    <ul className={bgClass}>
      {menus.map((menu, index) => (
        <MenuItems
          items={menu}
          key={index}
          depthLevel={depthLevel}
          itemsClass={itemsClass}
        />
      ))}
    </ul>
  );
};
export default Menu;
