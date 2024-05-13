export const baseFix = (el) => {
  return (
    el[0] !== "(" &&
    el.Товар?.indexOf("MagEZ Case") == -1 &&
    el.Товар?.indexOf("PITAKA") == -1 &&
    el.Товар?.indexOf("USB-C 25W") == -1 &&
    el.Товар?.indexOf("Кабель") == -1 &&
    el.Товар?.indexOf("Charge Cable") == -1 &&
    el.Товар?.indexOf("20W") == -1 &&
    el.Товар?.indexOf("USB-С Lightning") == -1 &&
    el.Товар?.indexOf("Муляж") == -1 &&
    el.Товар?.indexOf("кожа") == -1 &&
    el.Товар?.indexOf("Silicon") == -1 &&
    el.Товар?.indexOf("Grip Case") == -1 &&
    el.Товар?.indexOf("Sult Case") == -1 &&
    el !== "Товар"
  );
};

export const baseFixHi = (el) => {
  return (
    el[0] !== "(" &&
    el.Hi?.indexOf("MagEZ Case") == -1 &&
    el.Hi?.indexOf("PITAKA") == -1 &&
    el.Hi?.indexOf("USB-C 25W") == -1 &&
    el.Hi?.indexOf("Кабель") == -1 &&
    el.Hi?.indexOf("Charge Cable") == -1 &&
    el.Hi?.indexOf("20W") == -1 &&
    el.Hi?.indexOf("USB-С Lightning") == -1 &&
    el.Hi?.indexOf("Муляж") == -1 &&
    el.Hi?.indexOf("кожа") == -1 &&
    el.Hi?.indexOf("Silicon") == -1 &&
    el.Hi?.indexOf("Grip Case") == -1 &&
    el.Hi?.indexOf("Sult Case") == -1 &&
    el.Hi?.indexOf("питания MacBook") == -1 &&
    el.Hi?.indexOf("\u2757") == -1 &&
    el.Hi?.indexOf("💻 Mac 💻") == -1 &&
    el.Hi?.indexOf("≪  MacBook Air 13  ≫") == -1 &&
    el.Hi?.indexOf("≪  MacBook Pro 13  ≫") == -1 &&
    el.Hi?.indexOf("≪  MacBook Air 15  ≫") == -1 &&
    el.Hi?.indexOf("📂 iPad  MINI 6 📂") == -1 &&
    el.Hi?.indexOf("🎧AirPods 🎧") == -1 &&
    el.Hi?.indexOf("≪SE 2≫") == -1 &&
    el !== "Товар"
  );
};