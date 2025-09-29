

export const returnNameInArrMiOpts = (name) => {
  
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  const replaceSpace4 = removeDoubleSpace.replace("    ", " ");
  const replaceSpace3 = replaceSpace4.replace("   ", " ");
  const replaceSpace2 = replaceSpace3.replace("  ", " ");
  const stickToSpace = replaceSpace2.replace("-", " ")
  console.log(stickToSpace);
  let sliceFlags = stickToSpace.indexOf("₽") != -1 ? stickToSpace.split("₽", 2) : stickToSpace;
  let reverseStrName = name.split("").reverse().join("");

  // let removeRUB =
  //   reverseStrName[0] === "-" ? reverseStrName.slice(1) : reverseStrName;
  let splitStick =
    reverseStrName.indexOf("-") !== -1
      ? reverseStrName.split("-")[1]
      : reverseStrName;

  let splitPrice =
    splitStick.indexOf(" ") !== -1 ? /\s(.+)/.exec(splitStick)[1] : splitStick;

  let reverseBackStrName = splitPrice.split("").reverse().join("");
  

  return reverseBackStrName + sliceFlags[1];
};

export const returnExtraPriceMiOpts = (name) => {
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  const stickToSpace = removeDoubleSpace.replace("-", " ")
  let reverseStrName = stickToSpace.split("").reverse().join("");
  let sliceFlags =
    reverseStrName.indexOf("₽") != -1
      ? reverseStrName.split("₽", 2)
      : reverseStrName;
  let slicePrice =
    sliceFlags[1].indexOf("-") != -1 && sliceFlags[1].indexOf("Wi-Fi") == -1
      ? sliceFlags[1].split("-", 2)
      : sliceFlags[1];
  let slicePrice1 =
    slicePrice.indexOf(" ") != -1
      ? slicePrice.split(" ", 2)
      : slicePrice;
  let reverseBackStrName = slicePrice1[0].split("").reverse().join("");
  let extraPrice = Number(reverseBackStrName) + 700;

  return extraPrice;
};

export const returnStockPriceMiOpts = (name) => {
  
  const stickToSpace = name.replace("-", " ")
  const removeDoubleSpace = stickToSpace.replace(/\s+/g, " ");
  let reverseStrName = removeDoubleSpace.split("").reverse().join("");
  let sliceFlags =
    reverseStrName.indexOf("₽") != -1
      ? reverseStrName.split("₽", 2)
      : reverseStrName;

  let slicePrice =
    sliceFlags[1].indexOf("-") != -1 && sliceFlags[1].indexOf("Wi-Fi") == -1
      ? sliceFlags[1].split("-", 2)
      : sliceFlags[1].split(" ", 2);
  let reverseBackStrName = slicePrice[0].split("").reverse().join("");

  let extraPrice = Number(reverseBackStrName) + 400;
  return extraPrice;
};

export const fixNameMiOpts = (name) => {
  // const toLowercase = name.toLowerCase();
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  const removeNewIcon = removeDoubleSpace.replace("🆕", "");

  const fixMI = removeNewIcon.replace("Xiaomi", "Mi");

  const fixPoco = fixMI.replace("Poco", "POCO");
  const replaceGB = fixPoco.replace("GB", "");
  const replace5G =
    replaceGB.indexOf("M55 ") !== -1 ||
    replaceGB.indexOf("A25 ") !== -1 ||
    replaceGB.indexOf("A35 ") !== -1 ||
    replaceGB.indexOf("A55 ") !== -1 ||
    replaceGB.indexOf("A26 ") !== -1 ||
    replaceGB.indexOf("A36 ") !== -1 ||
    replaceGB.indexOf("A56 ") !== -1 ||
    replaceGB.indexOf("S24 ") !== -1 ||
    replaceGB.indexOf("S25 ") !== -1 ||
    replaceGB.indexOf("Mi 1") !== -1 ||
    replaceGB.indexOf("POCO") !== -1 ||
    replaceGB.indexOf("X7 ") !== -1
      ? replaceGB.replace("5G", "")
      : replaceGB;
  const fixS24FE = replace5G.replace("S24FE", "S24 FE");
  const fixNote13ProPlus = fixS24FE.replace(
    "Note 13 Pro Plus",
    "Note 13 Pro +"
  );
  const fixNote14ProPlus = fixNote13ProPlus.replace(
    "Note 14 Pro Plus",
    "Note 14 Pro +"
  );
  const fix1 = fixNote14ProPlus.replace(
    " 1шт",
    ""
  );

  return fix1;
};
