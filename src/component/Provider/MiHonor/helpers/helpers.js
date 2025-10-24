import { additionalCost } from "../../../../helpers/newPrice";

const fixFlags = (str) => {
  const result = [];

  let current = str;
  for (let i = 1; i < str.length; i++) {
    current =
      current.slice(4) +
      " " +
      current[0] +
      current[1] +
      current[2] +
      current[3];
    result.push(current);
  }
  return result[0];
};

export const returnNameInArrMihonor = (name) => {
  let removeRub = name.indexOf("₽") !== -1 ? name.split("₽")[0] : name;

  let reverseStrName = removeRub.split("").reverse().join("");

  let splitPrice =
    reverseStrName.indexOf(" ") !== -1
      ? /\s(.+)/.exec(reverseStrName)[1]
      : reverseStrName;
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return reverseBackStrName;
};

export const returnExtraPriceMihonor = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let removeSpaceName =
    reverseStrName[0] !== "₽" ? reverseStrName.slice(1) : reverseStrName;
  let removeRUB =
    removeSpaceName[0] === "₽" ? removeSpaceName.slice(1) : reverseStrName;
  let splitPrice =
    removeRUB.indexOf(" ") !== -1 ? removeRUB.split(" ")[0] : removeRUB;
  let reverseBackStrName = splitPrice.split("").reverse().join("");

  return additionalCost(reverseBackStrName);
};

export const returnStockPriceMihonor = (name) => {
  let removeRub1 = name.indexOf("₽") !== -1 ? name.split("₽")[0] : name;
  let reverseStrName = removeRub1.split("").reverse().join("");
  let removeRub = reverseStrName.indexOf(" ") !== -1 ? reverseStrName.split(" ")[0] : reverseStrName;
  let reverseBackStrName = removeRub.split("").reverse().join("");
  let replaceDot = reverseBackStrName.replace(".", "")

  return replaceDot;
};

export const fixNameMihonor = (name) => {
  // const toLowercase = name.toLowerCase();
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  const removeNewIcon = removeDoubleSpace.replace("🆕", "");

  const removeGB = removeNewIcon.replace(".", "");
  const removeGb = removeGB.replace("MM", "mm");
  const remove264 = removeGb.replace("FENIX", "Fenix");
  const remove2128 = remove264.replace(",", "");
  const remove464 = remove2128.replace("SAPPHIRE", "Sapphire");
  const remove4128 = remove464.replace("QUATIX", "Quatix");
  const remove4256 = remove4128.replace("EPIX PRO (GEN 2)", "Epix Pro (Gen 2)");
  const remove664 = remove4256.replace("INSTINCT", "Instinct");
  const remove6128 = remove664.replace("Fenix 8 -", "Fenix 8");
  const remove6256 = remove6128.replace("Fenix 8-", "Fenix 8");
  const remove8128 = remove6256.replace("Quatix 8 -", "Quatix 8 ");
  const remove8256gb = remove8128.replace("PRO -", "Pro ");
  const remove8512 = remove8256gb.replace("BLACK", "Black");
  const remove12256 = remove8512.replace("ORANGE", "Orange");
  const remove12512 = remove12256.replace("BLUE", "Blue");
  const remove121 = remove12512.replace("SOLAR", "Solar");
  const remove16256 = remove121.replace("mm -", "mm ");
  const remove16512 = remove16256.replace("16+512", "16/512");
  const remove161 = remove16512.replace("16+1TB", "15/1tb");
  const remove162 = remove161.replace("16+2TB", "16/2tb");
  const fix161024 = remove162.replace("16+1024", "16/1tb");
  const removeA174G = fix161024.replace("A17 4G", "A17");
  const fixBLCK = removeA174G.replace("BLACК", "Black");
  const fixForerunner = fixBLCK.replace("Foorerunner", "Forerunner");
  const replaceGarmin = fixForerunner.replace("GARMIN ", "");

  const fixProPlus = replaceGarmin  .replace("PRO PLUS", "Pro +");
  const remove8256 = fixProPlus.replace("8+256", "8/256");

  const fixMi =
    returnNameInArrMihonor(name.toLowerCase())[0] === "M"
      ? remove8256.replace("MI ", "XIAOMI ")
      : remove8256;

  const fixA5G =
    fixMi.indexOf("A25") !== -1 ||
    fixMi.indexOf("A26") !== -1 ||
    fixMi.indexOf("A35") !== -1 ||
    fixMi.indexOf("A36") !== -1 ||
    fixMi.indexOf("A55") !== -1 ||
    fixMi.indexOf("A56") !== -1
      ? fixMi.replace("5G ", "")
      : fixMi;

  const remove874g = fixA5G.replace("8.7 4G ", "");
  const remove874wifi = remove874g.replace("8.7 WI FI ", "");

  const removeLightGreen = remove874wifi.replace("LIGHT GREEN", "green");
  const fixA9Plus = removeLightGreen.replace("SAMSUNG A9 PLUS", "Tab A9 +");
  const fixGray = fixA9Plus.replace("GREY", "gray");
  const removeLightViolet = fixGray.replace("LIGHT VIOLET", "violet");
  const fix1TB = removeLightViolet.replace("+1024GB", "/1Tb");
  const fixmi5g =
    fix1TB.indexOf("MI 13") !== -1 || fix1TB.indexOf("MI 14") !== -1
      ? fix1TB.replace("5G", "")
      : fix1TB;

  const fixm55s =
    fixmi5g.indexOf("M55S") !== -1 ? fixmi5g.replace("5G ", "") : fixmi5g;

  const fix8255GB = fixm55s.replace("8+255", "8/256");
  const fix8256 = fix8255GB.replace("8 256", "8/256");
  const fix8128 = fix8256.replace("8 128", "8/128");
  const fix12256 = fix8128.replace("12 256", "12/256");
  const fix6128 = fix12256.replace("6 128", "6/128");
  const fix4128 = fix6128.replace("4 128", "4/128");
  const fix121024 = fix4128.replace("12+1024", "12/1tb");
  const fix364 = fix121024.replace("3+64", "3/64");
  const fixNote14ProPlus = fix364.replace("NOTE 14 PRO PLUS", "NOTE 14 PRO +");
  const replace5G =
    fixNote14ProPlus.indexOf("X7") !== -1
      ? fixNote14ProPlus.replace("5G ", "")
      : fixNote14ProPlus;
  const fix12512 = replace5G.replace("12+ 512", "12/512");

  return fix12512;
};
