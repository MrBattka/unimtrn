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
];

export const checkFixPrice = (el) => {
  return flags.reduce(
    (acc, current) => acc && el.Товар.indexOf(current) === -1,
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
