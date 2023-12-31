import request from "graphql-request";

import { flatListToHierarchical } from "/components/common/flatListToHierarchical";

const getMenus = async () => {
  const RawMenuItemsQuery = `{
      menuItems(first: 20) {
          nodes {
            id
            label
            url
            parentId
          }
        }
      }`;
  const { menuItems } = await request(
    process.env.END_POINT_API,
    RawMenuItemsQuery
  );
  const menuDatas = flatListToHierarchical(menuItems.nodes);
  return menuDatas;
};
// const menus = await getMenus();
export default getMenus;
