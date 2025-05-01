export const returnFixNameBase= (name) => {
    const replaceGB = name.replace("GB", "")
    const replaceNote4G= replaceGB.indexOf("Note ") ? replaceGB.replace("4G ", "") : replaceGB
    const fixPlus = replaceNote4G.replace("Plus", "+")
    const fixNordCE3 = fixPlus.replace("Nord CE 3", "Nord CE3")
    const replaceGalaxy = fixNordCE3.replace("Galaxy ", "")
    const replaceMacBook = replaceGalaxy.replace("MacBook ", "")
    const fixMi = replaceMacBook.replace("Xiaomi 1", "MI 1")
    const fixPOCO = fixMi.replace("Pocophone", "POCO")
    const replaceWatch = fixPOCO.replace("Watch S10", "S10")
    

    const replace5G = (replaceWatch.indexOf("POCO X7") !== -1 || replaceWatch.indexOf("A25") !== -1
  || replaceWatch.indexOf("POCO X7") !== -1 || replaceWatch.indexOf("POCO X7") !== -1 ||
  replaceWatch.indexOf("A26") !== -1 || replaceWatch.indexOf("A35") !== -1 ||
  replaceWatch.indexOf("A36") !== -1 || replaceWatch.indexOf("A55") !== -1 ||
  replaceWatch.indexOf("A56") !== -1 || replaceWatch.indexOf("S23") !== -1 ||
  replaceWatch.indexOf("S24") !== -1 || replaceWatch.indexOf("S25") !== -1 ||
  replaceWatch.indexOf("M55") !== -1 || replaceWatch.indexOf("A53") !== -1) ? replaceWatch.replace("5G ", "") : replaceWatch

    return replace5G
}