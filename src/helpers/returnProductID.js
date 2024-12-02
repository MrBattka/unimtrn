export const returnID = (nameStock) => {
  const removeDoubleSpace = nameStock.replace(/\s+/g, " ");
  const name = removeDoubleSpace.toLowerCase();

  const productIDObject = {
    36618: name.indexOf("a15 ") !== -1 &&
    name.indexOf("8/256") !== -1 &&
    name.indexOf("yellow") !== -1,
    12529: name.indexOf("airpods 2") !== -1,
    23458: name.indexOf("airpods 3") !== -1 && name.indexOf("magsafe") !== -1,
    28263: name.indexOf("15 pro 128 natural") !== -1,
    
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
  for (const key in productIDObject) {
    const element = productIDObject[key];
    if (Object.prototype.hasOwnProperty.call(productIDObject, key)) {
        if (element) {
            return key
        } else {
            return "No match"
        }
      
    }
  }
};
