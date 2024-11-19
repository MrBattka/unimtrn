export const baseFix = (el) => {
  return (
    el[0] !== "(" &&
    el.name?.indexOf("MagEZ Case") == -1 &&
    el.name?.indexOf("PITAKA") == -1 &&
    el.name?.indexOf("USB-C 25W") == -1 &&
    el.name?.indexOf("Кабель") == -1 &&
    el.name?.indexOf("Charge Cable") == -1 &&
    el.name?.indexOf("20W") == -1 &&
    el.name?.indexOf("USB-С Lightning") == -1 &&
    el.name?.indexOf("Муляж") == -1 &&
    el.name?.indexOf("кожа") == -1 &&
    el.name?.indexOf("Silicon") == -1 &&
    el.name?.indexOf("Grip Case") == -1 &&
    el.name?.indexOf("Sult Case") == -1 &&
    el.name?.indexOf("Power Bank") == -1 &&
    el.name?.indexOf("Magez") == -1 &&
    el.name?.indexOf("Transparent") == -1 &&
    el.name?.indexOf("Transpаrent") == -1 &&
    el.name?.indexOf("Power Adapter") == -1 &&
    el.name?.indexOf("Travel Bag") == -1 &&
    el.name?.indexOf("Anti-Slip Stand") == -1 &&
    el.name?.indexOf("ModCase for") == -1 &&
    el.name?.indexOf("Cooling Fans") == -1 &&
    el.name?.indexOf("Protective Standing") == -1 &&
    el.name?.indexOf("Folio") == -1 &&
    el.name?.indexOf("царапин") == -1 &&
    el.name?.indexOf("ремонт") == -1 &&
    el.name?.indexOf("потертости") == -1 &&
    el.name?.indexOf("скол") == -1 &&
    el.name?.indexOf("пятна") == -1 &&
    el.name?.indexOf("замена") == -1 &&
    el.name?.indexOf("пиксель") == -1 &&
    el.name?.indexOf("на экране") == -1 &&
    el.name?.indexOf("мятый") == -1 &&
    el.name?.indexOf("открытый") == -1 &&
    el.name?.indexOf("дефект") == -1 &&
    el.name?.indexOf("No charger") == -1 &&
    el.name?.indexOf("открыт") == -1 &&
    el.name?.indexOf("Мятый") == -1 &&
    el.name?.indexOf("мятый") == -1 &&
    el.name?.indexOf("без пломб") == -1 &&
    el.name?.indexOf("прошит") == -1 &&
    el.name?.indexOf("вскрыт") == -1 &&
    el.name?.indexOf("реболл") == -1 &&
    el.name?.indexOf("коробка") == -1 &&
    el.name?.indexOf("угол") == -1 &&
    el.name?.indexOf("царапин") == -1 &&
    el.name?.indexOf("ремонт") == -1 &&
    el.name?.indexOf("потертости") == -1 &&
    el.name?.indexOf("скол") == -1 &&
    el.name?.indexOf("пятна") == -1 &&
    el.name?.indexOf("замена") == -1 &&
    el.name?.indexOf("пиксель") == -1 &&
    el.name?.indexOf("на экране") == -1 &&
    el.name?.indexOf("мятый") == -1 &&
    el.name?.indexOf("Мятый") == -1 &&
    el.name?.indexOf("открытый") == -1 &&
    el.name?.indexOf("дефект") == -1 &&
    el.name?.indexOf("вскрыт") == -1 &&
    el.name?.indexOf("реболл") == -1 &&
    el.name?.indexOf("No charger") == -1 &&
    el.name?.indexOf("открыт") == -1 &&
    el.name?.indexOf("Мятый") == -1 &&
    el.name?.indexOf("мятый") == -1 &&
    el.name?.indexOf("без пломб") == -1 &&
    el.name?.indexOf("прошит") == -1 &&
    el.name?.indexOf("вскрыт") == -1 &&
    el.name?.indexOf("угол") == -1 &&
    el.name?.indexOf("прошит") == -1 &&
    el.name?.indexOf("потерто") == -1 &&
    el.name?.indexOf("экран") == -1 &&
    el.name?.indexOf("realme") == -1 &&
    el.name?.indexOf("актив") == -1 &&
    el.name.indexOf("обменка") == -1 &&
    el.name?.indexOf("уцен") == -1 &&
    el.name?.indexOf("обме") == -1 &&
    el.name?.indexOf("короб") == -1 &&
    el.name?.indexOf("пломба") == -1 &&
    el.name.indexOf('""') == -1 &&
    el !== "Товар"
  );
};

export const baseFixHi = (el) => {
  return (
    el[0] !== "(" &&
    el.name?.indexOf("MagEZ Case") == -1 &&
    el.name?.indexOf("PITAKA") == -1 &&
    el.name?.indexOf("USB-C 25W") == -1 &&
    el.name?.indexOf("Кабель") == -1 &&
    el.name?.indexOf("Charge Cable") == -1 &&
    el.name?.indexOf("20W") == -1 &&
    el.name?.indexOf("USB-С Lightning") == -1 &&
    el.name?.indexOf("Муляж") == -1 &&
    el.name?.indexOf("кожа") == -1 &&
    el.name?.indexOf("Silicon") == -1 &&
    el.name?.indexOf("Grip Case") == -1 &&
    el.name?.indexOf("Sult Case") == -1 &&
    el.name?.indexOf("питания MacBook") == -1 &&
    el.name?.indexOf("\u2757") == -1 &&
    el.name?.indexOf("💻 Mac 💻") == -1 &&
    el.name?.indexOf("≪  MacBook Air 13  ≫") == -1 &&
    el.name?.indexOf("≪  MacBook Pro 13  ≫") == -1 &&
    el.name?.indexOf("≪  MacBook Air 15  ≫") == -1 &&
    el.name?.indexOf("📂") == -1 &&
    el.name?.indexOf("🔥🔥  14 Pro Max  🔥") == -1 &&
    el.name?.indexOf("🔥🔥  14 Pro  🔥") == -1 &&
    el.name?.indexOf("AirPods 1 ") == -1 &&
    el.name?.indexOf("FNEH3") == -1 &&
    el.name?.indexOf("━─") == -1 &&
    el.name?.indexOf("SE2 40/") == -1 &&
    el.name?.indexOf("AirPods Pro 2 Type-C Left") == -1 &&
    el.name?.indexOf("AirPods 2 Case") == -1 &&
    el.name?.indexOf("INSTINCT") == -1 &&
    el.name?.indexOf("🎧AirPods 🎧") == -1 &&
    el.name?.indexOf("A03s") == -1 &&
    el.name?.indexOf("≪SE 2≫") == -1 &&
    el.name?.indexOf("S20 ") == -1 &&
    el.name?.indexOf("S21 ") == -1 &&
    el.name?.indexOf("S22 ") == -1 &&
    el.name?.indexOf("Tab A8") == -1 &&
    el.name?.indexOf("Tab S8") == -1 &&
    el.name?.indexOf("Tab A9") == -1 &&
    el.name?.indexOf("🎵 Airpods") == -1 &&
    el.name?.indexOf("царапин") == -1 &&
    el.name?.indexOf("ремонт") == -1 &&
    el.name?.indexOf("потертости") == -1 &&
    el.name?.indexOf("скол") == -1 &&
    el.name?.indexOf("пятна") == -1 &&
    el.name?.indexOf("замена") == -1 &&
    el.name?.indexOf("пиксель") == -1 &&
    el.name?.indexOf("на экране") == -1 &&
    el.name?.indexOf("мятый") == -1 &&
    el.name?.indexOf("Мятый") == -1 &&
    el.name?.indexOf("открытый") == -1 &&
    el.name?.indexOf("дефект") == -1 &&
    el.name?.indexOf("вскрыт") == -1 &&
    el.name?.indexOf("реболл") == -1 &&
    el.name?.indexOf("No charger") == -1 &&
    el.name?.indexOf("открыт") == -1 &&
    el.name?.indexOf("Мятый") == -1 &&
    el.name?.indexOf("мятый") == -1 &&
    el.name?.indexOf("без пломб") == -1 &&
    el.name?.indexOf("прошит") == -1 &&
    el.name?.indexOf("вскрыт") == -1 &&
    el.name?.indexOf("угол") == -1 &&
    el.name?.indexOf("прошит") == -1 &&
    el.name?.indexOf("потерто") == -1 &&
    el.name?.indexOf("экран") == -1 &&
    el.name?.indexOf("realme") == -1 &&
    el.name?.indexOf("актив") == -1 &&
    el.name.indexOf("обменка") == -1 &&
    el.name?.indexOf("уцен") == -1 &&
    el.name?.indexOf("обме") == -1 &&
    el.name?.indexOf("короб") == -1 &&
    el.name?.indexOf("пломба") == -1 &&
    el.name.indexOf('""') == -1
  );
};

export const baseFixMiHonor = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return (
    toLowerCase.indexOf("оптом") == -1 &&
    toLowerCase.indexOf("———") == -1 &&
    toLowerCase.indexOf("желаем") == -1 &&
    toLowerCase.indexOf("mihonor") == -1 &&
    toLowerCase.indexOf("доброе") == -1 &&
    toLowerCase.indexOf("телефоны") == -1 &&
    toLowerCase.indexOf("заказать") == -1 &&
    toLowerCase.indexOf("bekkorolev") == -1 &&
    toLowerCase.indexOf("+7-") == -1 &&
    toLowerCase.indexOf("самовывоз") == -1 &&
    toLowerCase.indexOf("тихорецкий") == -1 &&
    toLowerCase.indexOf("*") == -1 &&
    toLowerCase.indexOf("от") == -1 &&
    toLowerCase.indexOf("электросамокат") == -1 &&
    (toLowerCase === "wi-fi  "
      ? toLowerCase.indexOf("wi-fi") == -1
      : toLowerCase) &&
    toLowerCase?.indexOf("царапин") == -1 &&
    toLowerCase?.indexOf("ремонт") == -1 &&
    toLowerCase?.indexOf("потертости") == -1 &&
    toLowerCase?.indexOf("скол") == -1 &&
    toLowerCase?.indexOf("пятна") == -1 &&
    toLowerCase?.indexOf("замена") == -1 &&
    toLowerCase?.indexOf("пиксель") == -1 &&
    toLowerCase?.indexOf("на экране") == -1 &&
    toLowerCase?.indexOf("мятый") == -1 &&
    toLowerCase?.indexOf("Мятый") == -1 &&
    toLowerCase?.indexOf("открытый") == -1 &&
    toLowerCase?.indexOf("дефект") == -1 &&
    toLowerCase?.indexOf("вскрыт") == -1 &&
    toLowerCase?.indexOf("реболл") == -1 &&
    toLowerCase?.indexOf("No charger") == -1 &&
    toLowerCase?.indexOf("открыт") == -1 &&
    toLowerCase?.indexOf("Мятый") == -1 &&
    toLowerCase?.indexOf("мятый") == -1 &&
    toLowerCase?.indexOf("без пломб") == -1 &&
    toLowerCase?.indexOf("прошит") == -1 &&
    toLowerCase?.indexOf("вскрыт") == -1 &&
    toLowerCase?.indexOf("угол") == -1 &&
    toLowerCase?.indexOf("прошит") == -1 &&
    toLowerCase?.indexOf("потерто") == -1 &&
    toLowerCase?.indexOf("экран") == -1 &&
    toLowerCase?.indexOf("realme") == -1 &&
    toLowerCase?.indexOf("актив") == -1 &&
    toLowerCase.indexOf("обменка") == -1 &&
    toLowerCase?.indexOf("уцен") == -1 &&
    toLowerCase?.indexOf("обме") == -1 &&
    toLowerCase?.indexOf("короб") == -1 &&
    toLowerCase?.indexOf("пломба") == -1 &&
    toLowerCase.indexOf('""') == -1
  );
};

export const baseFixMiOpts = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return (
    toLowerCase.indexOf("оптом") == -1 &&
    toLowerCase.indexOf("miopt") == -1 &&
    toLowerCase.indexOf("метро") == -1 &&
    toLowerCase.indexOf("тяк") == -1 &&
    toLowerCase.indexOf("мелочей") == -1 &&
    toLowerCase.indexOf("магазин") == -1 &&
    toLowerCase.indexOf("прайс") == -1 &&
    toLowerCase.indexOf("пишите") == -1 &&
    toLowerCase.indexOf("📞") == -1 &&
    toLowerCase.indexOf("rustam") == -1 &&
    toLowerCase.indexOf("📱") == -1 &&
    toLowerCase.indexOf("🔌") == -1 &&
    toLowerCase.indexOf("🇷🇺🇷🇺") == -1 &&
    toLowerCase.indexOf("armor") == -1 &&
    toLowerCase.indexOf("📲") == -1 &&
    toLowerCase.indexOf("канал") == -1 &&
    toLowerCase.indexOf("t.me") == -1 &&
    toLowerCase.indexOf("samsung") == -1 &&
    toLowerCase.indexOf("note🇷🇺") == -1 &&
    toLowerCase.indexOf("poco🇷🇺") == -1 &&
    toLowerCase.indexOf("mi 🇷🇺") == -1 &&
    toLowerCase.indexOf("от") == -1 &&
    toLowerCase.indexOf("pad🇷🇺") == -1 &&
    toLowerCase.indexOf("iphone🇪🇺") == -1 &&
    (toLowerCase === "honor🇷🇺"
      ? toLowerCase.indexOf("honor🇷🇺") == -1
      : toLowerCase) &&
    (toLowerCase === "itel🇷🇺"
      ? toLowerCase.indexOf("itel🇷🇺") == -1
      : toLowerCase) &&
    (toLowerCase === "realme🇷🇺"
      ? toLowerCase.indexOf("realme🇷🇺") == -1
      : toLowerCase) &&
    (toLowerCase === "tecno🇷🇺"
      ? toLowerCase.indexOf("tecno🇷🇺") == -1
      : toLowerCase) &&
    toLowerCase?.indexOf("царапин") == -1 &&
    toLowerCase?.indexOf("ремонт") == -1 &&
    toLowerCase?.indexOf("потертости") == -1 &&
    toLowerCase?.indexOf("скол") == -1 &&
    toLowerCase?.indexOf("пятна") == -1 &&
    toLowerCase?.indexOf("замена") == -1 &&
    toLowerCase?.indexOf("пиксель") == -1 &&
    toLowerCase?.indexOf("на экране") == -1 &&
    toLowerCase?.indexOf("мятый") == -1 &&
    toLowerCase?.indexOf("Мятый") == -1 &&
    toLowerCase?.indexOf("открытый") == -1 &&
    toLowerCase?.indexOf("дефект") == -1 &&
    toLowerCase?.indexOf("вскрыт") == -1 &&
    toLowerCase?.indexOf("реболл") == -1 &&
    toLowerCase?.indexOf("No charger") == -1 &&
    toLowerCase?.indexOf("открыт") == -1 &&
    toLowerCase?.indexOf("Мятый") == -1 &&
    toLowerCase?.indexOf("мятый") == -1 &&
    toLowerCase?.indexOf("без пломб") == -1 &&
    toLowerCase?.indexOf("прошит") == -1 &&
    toLowerCase?.indexOf("вскрыт") == -1 &&
    toLowerCase?.indexOf("угол") == -1 &&
    toLowerCase?.indexOf("прошит") == -1 &&
    toLowerCase?.indexOf("потерто") == -1 &&
    toLowerCase?.indexOf("экран") == -1 &&
    toLowerCase?.indexOf("realme") == -1 &&
    toLowerCase?.indexOf("актив") == -1 &&
    toLowerCase.indexOf("обменка") == -1 &&
    toLowerCase?.indexOf("уцен") == -1 &&
    toLowerCase?.indexOf("обме") == -1 &&
    toLowerCase?.indexOf("короб") == -1 &&
    toLowerCase?.indexOf("пломба") == -1 &&
    toLowerCase.indexOf('""') == -1
  );
};

export const baseFixSuperPrice = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return (
    toLowerCase.indexOf("⭕️") == -1 &&
    toLowerCase.indexOf("📷") == -1 &&
    toLowerCase.indexOf("🍏") == -1 &&
    toLowerCase.indexOf("➖") == -1 &&
    toLowerCase.indexOf("adapter") == -1 &&
    toLowerCase.indexOf("🇪🇺 xiaomi 🇪🇺") == -1 &&
    (toLowerCase === "huawei"
      ? toLowerCase.indexOf("huawei") == -1
      : toLowerCase) &&
    (toLowerCase === "airpods 2"
      ? toLowerCase.indexOf("airpods 2") == -1
      : toLowerCase) &&
    (toLowerCase === "sony"
      ? toLowerCase.indexOf("sony") == -1
      : toLowerCase) &&
    (toLowerCase === "google"
      ? toLowerCase.indexOf("google") == -1
      : toLowerCase) &&
    (toLowerCase === "apple"
      ? toLowerCase.indexOf("apple") == -1
      : toLowerCase) &&
    (toLowerCase === "oneplus"
      ? toLowerCase.indexOf("oneplus") == -1
      : toLowerCase) &&
    (toLowerCase === "samsung"
      ? toLowerCase.indexOf("samsung") == -1
      : toLowerCase) &&
    (toLowerCase === "xiaomi"
      ? toLowerCase.indexOf("xiaomi") == -1
      : toLowerCase) &&
    (toLowerCase === "garmin"
      ? toLowerCase.indexOf("garmin") == -1
      : toLowerCase) &&
    toLowerCase?.indexOf("царапин") == -1 &&
    toLowerCase?.indexOf("ремонт") == -1 &&
    toLowerCase?.indexOf("потертости") == -1 &&
    toLowerCase?.indexOf("скол") == -1 &&
    toLowerCase?.indexOf("пятна") == -1 &&
    toLowerCase?.indexOf("замена") == -1 &&
    toLowerCase?.indexOf("пиксель") == -1 &&
    toLowerCase?.indexOf("на экране") == -1 &&
    toLowerCase?.indexOf("мятый") == -1 &&
    toLowerCase?.indexOf("Мятый") == -1 &&
    toLowerCase?.indexOf("открытый") == -1 &&
    toLowerCase?.indexOf("дефект") == -1 &&
    toLowerCase?.indexOf("вскрыт") == -1 &&
    toLowerCase?.indexOf("реболл") == -1 &&
    toLowerCase?.indexOf("No charger") == -1 &&
    toLowerCase?.indexOf("открыт") == -1 &&
    toLowerCase?.indexOf("Мятый") == -1 &&
    toLowerCase?.indexOf("мятый") == -1 &&
    toLowerCase?.indexOf("без пломб") == -1 &&
    toLowerCase?.indexOf("прошит") == -1 &&
    toLowerCase?.indexOf("вскрыт") == -1 &&
    toLowerCase?.indexOf("угол") == -1 &&
    toLowerCase?.indexOf("прошит") == -1 &&
    toLowerCase?.indexOf("потерто") == -1 &&
    toLowerCase?.indexOf("экран") == -1 &&
    toLowerCase?.indexOf("realme") == -1 &&
    toLowerCase?.indexOf("актив") == -1 &&
    toLowerCase.indexOf("обменка") == -1 &&
    toLowerCase?.indexOf("уцен") == -1 &&
    toLowerCase?.indexOf("обме") == -1 &&
    toLowerCase?.indexOf("короб") == -1 &&
    toLowerCase?.indexOf("пломба") == -1 &&
    toLowerCase.indexOf('""') == -1
  );
};

export const baseFixBase = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("left") != -1 ||
    toLowerCase?.indexOf("левый") != -1 ||
    toLowerCase?.indexOf("right") != -1 ||
    toLowerCase?.indexOf("правый") != -1 ||
    toLowerCase?.indexOf("case") != -1 ||
    toLowerCase?.indexOf("кейс") != -1
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
        toLowerCase.indexOf('"a"') == -1 &&
        toLowerCase.indexOf('"b"') == -1 &&
        toLowerCase.indexOf('"c"') == -1 &&
        toLowerCase.indexOf('"a+"') == -1 &&
        toLowerCase.indexOf('"b+"') == -1 &&
        toLowerCase.indexOf('"c+"') == -1 &&
        toLowerCase.indexOf('"a-"') == -1 &&
        toLowerCase.indexOf('"b-"') == -1 &&
        toLowerCase.indexOf('"c-"') == -1 &&
        toLowerCase?.indexOf("царапин") == -1 &&
        toLowerCase?.indexOf("ремонт") == -1 &&
        toLowerCase?.indexOf("потертости") == -1 &&
        toLowerCase?.indexOf("скол") == -1 &&
        toLowerCase?.indexOf("пятна") == -1 &&
        toLowerCase?.indexOf("замена") == -1 &&
        toLowerCase?.indexOf("пиксель") == -1 &&
        toLowerCase?.indexOf("на экране") == -1 &&
        toLowerCase?.indexOf("мятый") == -1 &&
        toLowerCase?.indexOf("Мятый") == -1 &&
        toLowerCase?.indexOf("открытый") == -1 &&
        toLowerCase?.indexOf("дефект") == -1 &&
        toLowerCase?.indexOf("вскрыт") == -1 &&
        toLowerCase?.indexOf("реболл") == -1 &&
        toLowerCase?.indexOf("No charger") == -1 &&
        toLowerCase?.indexOf("открыт") == -1 &&
        toLowerCase?.indexOf("Мятый") == -1 &&
        toLowerCase?.indexOf("мятый") == -1 &&
        toLowerCase?.indexOf("без пломб") == -1 &&
        toLowerCase?.indexOf("прошит") == -1 &&
        toLowerCase?.indexOf("вскрыт") == -1 &&
        toLowerCase?.indexOf("угол") == -1 &&
        toLowerCase?.indexOf("прошит") == -1 &&
        toLowerCase?.indexOf("потерто") == -1 &&
        toLowerCase?.indexOf("экран") == -1 &&
        toLowerCase?.indexOf("realme") == -1 &&
        toLowerCase?.indexOf("актив") == -1 &&
        toLowerCase.indexOf("обменка") == -1 &&
        toLowerCase?.indexOf("уцен") == -1 &&
        toLowerCase?.indexOf("обме") == -1 &&
        toLowerCase?.indexOf("короб") == -1 &&
        toLowerCase?.indexOf("пломба") == -1 &&
        toLowerCase.indexOf('""') == -1;
};
