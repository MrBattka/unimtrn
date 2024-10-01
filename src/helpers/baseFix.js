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
    el.Товар?.indexOf("Docking Station") == -1 &&
    el.Товар?.indexOf("Doсking Station") == -1 &&
    el.Товар?.indexOf("Power Bank") == -1 &&
    el.Товар?.indexOf("Magez") == -1 &&
    el.Товар?.indexOf("Transparent") == -1 &&
    el.Товар?.indexOf("Transpаrent") == -1 &&
    el.Товар?.indexOf("Power Adapter") == -1 &&
    el.Товар?.indexOf("Travel Bag") == -1 &&
    el.Товар?.indexOf("Anti-Slip Stand") == -1 &&
    el.Товар?.indexOf("ModCase for") == -1 &&
    el.Товар?.indexOf("Cooling Fans") == -1 &&
    el.Товар?.indexOf("Protective Standing") == -1 &&
    el.Товар?.indexOf("Folio") == -1 &&
    el.Товар?.indexOf("царапин") == -1 &&
    el.Товар?.indexOf("ремонт") == -1 &&
    el.Товар?.indexOf("потертости") == -1 &&
    el.Товар?.indexOf("скол") == -1 &&
    el.Товар?.indexOf("пятна") == -1 &&
    el.Товар?.indexOf("замена") == -1 &&
    el.Товар?.indexOf("пиксель") == -1 &&
    el.Товар?.indexOf("на экране") == -1 &&
    el.Товар?.indexOf("мятый") == -1 &&
    el.Товар?.indexOf("открытый") == -1 &&
    el.Товар?.indexOf("дефект") == -1 &&
    el !== "Товар"
  );
};