export const newPrice = (el) => {
  if (
    el.Товар.indexOf("JBL") != -1 ||
    el.Товар.indexOf("Marshall") != -1 ||
    el.Товар.indexOf("Nothing Ear") != -1 ||
    el.Товар.indexOf("Nothing ear") != -1 ||
    el.Товар.indexOf("Nothing CMF") != -1 ||
    el.Товар.indexOf("Galaxy Buds") != -1 ||
    el.Товар.indexOf("Galaxy Smart Tag") != -1 ||
    el.Товар.indexOf("AirPods Pro") != -1 ||
    el.Товар.indexOf("Airpods Pro") != -1 ||
    el.Товар.indexOf("Air Pods Pro") != -1 ||
    el.Товар.indexOf("Air Pods 2") != -1 ||
    el.Товар.indexOf("AirPods 2") != -1 ||
    el.Товар.indexOf("Airpods 2") != -1 ||
    el.Товар.indexOf("Air Pods 3") != -1 ||
    el.Товар.indexOf("AirPods 3") != -1 ||
    el.Товар.indexOf("Airpods 3") != -1 ||
    el.Товар.indexOf("Pencil") != -1 ||
    el.Товар.indexOf("HomePod") != -1 ||
    el.Товар.indexOf("Redmi Buds") != -1 ||
    el.Товар.indexOf("A05s ") != -1 ||
    el.Товар.indexOf("A05 ") != -1 ||
    el.Товар.indexOf("A06") != -1 ||
    el.Товар.indexOf("A15 ") != -1 ||
    el.Товар.indexOf("A25 ") != -1 ||
    el.Товар.indexOf("A24 ") != -1 ||
    el.Товар.indexOf("A54 ") != -1 ||
    el.Товар.indexOf("A35 ") != -1 ||
    el.Товар.indexOf("A34 ") != -1 ||
    el.Товар.indexOf("M34 ") != -1 ||
    el.Товар.indexOf("M54 ") != -1 ||
    el.Товар.indexOf("A55 ") != -1 ||
    el.Товар.indexOf("A550 ") != -1 ||
    el.Товар.indexOf("Galaxy Watch") != -1 ||
    el.Товар.indexOf("Poco") != -1 ||
    el.Товар.indexOf("POCO") != -1 ||
    el.Товар.indexOf("Camon ") != -1 ||
    el.Товар.indexOf("Spark ") != -1 ||
    el.Товар.indexOf("Magic Keyboard") != -1 ||
    el.Товар.indexOf("Magic Mouse") != -1 ||
    el.Товар.indexOf("DJL ") != -1 ||
    el.Товар.indexOf("DJI ") != -1 ||
    el.Товар.indexOf("Dji ") != -1 ||
    el.Товар.indexOf("DJi ") != -1 ||
    el.Товар.indexOf("Sony Wireless") != -1 ||
    el.Товар.indexOf("Wireless WH") != -1 ||
    el.Товар.indexOf("Watch 6") != -1 ||
    el.Товар.indexOf("Tab A") != -1 ||
    el.Товар.indexOf("Redmi") != -1 ||
    el.Товар.indexOf("Watch") != -1 ||
    el.Товар.indexOf("RayBan") != -1 ||
    el.Товар.indexOf("GoPro") != -1 ||
    el.Товар.indexOf("Oppo") != -1 ||
    el.Товар.indexOf("AGM") != -1 ||
    el.Товар.indexOf("Blackview") != -1 ||
    el.Товар.indexOf("Insta ") != -1 ||
    el.Товар.indexOf("HUAWEI") != -1 ||
    el.Товар.indexOf("Huawei") != -1 ||
    el.Товар.indexOf("Fujifilm") != -1 ||
    el.Товар.indexOf("Beats") != -1 ||
    el.Товар.indexOf("infinix") != -1 ||
    el.Товар.indexOf("Tecno") != -1 ||
    el.Товар.indexOf("Realme") != -1 ||
    el.Товар.indexOf("Polaroid") != -1 ||
    el.Товар.indexOf("Sonos") != -1
  ) {
    return el.Стоимость
      ? Number(el.Стоимость) + 300
      : Number(el.Cтоимость) + 300;
  } else if (
    el.Товар.indexOf("SE (2022) Gen") != -1 ||
    el.Товар.indexOf("SE (2023) Gen") != -1 ||
    el.Товар.indexOf("Watch SE") != -1 ||
    el.Товар.indexOf("Note") != -1 ||
    el.Товар.indexOf("SE (2022) 64") != -1 ||
    el.Товар.indexOf("SE (2022) 128") != -1 ||
    el.Товар.indexOf("SE (2022) 256") != -1 ||
    el.Товар.indexOf("SE 2") != -1 ||
    el.Товар.indexOf("SE 3") != -1 ||
    el.Товар.indexOf("SE 64") != -1 ||
    el.Товар.indexOf("SE 128") != -1 ||
    el.Товар.indexOf("SE 256") != -1 ||
    el.Товар.indexOf("11 64") != -1 ||
    el.Товар.indexOf("11 128") != -1 ||
    el.Товар.indexOf("Asus") != -1 ||
    el.Товар.indexOf("ZenFone") != -1 ||
    el.Товар.indexOf("ZenFone") != -1 ||
    el.Товар.indexOf("Mi ") != -1 ||
    el.Товар.indexOf("MI ") != -1 ||
    el.Товар.indexOf("AirPods Max") != -1 ||
    el.Товар.indexOf("Air Pods Max") != -1 ||
    el.Товар.indexOf("Airpods Max") != -1 ||
    el.Товар.indexOf("Airwrap ") != -1 ||
    el.Товар.indexOf("V1") != -1 ||
    el.Товар.indexOf("Vented") != -1 ||
    el.Товар.indexOf("HD0") != -1 ||
    el.Товар.indexOf("HD1") != -1 ||
    el.Товар.indexOf("Gen5 Detect") != -1 ||
    el.Товар.indexOf("Gen 5 Detect") != -1 ||
    el.Товар.indexOf("RB0") != -1 ||
    el.Товар.indexOf("HT0") != -1 ||
    el.Товар.indexOf("HS0") != -1 ||
    el.Товар.indexOf("Designed") != -1 ||
    el.Товар.indexOf("Heapdphone") != -1 ||
    el.Товар.indexOf("PH04") != -1 ||
    el.Товар.indexOf("Vacuum Cleaner Micro") != -1 ||
    el.Товар.indexOf("Wash G1 ") != -1 ||
    el.Товар.indexOf("Paddle Brush") != -1 ||
    el.Товар.indexOf("Supersonic Hair") != -1 ||
    el.Товар.indexOf("Air Purifier") != -1 ||
    el.Товар.indexOf("Nintendo") != -1 ||
    el.Товар.indexOf("Oculus") != -1 ||
    el.Товар.indexOf("Playstation") != -1 ||
    el.Товар.indexOf("PlayStation") != -1 ||
    el.Товар.indexOf("Xbox") != -1 ||
    el.Товар.indexOf("PS5") != -1 ||
    el.Товар.indexOf("Pico") != -1 ||
    el.Товар.indexOf("Steam") != -1 ||
    el.Товар.indexOf("Garmin") != -1 ||
    el.Товар.indexOf("Google") != -1 ||
    el.Товар.indexOf("Pixel") != -1 ||
    el.Товар.indexOf("Xperia") != -1 ||
    el.Товар.indexOf("ROG") != -1 ||
    el.Товар.indexOf("Rog") != -1 ||
    el.Товар.indexOf("Acer") != -1 ||
    el.Товар.indexOf("MSI") != -1 ||
    el.Товар.indexOf("Asus") != -1 ||
    el.Товар.indexOf("Lenovo") != -1 ||
    el.Товар.indexOf("Motorola") != -1 ||
    el.Товар.indexOf("OnePlus") != -1 ||
    el.Товар.indexOf("RedMagic") != -1 ||
    el.Товар.indexOf("Nubia") != -1 ||
    el.Товар.indexOf("Nothing Phone") != -1 ||
    el.Товар.indexOf("Honor") != -1 ||
    el.Товар.indexOf("Redmi Note") != -1
  ) {
    return el.Стоимость
      ? Number(el.Стоимость) + 400
      : Number(el.Cтоимость) + 400;
  } else if (
    el.Товар.indexOf("XR 64") != -1 ||
    el.Товар.indexOf("12 64") != -1 ||
    el.Товар.indexOf("12 128") != -1 ||
    el.Товар.indexOf("12 256") != -1 ||
    el.Товар.indexOf("12 Pro Max") != -1 ||
    el.Товар.indexOf("13 128") != -1 ||
    el.Товар.indexOf("13 256") != -1 ||
    el.Товар.indexOf("13 512") != -1 ||
    el.Товар.indexOf("14 128") != -1 ||
    el.Товар.indexOf("14 256") != -1 ||
    el.Товар.indexOf("14 512") != -1 ||
    el.Товар.indexOf("14 Plus") != -1 ||
    el.Товар.indexOf("14 Pro 128") != -1 ||
    el.Товар.indexOf("14 Pro 256") != -1 ||
    el.Товар.indexOf("14 Pro 512") != -1 ||
    el.Товар.indexOf("14 Pro 1Tb") != -1 ||
    el.Товар.indexOf("14 Pro 1TB") != -1 ||
    el.Товар.indexOf("14 ProMax") != -1 ||
    el.Товар.indexOf("15 128") != -1 ||
    el.Товар.indexOf("15 256") != -1 ||
    el.Товар.indexOf("15 512") != -1 ||
    el.Товар.indexOf("15 Plus 128") != -1 ||
    el.Товар.indexOf("15 Plus 256") != -1 ||
    el.Товар.indexOf("15 Plus 512") != -1 ||
    el.Товар.indexOf("15 Pro 128") != -1 ||
    el.Товар.indexOf("15 Pro 256") != -1 ||
    el.Товар.indexOf("15 Pro 512") != -1 ||
    el.Товар.indexOf("15 Pro 1Tb") != -1 ||
    el.Товар.indexOf("15 ProMax 256") != -1 ||
    el.Товар.indexOf("15 ProMax 512") != -1 ||
    el.Товар.indexOf("15 ProMax 1Tb") != -1 ||
    el.Товар.indexOf("15 Pro Max 256") != -1 ||
    el.Товар.indexOf("15 Pro Max 512") != -1 ||
    el.Товар.indexOf("15 Pro Max 1Tb") != -1 ||
    el.Товар.indexOf("15 Pro Max 1TB") != -1 ||
    el.Товар.indexOf("15 Pro Max 1Tb") != -1 ||
    el.Товар.indexOf("AW 9") != -1 ||
    el.Товар.indexOf("AW  9") != -1 ||
    el.Товар.indexOf("AW Series 8") != -1 ||
    el.Товар.indexOf("AW 8") != -1 ||
    el.Товар.indexOf("AW  8") != -1 ||
    el.Товар.indexOf("Watch S8") != -1 ||
    el.Товар.indexOf("AW Series 9") != -1 ||
    el.Товар.indexOf("Ultra 2") != -1 ||
    el.Товар.indexOf("S21") != -1 ||
    el.Товар.indexOf("S22") != -1 ||
    el.Товар.indexOf("S23") != -1 ||
    el.Товар.indexOf("S24") != -1 ||
    el.Товар.indexOf("Z Flip") != -1 ||
    el.Товар.indexOf("Z Fold") != -1 ||
    el.Товар.indexOf("Tab S") != -1 ||
    el.Товар.indexOf("Microsoft") != -1
  ) {
    return el.Стоимость
      ? Number(el.Стоимость) + 500
      : Number(el.Cтоимость) + 500;
  } else if (
    el.Товар.indexOf("iPad 9") != -1 ||
    el.Товар.indexOf("iPad 10") != -1 ||
    el.Товар.indexOf("iPad 9") != -1 ||
    el.Товар.indexOf("IPad 9") != -1 ||
    el.Товар.indexOf("iPad Mini") != -1 ||
    el.Товар.indexOf("iPad Air") != -1 ||
    el.Товар.indexOf("iPad Pro") != -1 ||
    el.Товар.indexOf("iPad Pro 12.9") != -1 ||
    el.Товар.indexOf("Mac") != -1 ||
    el.Товар.indexOf("Macbook") != -1 ||
    el.Товар.indexOf("Book ") != -1 ||
    el.Товар.indexOf("MB") != -1 ||
    el.Товар.indexOf("13.6 M") != -1 ||
    el.Товар.indexOf("15 M") != -1 ||
    el.Товар.indexOf("MGN") != -1 ||
    el.Товар.indexOf("Vision Pro") != -1 ||
    el.Товар.indexOf("iPad Air 11") != -1 ||
    el.Товар.indexOf("IPad Air 11") != -1
  ) {
    return el.Стоимость
      ? Number(el.Стоимость) + 1000
      : Number(el.Cтоимость) + 1000;
  } else if (
    el.Товар.indexOf("16 ProMax 256") == -1 &&
    el.Товар.indexOf("16 ProMax 512") == -1 &&
    el.Товар.indexOf("16 ProMax 1Tb") == -1 &&
    el.Товар.indexOf("16 Pro Max 256") == -1 &&
    el.Товар.indexOf("16 Pro Max 512") == -1 &&
    el.Товар.indexOf("16 Pro Max 1Tb") == -1 &&
    el.Товар.indexOf("16 Pro Max 1TB") == -1 &&
    el.Товар.indexOf("16 Pro Max 1Tb") == -1 &&
    (el.Товар.indexOf("16 128") != -1 ||
      el.Товар.indexOf("16 256") != -1 ||
      el.Товар.indexOf("16 512") != -1 ||
      el.Товар.indexOf("16 Plus 128") != -1 ||
      el.Товар.indexOf("16 Plus 256") != -1 ||
      el.Товар.indexOf("16 Plus 512") != -1 ||
      el.Товар.indexOf("16 Pro 128") != -1 ||
      el.Товар.indexOf("16 Pro 256") != -1 ||
      el.Товар.indexOf("16 Pro 512") != -1 ||
      el.Товар.indexOf("16 Pro 1Tb") != -1 ||
      el.Товар.indexOf("Watch S10") == -1 ||
      el.Товар.indexOf("AW Series 10") == -1 ||
      el.Товар.indexOf("AW 10") == -1 ||
      el.Товар.indexOf("AW  10") == -1)
  ) {
    return el.Стоимость
      ? Number(el.Стоимость) + 2000
      : Number(el.Cтоимость) + 2000;
  } else if (
    el.Товар.indexOf("16 ProMax 256") != -1 ||
    el.Товар.indexOf("16 ProMax 512") != -1 ||
    el.Товар.indexOf("16 ProMax 1Tb") != -1 ||
    el.Товар.indexOf("16 Pro Max 256") != -1 ||
    el.Товар.indexOf("16 Pro Max 512") != -1 ||
    el.Товар.indexOf("16 Pro Max 1Tb") != -1 ||
    el.Товар.indexOf("16 Pro Max 1TB") != -1 ||
    el.Товар.indexOf("16 Pro Max 1Tb") != -1
  ) {
    return el.Стоимость
      ? Number(el.Стоимость) + 2500
      : Number(el.Cтоимость) + 2500;
  } else {
    return el.Стоимость
      ? `${el.Стоимость} 🟥 Без наценки `
      : `${el.Cтоимость} 🟥 Без наценки `;
  }
};
