import MenuItems from "./menuItems";
const Dropdown = ({ submenus, dropdown, depthLevel, itemsClass }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass =
    depthLevel > 1
      ? "dropdown-submenu border-l-2 border-solid ml-2 rounded-none  "
      : "";
  return (
    <ul
      className={`dropdown-item border-l-2 border-solid ml-3 rounded-none lg:rounded-md lg:absolute w-[95%] lg:w-max  ${itemsClass} ${
        dropdown ? dropdownClass : "hidden"
      }`}
    >
      {submenus.map((submenu, index) => (
        <MenuItems
          items={submenu}
          key={index}
          depthLevel={depthLevel}
          itemsClass={itemsClass}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
