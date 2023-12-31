export const flatListToHierarchical = (items, id = null, link = "parentId") =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({
      ...item,
      children: flatListToHierarchical(items, item.id),
    }));
