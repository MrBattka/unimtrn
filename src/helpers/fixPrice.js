export const returnFixPrice = (el, prod) => {
  if (
    el.Товар.indexOf("🇪🇺") == -1 &&
    el.Товар.indexOf("🇰🇼") == -1 &&
    el.Товар.indexOf("🇮🇳") == -1 &&
    el.Товар.indexOf("🇯🇵") == -1 &&
    el.Товар.indexOf("🇺🇸") == -1 &&
    el.Товар.indexOf("🇭🇰") == -1 &&
    el.Товар.indexOf("🇬🇧") == -1 &&
    el.Товар.indexOf("🇨🇳") == -1 &&
    el.Товар.indexOf("🇬🇧") == -1 &&
    el.Товар.indexOf("🇬🇧") == -1 &&
    el.Товар.indexOf("🇹🇼") == -1 &&
    el.Товар.indexOf("🇷🇺") == -1 &&
    el.Товар.indexOf("🇦🇺") == -1 &&
    el.Товар.indexOf("🇧🇷") == -1 &&
    el.Товар.indexOf("🇨🇦") == -1 &&
    el.Товар.indexOf("🇨🇱") == -1 &&
    el.Товар.indexOf("🇹🇭") == -1 &&
    el.Товар.indexOf("🇻🇳") == -1 &&
    el.Товар.indexOf("🇸🇬") == -1 &&
    el.Товар.indexOf("🇲🇾") == -1 &&
    el.Товар.indexOf("🇨🇫") == -1 &&
    el.Товар.indexOf("🇰🇿") == -1
  ) {
    return `${prod} - `;
  } else {
    return prod;
  }
};
