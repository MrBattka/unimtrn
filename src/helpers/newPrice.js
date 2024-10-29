export const newPrice = (nameStock, price) => {
  const name = nameStock?.toLowerCase();
  if (
    name.indexOf("JBL") != -1 ||
    name.indexOf("Marshall") != -1 ||
    name.indexOf("Nothing Ear") != -1 ||
    name.indexOf("Nothing ear") != -1 ||
    name.indexOf("Nothing CMF") != -1 ||
    name.indexOf("Galaxy Buds") != -1 ||
    name.indexOf("Galaxy Smart Tag") != -1 ||
    name.indexOf("AirPods Pro") != -1 ||
    name.indexOf("Airpods Pro") != -1 ||
    name.indexOf("Air Pods Pro") != -1 ||
    name.indexOf("Air Pods 2") != -1 ||
    name.indexOf("AirPods 2") != -1 ||
    name.indexOf("Airpods 2") != -1 ||
    name.indexOf("Air Pods 3") != -1 ||
    name.indexOf("AirPods 3") != -1 ||
    name.indexOf("Airpods 3") != -1 ||
    name.indexOf("Pencil") != -1 ||
    name.indexOf("HomePod") != -1 ||
    name.indexOf("Redmi Buds") != -1 ||
    name.indexOf("A05s ") != -1 ||
    name.indexOf("A05 ") != -1 ||
    name.indexOf("A06") != -1 ||
    name.indexOf("A15 ") != -1 ||
    name.indexOf("A25 ") != -1 ||
    name.indexOf("A24 ") != -1 ||
    name.indexOf("A54 ") != -1 ||
    name.indexOf("A35 ") != -1 ||
    name.indexOf("A34 ") != -1 ||
    name.indexOf("M34 ") != -1 ||
    name.indexOf("M54 ") != -1 ||
    name.indexOf("A55 ") != -1 ||
    name.indexOf("A550 ") != -1 ||
    name.indexOf("Galaxy Watch") != -1 ||
    name.indexOf("Poco") != -1 ||
    name.indexOf("POCO") != -1 ||
    name.indexOf("Camon ") != -1 ||
    name.indexOf("Spark ") != -1 ||
    name.indexOf("Magic Keyboard") != -1 ||
    name.indexOf("Magic Mouse") != -1 ||
    name.indexOf("DJL ") != -1 ||
    name.indexOf("DJI ") != -1 ||
    name.indexOf("Dji ") != -1 ||
    name.indexOf("DJi ") != -1 ||
    name.indexOf("Sony Wireless") != -1 ||
    name.indexOf("Wireless WH") != -1 ||
    name.indexOf("Watch 6") != -1 ||
    name.indexOf("Tab A") != -1 ||
    name.indexOf("Redmi") != -1 ||
    name.indexOf("Watch") != -1 ||
    name.indexOf("RayBan") != -1 ||
    name.indexOf("GoPro") != -1 ||
    name.indexOf("Oppo") != -1 ||
    name.indexOf("AGM") != -1 ||
    name.indexOf("Blackview") != -1 ||
    name.indexOf("Insta ") != -1 ||
    name.indexOf("HUAWEI") != -1 ||
    name.indexOf("Huawei") != -1 ||
    name.indexOf("Fujifilm") != -1 ||
    name.indexOf("Beats") != -1 ||
    name.indexOf("infinix") != -1 ||
    name.indexOf("Tecno") != -1 ||
    name.indexOf("Realme") != -1 ||
    name.indexOf("Polaroid") != -1 ||
    name.indexOf("Sonos") != -1
  ) {
    return Number(price) + 300;
  } else if (
    name.indexOf("SE (2022) Gen") != -1 ||
    name.indexOf("SE (2023) Gen") != -1 ||
    name.indexOf("Watch SE") != -1 ||
    name.indexOf("Note") != -1 ||
    name.indexOf("SE (2022) 64") != -1 ||
    name.indexOf("SE (2022) 128") != -1 ||
    name.indexOf("SE (2022) 256") != -1 ||
    name.indexOf("SE 2") != -1 ||
    name.indexOf("SE 3") != -1 ||
    name.indexOf("SE 64") != -1 ||
    name.indexOf("SE 128") != -1 ||
    name.indexOf("SE 256") != -1 ||
    name.indexOf("11 64") != -1 ||
    name.indexOf("11 128") != -1 ||
    name.indexOf("Asus") != -1 ||
    name.indexOf("ZenFone") != -1 ||
    name.indexOf("ZenFone") != -1 ||
    name.indexOf("Mi ") != -1 ||
    name.indexOf("MI ") != -1 ||
    name.indexOf("AirPods Max") != -1 ||
    name.indexOf("Air Pods Max") != -1 ||
    name.indexOf("Airpods Max") != -1 ||
    name.indexOf("Airwrap ") != -1 ||
    name.indexOf("V1") != -1 ||
    name.indexOf("Vented") != -1 ||
    name.indexOf("HD0") != -1 ||
    name.indexOf("HD1") != -1 ||
    name.indexOf("Gen5 Detect") != -1 ||
    name.indexOf("Gen 5 Detect") != -1 ||
    name.indexOf("RB0") != -1 ||
    name.indexOf("HT0") != -1 ||
    name.indexOf("HS0") != -1 ||
    name.indexOf("Designed") != -1 ||
    name.indexOf("Heapdphone") != -1 ||
    name.indexOf("PH04") != -1 ||
    name.indexOf("Vacuum Cleaner Micro") != -1 ||
    name.indexOf("Wash G1 ") != -1 ||
    name.indexOf("Paddle Brush") != -1 ||
    name.indexOf("Supersonic Hair") != -1 ||
    name.indexOf("Air Purifier") != -1 ||
    name.indexOf("Nintendo") != -1 ||
    name.indexOf("Oculus") != -1 ||
    name.indexOf("Playstation") != -1 ||
    name.indexOf("PlayStation") != -1 ||
    name.indexOf("Xbox") != -1 ||
    name.indexOf("PS5") != -1 ||
    name.indexOf("Pico") != -1 ||
    name.indexOf("Steam") != -1 ||
    name.indexOf("Garmin") != -1 ||
    name.indexOf("Google") != -1 ||
    name.indexOf("Pixel") != -1 ||
    name.indexOf("Xperia") != -1 ||
    name.indexOf("ROG") != -1 ||
    name.indexOf("Rog") != -1 ||
    name.indexOf("Acer") != -1 ||
    name.indexOf("MSI") != -1 ||
    name.indexOf("Asus") != -1 ||
    name.indexOf("Lenovo") != -1 ||
    name.indexOf("Motorola") != -1 ||
    name.indexOf("OnePlus") != -1 ||
    name.indexOf("RedMagic") != -1 ||
    name.indexOf("Nubia") != -1 ||
    name.indexOf("Nothing Phone") != -1 ||
    name.indexOf("Honor") != -1 ||
    name.indexOf("Redmi Note") != -1
  ) {
    return Number(price) + 400;
  } else if (
    name.indexOf("XR 64") != -1 ||
    name.indexOf("12 64") != -1 ||
    name.indexOf("12 128") != -1 ||
    name.indexOf("12 256") != -1 ||
    name.indexOf("12 Pro Max") != -1 ||
    name.indexOf("13 128") != -1 ||
    name.indexOf("13 256") != -1 ||
    name.indexOf("13 512") != -1 ||
    name.indexOf("14 128") != -1 ||
    name.indexOf("14 256") != -1 ||
    name.indexOf("14 512") != -1 ||
    name.indexOf("14 Plus") != -1 ||
    name.indexOf("14 Pro 128") != -1 ||
    name.indexOf("14 Pro 256") != -1 ||
    name.indexOf("14 Pro 512") != -1 ||
    name.indexOf("14 Pro 1Tb") != -1 ||
    name.indexOf("14 Pro 1TB") != -1 ||
    name.indexOf("14 ProMax") != -1 ||
    name.indexOf("15 128") != -1 ||
    name.indexOf("15 256") != -1 ||
    name.indexOf("15 512") != -1 ||
    name.indexOf("15 Plus 128") != -1 ||
    name.indexOf("15 Plus 256") != -1 ||
    name.indexOf("15 Plus 512") != -1 ||
    name.indexOf("15 Pro 128") != -1 ||
    name.indexOf("15 Pro 256") != -1 ||
    name.indexOf("15 Pro 512") != -1 ||
    name.indexOf("15 Pro 1Tb") != -1 ||
    name.indexOf("15 ProMax 256") != -1 ||
    name.indexOf("15 ProMax 512") != -1 ||
    name.indexOf("15 ProMax 1Tb") != -1 ||
    name.indexOf("15 Pro Max 256") != -1 ||
    name.indexOf("15 Pro Max 512") != -1 ||
    name.indexOf("15 Pro Max 1Tb") != -1 ||
    name.indexOf("15 Pro Max 1TB") != -1 ||
    name.indexOf("15 Pro Max 1Tb") != -1 ||
    name.indexOf("AW 9") != -1 ||
    name.indexOf("AW  9") != -1 ||
    name.indexOf("AW Series 8") != -1 ||
    name.indexOf("AW 8") != -1 ||
    name.indexOf("AW  8") != -1 ||
    name.indexOf("Watch S8") != -1 ||
    name.indexOf("AW Series 9") != -1 ||
    name.indexOf("Ultra 2") != -1 ||
    name.indexOf("S21") != -1 ||
    name.indexOf("S22") != -1 ||
    name.indexOf("S23") != -1 ||
    name.indexOf("S24") != -1 ||
    name.indexOf("Z Flip") != -1 ||
    name.indexOf("Z Fold") != -1 ||
    name.indexOf("Tab S") != -1 ||
    name.indexOf("Microsoft") != -1
  ) {
    return Number(price) + 500;
  } else if (
    name.indexOf("iPad 9") != -1 ||
    name.indexOf("iPad 10") != -1 ||
    name.indexOf("iPad 9") != -1 ||
    name.indexOf("IPad 9") != -1 ||
    name.indexOf("iPad Mini") != -1 ||
    name.indexOf("iPad Air") != -1 ||
    name.indexOf("iPad Pro") != -1 ||
    name.indexOf("iPad Pro 12.9") != -1 ||
    name.indexOf("Mac") != -1 ||
    name.indexOf("Macbook") != -1 ||
    name.indexOf("Book ") != -1 ||
    name.indexOf("MB") != -1 ||
    name.indexOf("13.6 M") != -1 ||
    name.indexOf("15 M") != -1 ||
    name.indexOf("MGN") != -1 ||
    name.indexOf("Vision Pro") != -1 ||
    name.indexOf("iPad Air 11") != -1 ||
    name.indexOf("IPad Air 11") != -1
  ) {
    return Number(price) + 1000;
  } else if (
    name.indexOf("16 ProMax 256") == -1 &&
    name.indexOf("16 ProMax 512") == -1 &&
    name.indexOf("16 ProMax 1Tb") == -1 &&
    name.indexOf("16 Pro Max 256") == -1 &&
    name.indexOf("16 Pro Max 512") == -1 &&
    name.indexOf("16 Pro Max 1Tb") == -1 &&
    name.indexOf("16 Pro Max 1TB") == -1 &&
    name.indexOf("16 Pro Max 1Tb") == -1 &&
    (name.indexOf("16 128") != -1 ||
      name.indexOf("16 256") != -1 ||
      name.indexOf("16 512") != -1 ||
      name.indexOf("16 Plus 128") != -1 ||
      name.indexOf("16 Plus 256") != -1 ||
      name.indexOf("16 Plus 512") != -1 ||
      name.indexOf("16 Pro 128") != -1 ||
      name.indexOf("16 Pro 256") != -1 ||
      name.indexOf("16 Pro 512") != -1 ||
      name.indexOf("16 Pro 1Tb") != -1 ||
      name.indexOf("Watch S10") == -1 ||
      name.indexOf("AW Series 10") == -1 ||
      name.indexOf("AW 10") == -1 ||
      name.indexOf("AW  10") == -1)
  ) {
    return Number(price) + 2000;
  } else if (
    name.indexOf("16 ProMax 256") != -1 ||
    name.indexOf("16 ProMax 512") != -1 ||
    name.indexOf("16 ProMax 1Tb") != -1 ||
    name.indexOf("16 Pro Max 256") != -1 ||
    name.indexOf("16 Pro Max 512") != -1 ||
    name.indexOf("16 Pro Max 1Tb") != -1 ||
    name.indexOf("16 Pro Max 1TB") != -1 ||
    name.indexOf("16 Pro Max 1Tb") != -1
  ) {
    return Number(price) + 2500;
  } else {
    return price`🟥 Без наценки `;
  }
};
