const flags = [
  "🇪🇺",
  "🇰🇼",
  "🇮🇳",
  "🇯🇵",
  "🇺🇸",
  "🇭🇰",
  "🇬🇧",
  "🇨🇳",
  "🇬🇧",
  "🇬🇧",
  "🇹🇼",
  "🇷🇺",
  "🇦🇺",
  "🇧🇷",
  "🇨🇦",
  "🇨🇱",
  "🇹🇭",
  "🇻🇳",
  "🇸🇬",
  "🇲🇾",
  "🇨🇫",
  "🇰🇿",
  '🇦🇪',
  "🇿🇦",
  "🇯🇴",
  "🇵🇾",
  "🇮🇩"
];

export const checkFixPrice = (el) => {
  return flags.reduce(
    (acc, current) => acc && el.name.indexOf(current) === -1,
    true
  );
};
export const returnFixPrice = (el, prod) => {
  // console.log(prod + "prod");
  if (checkFixPrice(el)) {
    return `${prod} - `;
  } else {
    return prod;
  }
};

export const checkFixPrice1 = (el) => {
  return flags.reduce(
    (acc, current) => acc && el.name.indexOf(current) === -1,
    true
  );
};
export const returnFixPrice1 = (el, prod) => {
  // console.log(prod + "prod");
  if (checkFixPrice1(el)) {
    return `${prod} - `;
  } else {
    return prod;
  }
};


export const checkFixPriceHi = (el) => {
  return flags.reduce(
    (acc, current) => acc && el.name.indexOf(current) === -1,
    true
  );
};
export const returnFixPriceHi = (el, prod) => {
  // console.log(prod + "prod");
  if (checkFixPriceHi(el)) {
    return `${prod} - `;
  } else {
    return prod;
  }
};
