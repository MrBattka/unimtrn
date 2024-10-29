export const returnXiaomi = (el) => {
  return (
    el.name.indexOf("Redmi Buds") != -1 ||
    el.name.indexOf("Redmi Note") != -1 ||
    el.name.indexOf("Redmi") != -1 ||
    el.name.indexOf("Note") != -1 ||
    el.name.indexOf("Mi Watch") != -1 ||
    el.name.indexOf("Mi ") != -1 ||
    el.name.indexOf("MI ") != -1 ||
    el.name.indexOf("Poco") != -1 ||
    el.name.indexOf("POCO") != -1
  );
};
