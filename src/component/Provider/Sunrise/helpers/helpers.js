const checkFlags = (str) => {
  let checkSpace1 = str[str.length - 1] === " " ? str.slice(0, -1) : str;
  let checkSpace2 =
    checkSpace1[checkSpace1.length - 1] === " "
      ? checkSpace1.slice(0, -1)
      : checkSpace1;
  let checkSpace3 =
    checkSpace2[checkSpace2.length - 1] === " "
      ? checkSpace2.slice(0, -1)
      : checkSpace2;
  let checkSpace4 =
    checkSpace3[checkSpace3.length - 1] === " "
      ? checkSpace3.slice(0, -1)
      : checkSpace3;

  if (
    checkSpace4.slice(0, 4) === `🇯🇵` ||
    checkSpace4.slice(0, 4) === "🇮🇳" ||
    checkSpace4.slice(0, 4) === "🇪🇺" ||
    checkSpace4.slice(0, 4) === "🇦🇪" ||
    checkSpace4.slice(0, 4) === "🇧🇷" ||
    checkSpace4.slice(0, 4) === "🇻🇳" ||
    checkSpace4.slice(0, 4) === "🇰🇼" ||
    checkSpace4.slice(0, 4) === "🇺🇸" ||
    checkSpace4.slice(0, 4) === "🇭🇰" ||
    checkSpace4.slice(0, 4) === "🇬🇧" ||
    checkSpace4.slice(0, 4) === "🇨🇳" ||
    checkSpace4.slice(0, 4) === "🇹🇼" ||
    checkSpace4.slice(0, 4) === "🇷🇺" ||
    checkSpace4.slice(0, 4) === "🇦🇺" ||
    checkSpace4.slice(0, 4) === "🇨🇦" ||
    checkSpace4.slice(0, 4) === "🇨🇱" ||
    checkSpace4.slice(0, 4) === "🇹🇭" ||
    checkSpace4.slice(0, 4) === "🇸🇬" ||
    checkSpace4.slice(0, 4) === "🇲🇾" ||
    checkSpace4.slice(0, 4) === "🇨🇫" ||
    checkSpace4.slice(0, 4) === "🇰🇿" ||
    checkSpace4.slice(0, 4) === "🇰🇷" ||
    checkSpace4.slice(0, 4) === "🇬🇺"
  ) {
    return `${checkSpace4.slice(4)} ${checkSpace4.slice(0, 4)}`
  } else {
    return checkSpace4
  }
};

export const returnFixNameSunrise = (name) => {
  const replaceFork = name.replace("🔌", "")
  const replaceMM = replaceFork.replace("mm", "")
  const replaceGb = replaceMM.replace("Gb", "")
  const replaceFireBall = replaceGb.replace("🔥", "")
  const replaceFlash = replaceFireBall.replace("⚡️", "")
  const replaceS8Year = replaceFlash.replace("S8 2022", "S8")
  const replaceS9Year = replaceS8Year.replace("S9 2023", "S9")

  return replaceS9Year;
};


export const returnNameInArrSunrise = (name) => {
   
  let checkSpace2 =
    name[name.length - 1] === " "
      ? name.slice(0, -1)
      : name;
  let checkSpace3 =
    checkSpace2[checkSpace2.length - 1] === " "
      ? checkSpace2.slice(0, -1)
      : checkSpace2;
  let checkSpace4 =
    checkSpace3[checkSpace3.length - 1] === " "
      ? checkSpace3.slice(0, -1)
      : checkSpace3;
 

  let splitPrice =
    checkSpace4.indexOf("(https") !== -1
      ? checkSpace4.split("(https")[0]
      : checkSpace4;
  let addNotCaseName = checkSpace4.indexOf("[без кейса]") !== -1 ? splitPrice + " [без кейса]" : splitPrice
  let addWithCaseName = checkSpace4.indexOf("[с кейсом]") !== -1 ? addNotCaseName + " [с кейсом]" : addNotCaseName
  
  return checkFlags(addWithCaseName);
};

export const returnStockPriceSunrise = (name) => {

  let reverseStrName = name.split("").reverse().join("");
  
  let checkSpace1 =
    reverseStrName[0] === " " ? reverseStrName.slice(1) : reverseStrName;
  let checkSpace2 = checkSpace1[0] === " " ? checkSpace1.slice(1) : checkSpace1;
  let checkSpace3 = checkSpace2[0] === " " ? checkSpace2.slice(1) : checkSpace2;
  let checkSpace4 = checkSpace3[0] === " " ? checkSpace3.slice(1) : checkSpace3;

  
  let removeStick = checkSpace4.indexOf("-")
    ? checkSpace4.split("-")[0]
    : checkSpace4;
  let reverseBackStrName = removeStick.split("").reverse().join("");
  let replaceCase = reverseBackStrName.replace(" [без кейса]", "");
  let replaceWithCase = replaceCase.replace(" [с кейсом]", "");

  return returnFixNameSunrise(replaceWithCase).indexOf("00") !== -1 && returnFixNameSunrise(replaceWithCase);
};
