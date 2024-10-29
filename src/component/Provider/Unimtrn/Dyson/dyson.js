export const returnDyson = (el) => {
  return (
    el.name.indexOf("Airwrap ") != -1 ||
    el.name.indexOf("V1") != -1 ||
    el.name.indexOf("Vented") != -1 ||
    el.name.indexOf("HD0") != -1 ||
    el.name.indexOf("HD1") != -1 ||
    el.name.indexOf("Gen5 Detect") != -1 ||
    el.name.indexOf("Gen 5 Detect") != -1 ||
    el.name.indexOf("RB0") != -1 ||
    el.name.indexOf("HT0") != -1 ||
    el.name.indexOf("HS0") != -1 ||
    el.name.indexOf("Designed") != -1 ||
    el.name.indexOf("Heapdphone") != -1 ||
    el.name.indexOf("PH04") != -1 ||
    el.name.indexOf("Wash G1 ") != -1 ||
    el.name.indexOf("Paddle Brush") != -1 ||
    el.name.indexOf("Supersonic Hair") != -1 ||
    el.name.indexOf("Air Purifier") != -1 ||
    el.name.indexOf("Vacuum Cleaner Micro") != -1
  );
};
