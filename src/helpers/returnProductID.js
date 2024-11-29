export const returnID = (nameStock) => {
  const removeDoubleSpace = nameStock.replace(/\s+/g, " ");
  const name = removeDoubleSpace.toLowerCase();

  const productIDObject = {
    12529: name.indexOf("airpods 2") !== -1,
    23458: name.indexOf("airpods 3") !== -1 && name.indexOf("magsafe") !== -1,
    28263: name.indexOf("15 pro 128 natural") !== -1,
    36618: name.indexOf("16 128 black") !== -1,
  };

//   return productIDObject[name] ?? "No match"

  //   for (const key in productIDObject) {
  //     const element = productIDObject[key];
  //     if (element) {
  //       return key;
  //     } else {
  //       return "No match";
  //     }
  //   }
const result = []
  for (const key of productIDObject) {
    const element = productIDObject[key];
    if (Object.prototype.hasOwnProperty.call(productIDObject, key)) {
        if (element) {
            return productIDObject[key]
        } else {
            return "No match"
        }
      
    }
  }
};
