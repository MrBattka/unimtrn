
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

export const returnNameInArrMiOpts = (name) => {
  let sliceFlags =
    name.indexOf("₽") != -1 ? name.split("₽", 2) : name;
  let reverseStrName = name.split("").reverse().join("");
  
  let removeRUB =
    reverseStrName[0] === "-" ? reverseStrName.slice(1) : reverseStrName;
  let splitStick = removeRUB.indexOf("-") !== -1 ? removeRUB.split("-")[1] : removeRUB
  
  let reverseBackStrName = splitStick.split("").reverse().join("");

  return reverseBackStrName + sliceFlags[1];
};

export const returnExtraPriceMiOpts = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let sliceFlags =
    reverseStrName.indexOf("₽") != -1 ? reverseStrName.split("₽", 2) : reverseStrName;
    let slicePrice =
    sliceFlags[1].indexOf("-") != -1 && sliceFlags[1].indexOf("Wi-Fi") ==-1 ? sliceFlags[1].split("-", 2) : sliceFlags[1];
  let reverseBackStrName = slicePrice[0].split("").reverse().join("");
  let extraPrice = Number(reverseBackStrName) + 700

  return extraPrice;
};

export const returnStockPriceMiOpts = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let sliceFlags =
    reverseStrName.indexOf("₽") != -1 ? reverseStrName.split("₽", 2) : reverseStrName;
    let slicePrice =
    sliceFlags[1].indexOf("-") != -1 && sliceFlags[1].indexOf("Wi-Fi") ==-1 ? sliceFlags[1].split("-", 2) : sliceFlags[1];
  let reverseBackStrName = slicePrice[0].split("").reverse().join("");
// console.log(reverseBackStrName);


  let extraPrice = Number(reverseBackStrName) + 400

  return extraPrice;
};

export const fixNameMiOpts = (name) => {
  // const toLowercase = name.toLowerCase();
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  const removeNewIcon = removeDoubleSpace.replace("🆕", "");


  const fixMI = removeNewIcon.replace("Xiaomi", "Mi");
  const replaceWatchWithSpace = fixMI.replace("⌚️ ", "");
  const replaceWatch = replaceWatchWithSpace.replace("⌚", "");
  const fixRedmi = replaceWatch.replace("Redmi", "");
  const fixPoco = fixRedmi.replace("Poco", "POCO");
  const fixS23FE = fixPoco.replace("S23FE", "S23 Fe");
  const fixS24FE = fixS23FE.replace("S24FE", "S24 Fe");
  const fixS25FE = fixS24FE.replace("S25FE", "S25 Fe");
  const fixGray = fixS25FE.replace("Grey", "Gray");
  const replaceGB = fixGray.replace("GB", "");

  const replace5G = (replaceGB.indexOf("POCO X7") !== -1 || replaceGB.indexOf("A25") !== -1
|| replaceGB.indexOf("POCO X7") !== -1 || replaceGB.indexOf("POCO X7") !== -1 ||
replaceGB.indexOf("A26") !== -1 || replaceGB.indexOf("A35") !== -1 ||
replaceGB.indexOf("A36") !== -1 || replaceGB.indexOf("A55") !== -1 ||
replaceGB.indexOf("A56") !== -1 || replaceGB.indexOf("S23") !== -1 ||
replaceGB.indexOf("S24") !== -1 || replaceGB.indexOf("S25") !== -1 ||
replaceGB.indexOf("M55") !== -1) ? replaceGB.replace("5G ", "") : replaceGB
  

  return replace5G;
};
