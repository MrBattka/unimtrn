export const baseFix = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return (
    el[0] !== "(" &&
    toLowerCase.indexOf("magez case") == -1 &&
    toLowerCase.indexOf("pitaka") == -1 &&
    toLowerCase.indexOf("usb-c 25w") == -1 &&
    toLowerCase.indexOf("Кабель") == -1 &&
    toLowerCase.indexOf("charge cable") == -1 &&
    toLowerCase.indexOf("20w") == -1 &&
    toLowerCase.indexOf("usb-c lightning") == -1 &&
    toLowerCase.indexOf("муляж") == -1 &&
    toLowerCase.indexOf("кожа") == -1 &&
    toLowerCase.indexOf("silicon") == -1 &&
    toLowerCase.indexOf("grip case") == -1 &&
    toLowerCase.indexOf("sult case") == -1 &&
    toLowerCase.indexOf("power bank") == -1 &&
    toLowerCase.indexOf("magez") == -1 &&
    toLowerCase.indexOf("transparent") == -1 &&
    toLowerCase.indexOf("transpаrent") == -1 &&
    toLowerCase.indexOf("power adapter") == -1 &&
    toLowerCase.indexOf("travel bag") == -1 &&
    toLowerCase.indexOf("anti-slip stand") == -1 &&
    toLowerCase.indexOf("modcase for") == -1 &&
    toLowerCase.indexOf("cooling fans") == -1 &&
    toLowerCase.indexOf("protective standing") == -1 &&
    toLowerCase.indexOf("folio") == -1 &&
    toLowerCase.indexOf("царапин") == -1 &&
    toLowerCase.indexOf("ремонт") == -1 &&
    toLowerCase.indexOf("потертости") == -1 &&
    toLowerCase.indexOf("скол") == -1 &&
    toLowerCase.indexOf("пятна") == -1 &&
    toLowerCase.indexOf("замена") == -1 &&
    toLowerCase.indexOf("пиксель") == -1 &&
    toLowerCase.indexOf("на экране") == -1 &&
    toLowerCase.indexOf("мятый") == -1 &&
    toLowerCase.indexOf("открытый") == -1 &&
    toLowerCase.indexOf("дефект") == -1 &&
    toLowerCase.indexOf("No charger") == -1 &&
    toLowerCase.indexOf("открыт") == -1 &&
    toLowerCase.indexOf("Мятый") == -1 &&
    toLowerCase.indexOf("мятый") == -1 &&
    toLowerCase.indexOf("без пломб") == -1 &&
    toLowerCase.indexOf("прошит") == -1 &&
    toLowerCase.indexOf("вскрыт") == -1 &&
    toLowerCase.indexOf("реболл") == -1 &&
    toLowerCase.indexOf("коробка") == -1 &&
    toLowerCase.indexOf("угол") == -1 &&
    toLowerCase.indexOf("царапин") == -1 &&
    toLowerCase.indexOf("ремонт") == -1 &&
    toLowerCase.indexOf("потертости") == -1 &&
    toLowerCase.indexOf("скол") == -1 &&
    toLowerCase.indexOf("пятна") == -1 &&
    toLowerCase.indexOf("замена") == -1 &&
    toLowerCase.indexOf("пиксель") == -1 &&
    toLowerCase.indexOf("на экране") == -1 &&
    toLowerCase.indexOf("мятый") == -1 &&
    toLowerCase.indexOf("Мятый") == -1 &&
    toLowerCase.indexOf("открытый") == -1 &&
    toLowerCase.indexOf("дефект") == -1 &&
    toLowerCase.indexOf("вскрыт") == -1 &&
    toLowerCase.indexOf("реболл") == -1 &&
    toLowerCase.indexOf("No charger") == -1 &&
    toLowerCase.indexOf("открыт") == -1 &&
    toLowerCase.indexOf("Мятый") == -1 &&
    toLowerCase.indexOf("мятый") == -1 &&
    toLowerCase.indexOf("без пломб") == -1 &&
    toLowerCase.indexOf("прошит") == -1 &&
    toLowerCase.indexOf("вскрыт") == -1 &&
    toLowerCase.indexOf("угол") == -1 &&
    toLowerCase.indexOf("прошит") == -1 &&
    toLowerCase.indexOf("потерто") == -1 &&
    toLowerCase.indexOf("экран") == -1 &&
    toLowerCase.indexOf("realme") == -1 &&
    toLowerCase.indexOf("актив") == -1 &&
    toLowerCase.indexOf("обменка") == -1 &&
    toLowerCase.indexOf("уцен") == -1 &&
    toLowerCase.indexOf("обме") == -1 &&
    toLowerCase.indexOf("короб") == -1 &&
    toLowerCase.indexOf("пломба") == -1 &&
    toLowerCase.indexOf('""') == -1 &&
    toLowerCase.indexOf("asis+") == -1 &&
    toLowerCase.indexOf("внутри") == -1 &&
    toLowerCase?.indexOf("распак") == -1 &&
    toLowerCase?.indexOf("крышк") == -1 &&
    toLowerCase?.indexOf("отсутств") == -1 &&
    toLowerCase?.indexOf("пятно") == -1 &&
    toLowerCase?.indexOf("мяты") == -1 &&
    toLowerCase?.indexOf("rfb") == -1 &&
    el !== "Товар"
  );
};

export const baseFixHi = (el) => {
  return (
    el[0] !== "(" &&
    el.name?.indexOf("magEZ case") == -1 &&
    el.name?.indexOf("pitaka") == -1 &&
    el.name?.indexOf("usb-c 25w") == -1 &&
    el.name?.indexOf("кабель") == -1 &&
    el.name?.indexOf("charge cable") == -1 &&
    el.name?.indexOf("20w") == -1 &&
    el.name?.indexOf("usb-c lightning") == -1 &&
    el.name?.indexOf("муляж") == -1 &&
    el.name?.indexOf("кожа") == -1 &&
    el.name?.indexOf("silicon") == -1 &&
    el.name?.indexOf("grip case") == -1 &&
    el.name?.indexOf("sult case") == -1 &&
    el.name?.indexOf("питания macbook") == -1 &&
    el.name?.indexOf("\u2757") == -1 &&
    el.name?.indexOf("💻 mac 💻") == -1 &&
    el.name?.indexOf("≪  macbook air 13  ≫") == -1 &&
    el.name?.indexOf("≪  macbook pro 13  ≫") == -1 &&
    el.name?.indexOf("≪  macbook air 15  ≫") == -1 &&
    el.name?.indexOf("📂") == -1 &&
    el.name?.indexOf("🔥🔥  14 pro max  🔥") == -1 &&
    el.name?.indexOf("🔥🔥  14 pro  🔥") == -1 &&
    el.name?.indexOf("airpods 1 ") == -1 &&
    el.name?.indexOf("fneh3") == -1 &&
    el.name?.indexOf("━─") == -1 &&
    el.name?.indexOf("se2 40/") == -1 &&
    el.name?.indexOf("left") == -1 &&
    el.name?.indexOf("airpods 2 case") == -1 &&
    el.name?.indexOf("🎧airpods 🎧") == -1 &&
    el.name?.indexOf("a03s") == -1 &&
    el.name?.indexOf("≪se 2≫") == -1 &&
    el.name?.indexOf("s20 ") == -1 &&
    el.name?.indexOf("s21 ") == -1 &&
    el.name?.indexOf("s22 ") == -1 &&
    el.name?.indexOf("tab a8") == -1 &&
    el.name?.indexOf("tab s8") == -1 &&
    el.name?.indexOf("tab a9") == -1 &&
    el.name?.indexOf("🎵 airpods") == -1 &&
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
    el.name?.indexOf("крышк") == -1 &&
    el.name?.indexOf("отсутств") == -1 &&
    el.name?.indexOf("пятно") == -1 &&
    el.name.indexOf('""') == -1 &&
    el.name?.indexOf("мяты") == -1 &&
    el.name.indexOf("распак") == -1 &&
    el.name.indexOf("🔤") == -1 &&
    el.name.indexOf("😶") == -1 &&
    el.name.indexOf("💬") == -1 &&
    el.name.indexOf("‼️") == -1 &&
    el.name.indexOf("⭕️") == -1 &&
    el.name.indexOf("➕") == -1 &&
    el.name.indexOf("💬") == -1 &&
    el.name.indexOf("🔌") == -1 &&
    el.name.indexOf("🔋") == -1 &&
    el.name.indexOf("⏳") == -1 &&
    el.name.indexOf("20W") == -1 &&
    el.name.indexOf("От ") == -1 &&
    
    el.name.indexOf(" ") == -1 &&
    el.name.indexOf("сетевой") == -1 &&
    el.name.indexOf("питания") == -1 &&
    el.name.indexOf("🍎") == -1 &&
    el.name.indexOf(" Silicone") == -1 &&
    el.name.indexOf("——") == -1 &&
    el.name.indexOf("20W") == -1 &&
    el.name.indexOf("От ") == -1 &&
    el.name !== "0"
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
    toLowerCase?.indexOf("крышк") == -1 &&
    toLowerCase?.indexOf("отсутств") == -1 &&
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
    toLowerCase?.indexOf("распак") == -1 &&
    toLowerCase?.indexOf("пятно") == -1 &&
    toLowerCase?.indexOf("мяты") == -1 &&
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
    toLowerCase?.indexOf("крышк") == -1 &&
    toLowerCase?.indexOf("отсутств") == -1 &&
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
    toLowerCase?.indexOf("распак") == -1 &&
    toLowerCase?.indexOf("пятно") == -1 &&
    toLowerCase?.indexOf("мяты") == -1 &&
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
    toLowerCase?.indexOf("распак") == -1 &&
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
    toLowerCase?.indexOf("распак") == -1 &&
    toLowerCase?.indexOf("крышк") == -1 &&
    toLowerCase?.indexOf("отсутств") == -1 &&
    toLowerCase?.indexOf("пятно") == -1 &&
    toLowerCase?.indexOf("мяты") == -1 &&
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
        toLowerCase?.indexOf("распак") == -1 &&
        toLowerCase?.indexOf("крышк") == -1 &&
        toLowerCase?.indexOf("отсутств") == -1 &&
        toLowerCase?.indexOf("пятно") == -1 &&
        toLowerCase?.indexOf("мяты") == -1 &&
        toLowerCase.indexOf('""') == -1;
};
