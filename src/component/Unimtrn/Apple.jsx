import React, { useState } from "react";
import { baseFix } from "../../helpers/baseFix";
import { copyTable } from "../../helpers/copy";
import { returnFixPrice } from "../../helpers/fixPrice";
import Footer from "./Footer";
import style from "./styles.module.css";
import { newPrice } from "../../helpers/newPrice";

const Apple = ({ double }) => {
  const sort = double.sort(
    (a, b) =>
      (a.id > b.id ? 1 : b.id > a.id ? -1 : 0) &&
      (a.stockPrice > b.stockPrice ? 1 : b.stockPrice > a.stockPrice ? -1 : 0)
  );

  let allPriceArr1 = sort.filter((obj1, i, arr) => {
    return (
      arr.findIndex(
        (obj2) =>
          ["id"].every((key) => obj2[key] === obj1[key]) &&
          ["stockPrice"].every((key) => obj2[key] <= obj1[key])
      ) === i
    );
  });

  const sort1 = allPriceArr1.sort(
    (a, b) =>
      (a.id > b.id ? 1 : b.id > a.id ? -1 : 0) &&
      (a.stockPrice > b.stockPrice ? 1 : b.stockPrice > a.stockPrice ? -1 : 0)
  );

  let allPriceArr2 = sort1.filter((obj1, i, arr) => {
    return (
      arr.findIndex(
        (obj2) =>
          ["id"].every((key) => obj2[key] === obj1[key]) &&
          ["stockPrice"].every((key) => obj2[key] <= obj1[key])
      ) === i
    );
  });

  const sort2 = allPriceArr2.sort(
    (a, b) =>
      (a.id > b.id ? 1 : b.id > a.id ? -1 : 0) &&
      (a.stockPrice > b.stockPrice ? 1 : b.stockPrice > a.stockPrice ? -1 : 0)
  );

  let allPriceArr3 = sort2.filter((obj1, i, arr) => {
    return (
      arr.findIndex(
        (obj2) =>
          ["id"].every((key) => obj2[key] === obj1[key]) &&
          ["stockPrice"].every((key) => obj2[key] <= obj1[key])
      ) === i
    );
  });

  const sort3 = allPriceArr3.sort(
    (a, b) =>
      (a.id > b.id ? 1 : b.id > a.id ? -1 : 0) &&
      (a.stockPrice > b.stockPrice ? 1 : b.stockPrice > a.stockPrice ? -1 : 0)
  );

  const sort3rev = sort3.reverse();

  const allPriceArr = sort3rev.filter((obj1, i, arr) => {
    return (
      arr.findIndex(
        (obj2) =>
          ["id"].every((key) => obj2[key] === obj1[key]) &&
          ["stockPrice"].every((key) => obj2[key] <= obj1[key])
      ) === i
    );
  });

  allPriceArr.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  const [isOpen, setIsOpen] = useState(false);
  const [isOpeniPhone, setIsOpeniPhone] = useState(false);
  const [isXR, setIsXR] = useState(false);
  const [isSE, setIsSE] = useState(false);
  const [is11, setIs11] = useState(false);
  const [is12, setIs12] = useState(false);
  const [is13Mini, setIs13Mini] = useState(false);
  const [is13, setIs13] = useState(false);
  const [is14, setIs14] = useState(false);
  const [is14Pro, setIs14Pro] = useState(false);
  const [is15, setIs15] = useState(false);
  const [is15Plus, setIs15Plus] = useState(false);
  const [is15Pro, setIs15Pro] = useState(false);
  const [is15ProMax, setIs15ProMax] = useState(false);
  const [is16e, setIs16e] = useState(false);
  const [is16, setIs16] = useState(false);
  const [is16Plus, setIs16Plus] = useState(false);
  const [is16Pro, setIs16Pro] = useState(false);
  const [is16ProMax, setIs16ProMax] = useState(false);
  const [isAsIs13, setIsAsIs13] = useState(false);
  const [isAsIs14, setIsAsIs14] = useState(false);
  const [isAsIs15, setIsAsIs15] = useState(false);
  const [isAsIs16, setIsAsIs16] = useState(false);

  const [isOpenAirPods, setIsOpenAirPods] = useState(false);
  const [isAirPods, setIsAirPods] = useState(false);
  const [isAirPodsMax, setIsAirPodsMax] = useState(false);
  const [isAirPodsMax2024, setIsAirPodsMax2024] = useState(false);
  const [isPencil, setIsPencil] = useState(false);
  const [isMagic, setIsMagic] = useState(false);
  const [isOpenWatch, setIsOpenWatch] = useState(false);
  const [isSEWatch, setIsSEWatch] = useState(false);
  const [isS8, setIsS8] = useState(false);
  const [isS9, setIsS9] = useState(false);
  const [isUltra, setIsUltra] = useState(false);
  const [isS10, setIsS10] = useState(false);
  const [isUltra2024, setIsUltra2024] = useState(false);
  const [isOpeniPad, setIsOpeniPad] = useState(false);
  const [isiPad9, setIsiPad9] = useState(false);
  const [isiPad10, setIsiPad10] = useState(false);
  const [isiPadAir, setIsiPadAir] = useState(false);
  const [isiPadMini, setIsiPadMini] = useState(false);
  const [isiPadPro11, setIsiPadPro11] = useState(false);
  const [isiPadPro12, setIsiPadPro12] = useState(false);
  const [isiPadPro13, setIsiPadPro13] = useState(false);
  const [isOpenMacBook, setIsOpenMacBook] = useState(false);
  const [isiMac, setIsiMac] = useState(false);
  const [isMacBook, setIsMacBook] = useState(false);
  const [isProduct, setIsProduct] = useState(false);
  const [isProductiPhone, setIsProductiPhone] = useState(false);
  const [isProductAirPods, setIsProductAirPods] = useState(false);
  const [isProductAW, setIsProductAW] = useState(false);
  const [isProductiPad, setIsProductiPad] = useState(false);
  const [isProductMac, setIsProductMac] = useState(false);

  let gb = /Gb/gi;
  let aws9 = /AW Series 9/gi;
  let aw9Space = /AW  9/gi;
  let aw9 = /AW 9/gi;
  let awu2 = /AW Ultra 2/gi;
  let awSE = /AW SE/gi;
  let apple = /Apple /gi;
  let mb = /MB /gi;
  let ipad = /🇺🇸 \(2022\)/gi;
  let aw8Spaces = /AW  8/gi;
  let aws8 = /AW 8/gi;
  let airPods = /Airpods/gi;
  let proMax = /ProMax/gi;
  let wiFi = /wifi/gi;
  let watchS8 = /Watch S8/gi;
  let IPad9 = /IPad 9/gi;
  let fixFlagJp = /🇺🇸🇯🇵 \(2022\)/gi;
  let fixFlagUs = /🇺🇸🇯🇵🇦🇺 \(2022\)/gi;
  let fixFlagAu = /🇺🇸🇦🇺 \(2022\)/gi;
  let air13 = /13.6 M/gi;
  let air15 = /15 M/gi;
  let airAir13 = /Air 13.6/gi;
  let airAir15 = /Air 15/gi;
  let MGN63 = /M1 256 Gold MGND3/gi;
  let MGN93 = /M1 256 Silver MGN93/gi;
  let MGND3 = /M1 256 Space Grey MGN63/gi;
  let airpodspro = /pro 2 ucb-c/gi;
  let MacBook = /MacBook 15 -M3 2024/gi;

  const fixName = (el) => {
    const fixGb = el.name.replace(gb, "");
    const fixIPad9 = fixGb.replace(IPad9, "iPad 9");
    const fixWatchS8 = fixIPad9.replace(watchS8, "S8");
    const fixWiFi = fixWatchS8.replace(wiFi, "Wi-Fi");
    const fixAWS9Space = fixWiFi.replace(aw9Space, "S9");
    const fixAWS9 = fixAWS9Space.replace(aws9, "S9");
    const fixAW9 = fixAWS9.replace(aw9, "S9");
    const fixAW8 = fixAW9.replace(aws8, "S8");
    const fixAW8Space = fixAW8.replace(aw8Spaces, "S8");
    const fixAWU2 = fixAW8Space.replace(awu2, "Ultra 2");
    const fixAWSE = fixAWU2.replace(awSE, "SE");
    const fixApple = fixAWSE.replace(apple, "");
    const fixmb = fixApple.replace(mb, "");
    const fixIpad = fixmb.replace(ipad, "(2022) 🇺🇸");
    const fixIpadUs = fixIpad.replace(fixFlagUs, "(2022)🇺🇸🇯🇵🇦🇺");
    const fixIpadJp = fixIpadUs.replace(fixFlagJp, "(2022)🇺🇸🇯🇵");
    const fixIpadAu = fixIpadJp.replace(fixFlagAu, "(2022)🇺🇸🇦🇺");
    const fixAirPods = fixIpadAu.replace(airPods, "AirPods");
    const fixMGN63 = fixAirPods.replace(MGN63, "Air M1 256 Gold MGND3");
    const fixMGN93 = fixMGN63.replace(MGN93, "Air M1 256 Silver MGN93");
    const fixMGND3 = fixMGN93.replace(MGND3, "Air M1 256 Space Grey MGN63");
    const fixGongkong = fixMGND3.replace("Гонконг", "");
    const fixairpodspro = fixGongkong.replace(airpodspro, "Pro 2 USB-C");
    const fixStick = fixairpodspro.replace("!", "");
    const fixAW10 = fixStick.replace("AW 10", "S10");
    const fixiPhone = fixAW10.replace("iPhone ", "");
    const fixSE = fixiPhone.replace("Watch SE", "SE");
    const fixMacBook = fixSE.replace(MacBook, "Air 15 M3 2024");

    return fixMacBook.replace(proMax, "Pro Max");
  };

  const closedSubMenu = () => {
    setIsOpen(!isOpen);
    setIsOpeniPhone(false);
    setIsOpenAirPods(false);
    setIsOpenWatch(false);
    setIsOpeniPad(false);
    setIsOpenMacBook(false);
  };

  const checkIsProductiPhone = (el) => {
    return (
      el.length &&
      el.map(
        (el, index) =>
          baseFix(el) &&
          (el.name.indexOf("XR 64") != -1 ||
            el.name.indexOf("XR 128") != -1 ||
            el.name.indexOf("SE 3") != -1 ||
            el.name.indexOf("SE 64") != -1 ||
            el.name.indexOf("SE 128") != -1 ||
            el.name.indexOf("SE 256") != -1 ||
            el.name.indexOf("11 64") != -1 ||
            el.name.indexOf("11 128") != -1 ||
            el.name.indexOf("12 64") != -1 ||
            el.name.indexOf("12 128") != -1 ||
            el.name.indexOf("12 256") != -1 ||
            el.name.indexOf("12 Pro Max") != -1 ||
            el.name.indexOf("13 Mini 128") != -1 ||
            el.name.indexOf("13 Mini 256") != -1 ||
            el.name.indexOf("13 Mini 512") != -1 ||
            el.name.indexOf("14 128") != -1 ||
            el.name.indexOf("14 256") != -1 ||
            el.name.indexOf("14 512") != -1 ||
            el.name.indexOf("14 Plus") != -1 ||
            el.name.indexOf("14 Pro 128") != -1 ||
            el.name.indexOf("14 Pro 256") != -1 ||
            el.name.indexOf("14 Pro 512") != -1 ||
            el.name.indexOf("14 Pro 1TB") != -1 ||
            el.name.indexOf("14 ProMax 256") != -1 ||
            el.name.indexOf("14 ProMax 512") != -1 ||
            el.name.indexOf("14 ProMax 1Tb") != -1 ||
            el.name.indexOf("14 Pro Max 256") != -1 ||
            el.name.indexOf("14 Pro Max 512") != -1 ||
            el.name.indexOf("14 Pro Max 1Tb") != -1 ||
            el.name.indexOf("14 Pro Max 1TB") != -1 ||
            el.name.indexOf("14 Pro Max 1Tb") != -1 ||
            el.name.indexOf("15 128") != -1 ||
            el.name.indexOf("15 256") != -1 ||
            el.name.indexOf("15 512") != -1 ||
            el.name.indexOf("15 Plus 128") != -1 ||
            el.name.indexOf("15 Plus 256") != -1 ||
            el.name.indexOf("15 Plus 512") != -1 ||
            el.name.indexOf("15 Pro 128") != -1 ||
            el.name.indexOf("15 Pro 256") != -1 ||
            el.name.indexOf("15 Pro 512") != -1 ||
            el.name.indexOf("15 Pro 1Tb") != -1 ||
            el.name.indexOf("15 ProMax 256") != -1 ||
            el.name.indexOf("15 ProMax 512") != -1 ||
            el.name.indexOf("15 ProMax 1Tb") != -1 ||
            el.name.indexOf("15 Pro Max 256") != -1 ||
            el.name.indexOf("15 Pro Max 512") != -1 ||
            el.name.indexOf("15 Pro Max 1Tb") != -1 ||
            el.name.indexOf("15 Pro Max 1TB") != -1 ||
            el.name.indexOf("15 Pro Max 1Tb") != -1 ||
            el.name.indexOf("16 128") != -1 ||
            el.name.indexOf("16 256") != -1 ||
            el.name.indexOf("16 512") != -1 ||
            el.name.indexOf("16e 128") != -1 ||
            el.name.indexOf("16e 256") != -1 ||
            el.name.indexOf("16e 512") != -1 ||
            el.name.indexOf("16Е 128") != -1 ||
            el.name.indexOf("16Е 256") != -1 ||
            el.name.indexOf("16Е 512") != -1 ||
            el.name.indexOf("16 Plus 128") != -1 ||
            el.name.indexOf("16 Plus 256") != -1 ||
            el.name.indexOf("16 Plus 512") != -1 ||
            el.name.indexOf("16 Pro 128") != -1 ||
            el.name.indexOf("16 Pro 256") != -1 ||
            el.name.indexOf("16 Pro 512") != -1 ||
            el.name.indexOf("16 Pro 1Tb") != -1 ||
            el.name.indexOf("16 ProMax 256") != -1 ||
            el.name.indexOf("16 ProMax 512") != -1 ||
            el.name.indexOf("16 ProMax 1Tb") != -1 ||
            el.name.indexOf("16 Pro Max 256") != -1 ||
            el.name.indexOf("16 Pro Max 512") != -1 ||
            el.name.indexOf("16 Pro Max 1Tb") != -1 ||
            el.name.indexOf("16 Pro Max 1TB") != -1 ||
            el.name.indexOf("16 Pro Max 1Tb") != -1) &&
          (isProductiPhone || setIsProductiPhone(true)) &&
          returnFixPrice(el, fixName(el)) + newPrice(el.name, el.stockPrice)
      )
    );
  };

  const checkIsProductAirPods = (el) => {
    return (
      el.length &&
      el.map(
        (el, index) =>
          baseFix(el) &&
          (el.name.indexOf("AirPods") != -1 ||
            el.name.indexOf("airpods") != -1 ||
            el.name.indexOf("Airpods") != -1 ||
            el.name.indexOf("Air Pods") != -1 ||
            el.name.indexOf("Pencil") != -1 ||
            el.name.indexOf("Magic Keyboard") != -1 ||
            el.name.indexOf("Magic Mouse") != -1) &&
          (isProductAirPods || setIsProductAirPods(true)) &&
          returnFixPrice(el, fixName(el)) + newPrice(el.name, el.stockPrice)
      )
    );
  };

  const checkIsProductAW = (el) => {
    return (
      el.length &&
      el.map(
        (el, index) =>
          baseFix(el) &&
          (el.name.indexOf("Watch SE") != -1 ||
            el.name.indexOf("SE (2023) Gen") != -1 ||
            el.name.indexOf("SE (2022) Gen") != -1 ||
            el.name.indexOf("SE 2") != -1 ||
            el.name.indexOf("SE2 4") != -1 ||
            el.name.indexOf("SE 4") != -1 ||
            el.name.indexOf("SE (2022) 64") != -1 ||
            el.name.indexOf("SE (2022) 128") != -1 ||
            el.name.indexOf("SE (2022) 256") != -1 ||
            el.name.indexOf("Watch S8") != -1 ||
            el.name.indexOf("AW Series 8") != -1 ||
            el.name.indexOf("AW 8") != -1 ||
            el.name.indexOf("AW  8") != -1 ||
            el.name.indexOf("Watch S9") != -1 ||
            el.name.indexOf("AW Series 9") != -1 ||
            el.name.indexOf("AW 9") != -1 ||
            el.name.indexOf("S9 4") != -1 ||
            el.name.indexOf("AW  9") != -1 ||
            el.name.indexOf("Watch S10") != -1 ||
            el.name.indexOf("AW Series 10") != -1 ||
            el.name.indexOf("AW 10") != -1 ||
            el.name.indexOf("S10 4") != -1 ||
            el.name.indexOf("AW  10") != -1 ||
            el.name.indexOf("Ultra 2") != -1 ||
            el.name.indexOf("UL 2") != -1) &&
          (isProductAW || setIsProductAW(true)) &&
          returnFixPrice(el, fixName(el)) + newPrice(el.name, el.stockPrice)
      )
    );
  };

  const checkIsProductiPad = (el) => {
    return (
      el.length &&
      el.map(
        (el, index) =>
          baseFix(el) &&
          (el.name.indexOf("iPad 9") != -1 ||
            el.name.indexOf("IPad 9") != -1 ||
            el.name.indexOf("iPad 10") != -1 ||
            el.name.indexOf("IPad 10") != -1 ||
            ((el.name.indexOf("Mini") != -1 || el.name.indexOf("MINI") != -1) &&
              el.name.indexOf("6") != -1) ||
            el.name.indexOf("iPad Air 5") != -1 ||
            el.name.indexOf("iPad Air 11") != -1 ||
            el.name.indexOf("IPad Air 11") != -1 ||
            el.name.indexOf("iPad Air 13") != -1 ||
            el.name.indexOf("iPad Pro 1") != -1) &&
          (isProductiPad || setIsProductiPad(true)) &&
          returnFixPrice(el, fixName(el)) + newPrice(el.name, el.price)
      )
    );
  };

  const checkIsProductMac = (el) => {
    return (
      el.length &&
      el.map(
        (el, index) =>
          baseFix(el) &&
          (el.name.indexOf("iMac") != -1 ||
            el.name.indexOf("Macbook") != -1 ||
            el.name.indexOf("Book ") != -1 ||
            el.name.indexOf("MB") != -1 ||
            el.name.indexOf("13.6 M") != -1 ||
            el.name.indexOf("15 M") != -1 ||
            el.name.indexOf("MGN") != -1 ||
            el.name.indexOf("MBPM2-03") != -1 ||
            el.name.indexOf("MBPM2-04") != -1 ||
            el.name.indexOf("MBPM2-05") != -1 ||
            el.name.indexOf("MBPM2-06") != -1 ||
            el.name.indexOf("MBPM2-07") != -1 ||
            el.name.indexOf("MBPM2-08") != -1 ||
            el.name.indexOf("MBPM2-09") != -1 ||
            el.name.indexOf("MBPM2-10") != -1 ||
            el.name.indexOf("MBPM2-11") != -1 ||
            el.name.indexOf("MBPM2-12") != -1 ||
            el.name.indexOf("MBPM2SL-03") != -1 ||
            el.name.indexOf("MBPM2SL-04") != -1 ||
            el.name.indexOf("MBPM2SL-05") != -1 ||
            el.name.indexOf("MBPM2SL-06") != -1 ||
            el.name.indexOf("MBPM2SL-07") != -1 ||
            el.name.indexOf("MBPM2SL-08") != -1 ||
            el.name.indexOf("MBPM2SL-09") != -1 ||
            el.name.indexOf("MBPM2SL-10") != -1 ||
            el.name.indexOf("MBPM2SL-11") != -1 ||
            el.name.indexOf("MBPM2SL-12") != -1 ||
            el.name.indexOf("MGN63") != -1 ||
            el.name.indexOf("MGN93") != -1 ||
            el.name.indexOf("MGND3") != -1 ||
            el.name.indexOf("MLXW3") != -1 ||
            el.name.indexOf("MLXX3") != -1 ||
            el.name.indexOf("MLXY3") != -1 ||
            el.name.indexOf("MLY03") != -1 ||
            el.name.indexOf("MLY13") != -1 ||
            el.name.indexOf("MLY23") != -1 ||
            el.name.indexOf("MLY33") != -1 ||
            el.name.indexOf("MLY43") != -1 ||
            el.name.indexOf("MNEH3") != -1 ||
            el.name.indexOf("MNEJ3") != -1 ||
            el.name.indexOf("MNEP3") != -1 ||
            el.name.indexOf("MNEQ3") != -1 ||
            el.name.indexOf("MPHE3") != -1 ||
            el.name.indexOf("MPHF3") != -1 ||
            el.name.indexOf("MPHH3") != -1 ||
            el.name.indexOf("MPHJ3") != -1 ||
            el.name.indexOf("MQKP3") != -1 ||
            el.name.indexOf("MQKQ3") != -1 ||
            el.name.indexOf("MQKR3") != -1 ||
            el.name.indexOf("MQKT3") != -1 ||
            el.name.indexOf("MQKU3") != -1 ||
            el.name.indexOf("MQKU3") != -1 ||
            el.name.indexOf("MQKV3") != -1 ||
            el.name.indexOf("MQKW3") != -1 ||
            el.name.indexOf("MQKX3") != -1 ||
            el.name.indexOf("MR7J3") != -1 ||
            el.name.indexOf("MR7K3") != -1 ||
            el.name.indexOf("MRW13") != -1 ||
            el.name.indexOf("MRW23") != -1 ||
            el.name.indexOf("MRW33") != -1 ||
            el.name.indexOf("MRW43") != -1 ||
            el.name.indexOf("MRW63") != -1 ||
            el.name.indexOf("MRW73") != -1 ||
            el.name.indexOf("MRX33") != -1 ||
            el.name.indexOf("MRX43") != -1 ||
            el.name.indexOf("MRX53") != -1 ||
            el.name.indexOf("MRX63") != -1 ||
            el.name.indexOf("MRX73") != -1 ||
            el.name.indexOf("MRX83") != -1 ||
            el.name.indexOf("MRXN3") != -1 ||
            el.name.indexOf("MRXP3") != -1 ||
            el.name.indexOf("MRXQ3") != -1 ||
            el.name.indexOf("MRXR3") != -1 ||
            el.name.indexOf("MRXT3") != -1 ||
            el.name.indexOf("MRXU3") != -1 ||
            el.name.indexOf("MRXV3") != -1 ||
            el.name.indexOf("MRXW3") != -1 ||
            el.name.indexOf("MRYM3") != -1 ||
            el.name.indexOf("MRYN3") != -1 ||
            el.name.indexOf("MRYP3") != -1 ||
            el.name.indexOf("MRYQ3") != -1 ||
            el.name.indexOf("MRYR3") != -1 ||
            el.name.indexOf("MRYT3") != -1 ||
            el.name.indexOf("MRYU3") != -1 ||
            el.name.indexOf("MRYV3") != -1 ||
            el.name.indexOf("MTL73") != -1 ||
            el.name.indexOf("MTL83") != -1 ||
            el.name.indexOf("MUW63") != -1 ||
            el.name.indexOf("MUW73") != -1 ||
            el.name.indexOf("MXCR3") != -1 ||
            el.name.indexOf("MXCT3") != -1 ||
            el.name.indexOf("MXCU3") != -1 ||
            el.name.indexOf("MXCV3") != -1 ||
            el.name.indexOf("MXD13") != -1 ||
            el.name.indexOf("MXD23") != -1 ||
            el.name.indexOf("MXD33") != -1 ||
            el.name.indexOf("MXD43") != -1 ||
            el.name.indexOf("Z1AW001FY") != -1 ||
            el.name.indexOf("Z1AW001LV") != -1 ||
            el.name.indexOf("Z1AW001NS") != -1 ||
            el.name.indexOf("MGNR3") != -1 ||
            el.name.indexOf("MGNT3") != -1 ||
            el.name.indexOf("MGPC3") != -1 ||
            el.name.indexOf("MGPD3") != -1 ||
            el.name.indexOf("MGPH3") != -1 ||
            el.name.indexOf("MGPJ3") != -1 ||
            el.name.indexOf("MGPK3") != -1 ||
            el.name.indexOf("MGPL3") != -1 ||
            el.name.indexOf("MGPM3") != -1 ||
            el.name.indexOf("MGPN3") != -1 ||
            el.name.indexOf("MGTF3") != -1 ||
            el.name.indexOf("MJV83") != -1 ||
            el.name.indexOf("MJV93") != -1 ||
            el.name.indexOf("MJVA3") != -1 ||
            el.name.indexOf("MQR93") != -1 ||
            el.name.indexOf("MQRA3") != -1 ||
            el.name.indexOf("MQRC3") != -1 ||
            el.name.indexOf("MQRD3") != -1 ||
            el.name.indexOf("MQRJ3") != -1 ||
            el.name.indexOf("MQRK3") != -1 ||
            el.name.indexOf("MQRN3") != -1 ||
            el.name.indexOf("MQRP3") != -1 ||
            el.name.indexOf("MQRQ3") != -1 ||
            el.name.indexOf("MQRR3") != -1 ||
            el.name.indexOf("MQRT3") != -1 ||
            el.name.indexOf("MQRU3") != -1 ||
            el.name.indexOf("MXNG2") != -1 ||
            el.name.indexOf("Z12SIMAC01") != -1 ||
            el.name.indexOf("Z12TIMAC01") != -1 ||
            el.name.indexOf("Z130IMAC01") != -1 ||
            el.name.indexOf("Z131IMAC01") != -1 ||
            el.name.indexOf("Z132IMAC01") != -1 ||
            el.name.indexOf("Z133IMAC01") != -1 ||
            el.name.indexOf("MXNF2") != -1 ||
            el.name.indexOf("MW123") != -1 ||
            el.name.indexOf("MW0W3") != -1 ||
            el.name.indexOf("MC6T4") != -1 ||
            el.name.indexOf("MW0Y3") != -1 ||
            el.name.indexOf("MC6V4") != -1 ||
            el.name.indexOf("MW0X3") != -1 ||
            el.name.indexOf("MC6V4") != -1 ||
            el.name.indexOf("MW103") != -1 ||
            el.name.indexOf("MW1L3") != -1 ||
            el.name.indexOf("MW1G3") != -1 ||
            el.name.indexOf("MC7A4") != -1 ||
            el.name.indexOf("MW1J3") != -1 ||
            el.name.indexOf("MW1M3") != -1 ||
            el.name.indexOf("MW1H3") != -1 ||
            el.name.indexOf("MC7C4") != -1 ||
            el.name.indexOf("MW1K3") != -1) &&
          (isProductMac || setIsProductMac(true)) &&
          returnFixPrice(el, fixName(el)) + newPrice(el.name, el.price)
      )
    );
  };

  const checkIsProduct = (el) => {
    return (
      el.length &&
      el.map(
        (el, index) =>
          baseFix(el) &&
          (el.name.indexOf("AirPods") != -1 ||
            el.name.indexOf("airpods") != -1 ||
            el.name.indexOf("Airpods") != -1 ||
            el.name.indexOf("Air Pods") != -1 ||
            el.name.indexOf("Pencil") != -1 ||
            el.name.indexOf("Magic Keyboard") != -1 ||
            el.name.indexOf("Magic Mouse") != -1 ||
            el.name.indexOf("XR 64") != -1 ||
            el.name.indexOf("XR 128") != -1 ||
            el.name.indexOf("SE 3") != -1 ||
            el.name.indexOf("SE 64") != -1 ||
            el.name.indexOf("SE 128") != -1 ||
            el.name.indexOf("SE 256") != -1 ||
            el.name.indexOf("11 64") != -1 ||
            el.name.indexOf("11 128") != -1 ||
            el.name.indexOf("12 64") != -1 ||
            el.name.indexOf("12 128") != -1 ||
            el.name.indexOf("12 256") != -1 ||
            el.name.indexOf("12 Pro Max") != -1 ||
            el.name.indexOf("13 Mini 128") != -1 ||
            el.name.indexOf("13 Mini 256") != -1 ||
            el.name.indexOf("13 Mini 512") != -1 ||
            el.name.indexOf("14 128") != -1 ||
            el.name.indexOf("14 256") != -1 ||
            el.name.indexOf("14 512") != -1 ||
            el.name.indexOf("14 Plus") != -1 ||
            el.name.indexOf("14 Pro 128") != -1 ||
            el.name.indexOf("14 Pro 256") != -1 ||
            el.name.indexOf("14 Pro 512") != -1 ||
            el.name.indexOf("14 Pro 1TB") != -1 ||
            el.name.indexOf("14 ProMax 256") != -1 ||
            el.name.indexOf("14 ProMax 512") != -1 ||
            el.name.indexOf("14 ProMax 1Tb") != -1 ||
            el.name.indexOf("14 Pro Max 256") != -1 ||
            el.name.indexOf("14 Pro Max 512") != -1 ||
            el.name.indexOf("14 Pro Max 1Tb") != -1 ||
            el.name.indexOf("14 Pro Max 1TB") != -1 ||
            el.name.indexOf("14 Pro Max 1Tb") != -1 ||
            el.name.indexOf("15 128") != -1 ||
            el.name.indexOf("15 256") != -1 ||
            el.name.indexOf("15 512") != -1 ||
            el.name.indexOf("15 Plus 128") != -1 ||
            el.name.indexOf("15 Plus 256") != -1 ||
            el.name.indexOf("15 Plus 512") != -1 ||
            el.name.indexOf("15 Pro 128") != -1 ||
            el.name.indexOf("15 Pro 256") != -1 ||
            el.name.indexOf("15 Pro 512") != -1 ||
            el.name.indexOf("15 Pro 1Tb") != -1 ||
            el.name.indexOf("15 ProMax 256") != -1 ||
            el.name.indexOf("15 ProMax 512") != -1 ||
            el.name.indexOf("15 ProMax 1Tb") != -1 ||
            el.name.indexOf("15 Pro Max 256") != -1 ||
            el.name.indexOf("15 Pro Max 512") != -1 ||
            el.name.indexOf("15 Pro Max 1Tb") != -1 ||
            el.name.indexOf("15 Pro Max 1TB") != -1 ||
            el.name.indexOf("15 Pro Max 1Tb") != -1 ||
            el.name.indexOf("16 128") != -1 ||
            el.name.indexOf("16 256") != -1 ||
            el.name.indexOf("16 512") != -1 ||
            el.name.indexOf("16 Plus 128") != -1 ||
            el.name.indexOf("16 Plus 256") != -1 ||
            el.name.indexOf("16 Plus 512") != -1 ||
            el.name.indexOf("16 Pro 128") != -1 ||
            el.name.indexOf("16 Pro 256") != -1 ||
            el.name.indexOf("16 Pro 512") != -1 ||
            el.name.indexOf("16 Pro 1Tb") != -1 ||
            el.name.indexOf("16 ProMax 256") != -1 ||
            el.name.indexOf("16 ProMax 512") != -1 ||
            el.name.indexOf("16 ProMax 1Tb") != -1 ||
            el.name.indexOf("16 Pro Max 256") != -1 ||
            el.name.indexOf("16 Pro Max 512") != -1 ||
            el.name.indexOf("16 Pro Max 1Tb") != -1 ||
            el.name.indexOf("16 Pro Max 1TB") != -1 ||
            el.name.indexOf("16 Pro Max 1Tb") != -1 ||
            el.name.indexOf("Watch SE") != -1 ||
            el.name.indexOf("SE (2023) Gen") != -1 ||
            el.name.indexOf("SE (2022) Gen") != -1 ||
            el.name.indexOf("SE 2") != -1 ||
            el.name.indexOf("SE 4") != -1 ||
            el.name.indexOf("SE (2022) 64") != -1 ||
            el.name.indexOf("SE (2022) 128") != -1 ||
            el.name.indexOf("SE (2022) 256") != -1 ||
            el.name.indexOf("Watch S8") != -1 ||
            el.name.indexOf("AW Series 8") != -1 ||
            el.name.indexOf("AW 8") != -1 ||
            el.name.indexOf("AW  8") != -1 ||
            el.name.indexOf("Watch S9") != -1 ||
            el.name.indexOf("AW Series 9") != -1 ||
            el.name.indexOf("AW 9") != -1 ||
            el.name.indexOf("AW  9") != -1 ||
            el.name.indexOf("Watch S10") != -1 ||
            el.name.indexOf("AW Series 10") != -1 ||
            el.name.indexOf("AW 10") != -1 ||
            el.name.indexOf("AW  10") != -1 ||
            el.name.indexOf("Ultra 2") != -1 ||
            el.name.indexOf("iPad 9") != -1 ||
            el.name.indexOf("IPad 9") != -1 ||
            el.name.indexOf("iPad 10") != -1 ||
            el.name.indexOf("IPad 10") != -1 ||
            el.name.indexOf("iPad Mini 6") != -1 ||
            el.name.indexOf("iPad Air 5") != -1 ||
            el.name.indexOf("iPad Air 11") != -1 ||
            el.name.indexOf("IPad Air 11") != -1 ||
            el.name.indexOf("iPad Pro 1") != -1 ||
            el.name.indexOf("iMac") != -1 ||
            el.name.indexOf("Macbook") != -1 ||
            el.name.indexOf("Book ") != -1 ||
            el.name.indexOf("MB") != -1 ||
            el.name.indexOf("13.6 M") != -1 ||
            el.name.indexOf("15 M") != -1 ||
            el.name.indexOf("MGN") != -1 ||
            el.name.indexOf("MBPM2-03") != -1 ||
            el.name.indexOf("MBPM2-04") != -1 ||
            el.name.indexOf("MBPM2-05") != -1 ||
            el.name.indexOf("MBPM2-06") != -1 ||
            el.name.indexOf("MBPM2-07") != -1 ||
            el.name.indexOf("MBPM2-08") != -1 ||
            el.name.indexOf("MBPM2-09") != -1 ||
            el.name.indexOf("MBPM2-10") != -1 ||
            el.name.indexOf("MBPM2-11") != -1 ||
            el.name.indexOf("MBPM2-12") != -1 ||
            el.name.indexOf("MBPM2SL-03") != -1 ||
            el.name.indexOf("MBPM2SL-04") != -1 ||
            el.name.indexOf("MBPM2SL-05") != -1 ||
            el.name.indexOf("MBPM2SL-06") != -1 ||
            el.name.indexOf("MBPM2SL-07") != -1 ||
            el.name.indexOf("MBPM2SL-08") != -1 ||
            el.name.indexOf("MBPM2SL-09") != -1 ||
            el.name.indexOf("MBPM2SL-10") != -1 ||
            el.name.indexOf("MBPM2SL-11") != -1 ||
            el.name.indexOf("MBPM2SL-12") != -1 ||
            el.name.indexOf("MGN63") != -1 ||
            el.name.indexOf("MGN93") != -1 ||
            el.name.indexOf("MGND3") != -1 ||
            el.name.indexOf("MLXW3") != -1 ||
            el.name.indexOf("MLXX3") != -1 ||
            el.name.indexOf("MLXY3") != -1 ||
            el.name.indexOf("MLY03") != -1 ||
            el.name.indexOf("MLY13") != -1 ||
            el.name.indexOf("MLY23") != -1 ||
            el.name.indexOf("MLY33") != -1 ||
            el.name.indexOf("MLY43") != -1 ||
            el.name.indexOf("MNEH3") != -1 ||
            el.name.indexOf("MNEJ3") != -1 ||
            el.name.indexOf("MNEP3") != -1 ||
            el.name.indexOf("MNEQ3") != -1 ||
            el.name.indexOf("MPHE3") != -1 ||
            el.name.indexOf("MPHF3") != -1 ||
            el.name.indexOf("MPHH3") != -1 ||
            el.name.indexOf("MPHJ3") != -1 ||
            el.name.indexOf("MQKP3") != -1 ||
            el.name.indexOf("MQKQ3") != -1 ||
            el.name.indexOf("MQKR3") != -1 ||
            el.name.indexOf("MQKT3") != -1 ||
            el.name.indexOf("MQKU3") != -1 ||
            el.name.indexOf("MQKU3") != -1 ||
            el.name.indexOf("MQKV3") != -1 ||
            el.name.indexOf("MQKW3") != -1 ||
            el.name.indexOf("MQKX3") != -1 ||
            el.name.indexOf("MR7J3") != -1 ||
            el.name.indexOf("MR7K3") != -1 ||
            el.name.indexOf("MRW13") != -1 ||
            el.name.indexOf("MRW23") != -1 ||
            el.name.indexOf("MRW33") != -1 ||
            el.name.indexOf("MRW43") != -1 ||
            el.name.indexOf("MRW63") != -1 ||
            el.name.indexOf("MRW73") != -1 ||
            el.name.indexOf("MRX33") != -1 ||
            el.name.indexOf("MRX43") != -1 ||
            el.name.indexOf("MRX53") != -1 ||
            el.name.indexOf("MRX63") != -1 ||
            el.name.indexOf("MRX73") != -1 ||
            el.name.indexOf("MRX83") != -1 ||
            el.name.indexOf("MRXN3") != -1 ||
            el.name.indexOf("MRXP3") != -1 ||
            el.name.indexOf("MRXQ3") != -1 ||
            el.name.indexOf("MRXR3") != -1 ||
            el.name.indexOf("MRXT3") != -1 ||
            el.name.indexOf("MRXU3") != -1 ||
            el.name.indexOf("MRXV3") != -1 ||
            el.name.indexOf("MRXW3") != -1 ||
            el.name.indexOf("MRYM3") != -1 ||
            el.name.indexOf("MRYN3") != -1 ||
            el.name.indexOf("MRYP3") != -1 ||
            el.name.indexOf("MRYQ3") != -1 ||
            el.name.indexOf("MRYR3") != -1 ||
            el.name.indexOf("MRYT3") != -1 ||
            el.name.indexOf("MRYU3") != -1 ||
            el.name.indexOf("MRYV3") != -1 ||
            el.name.indexOf("MTL73") != -1 ||
            el.name.indexOf("MTL83") != -1 ||
            el.name.indexOf("MUW63") != -1 ||
            el.name.indexOf("MUW73") != -1 ||
            el.name.indexOf("MXCR3") != -1 ||
            el.name.indexOf("MXCT3") != -1 ||
            el.name.indexOf("MXCU3") != -1 ||
            el.name.indexOf("MXCV3") != -1 ||
            el.name.indexOf("MXD13") != -1 ||
            el.name.indexOf("MXD23") != -1 ||
            el.name.indexOf("MXD33") != -1 ||
            el.name.indexOf("MXD43") != -1 ||
            el.name.indexOf("Z1AW001FY") != -1 ||
            el.name.indexOf("Z1AW001LV") != -1 ||
            el.name.indexOf("Z1AW001NS") != -1 ||
            el.name.indexOf("MGNR3") != -1 ||
            el.name.indexOf("MGNT3") != -1 ||
            el.name.indexOf("MGPC3") != -1 ||
            el.name.indexOf("MGPD3") != -1 ||
            el.name.indexOf("MGPH3") != -1 ||
            el.name.indexOf("MGPJ3") != -1 ||
            el.name.indexOf("MGPK3") != -1 ||
            el.name.indexOf("MGPL3") != -1 ||
            el.name.indexOf("MGPM3") != -1 ||
            el.name.indexOf("MGPN3") != -1 ||
            el.name.indexOf("MGTF3") != -1 ||
            el.name.indexOf("MJV83") != -1 ||
            el.name.indexOf("MJV93") != -1 ||
            el.name.indexOf("MJVA3") != -1 ||
            el.name.indexOf("MQR93") != -1 ||
            el.name.indexOf("MQRA3") != -1 ||
            el.name.indexOf("MQRC3") != -1 ||
            el.name.indexOf("MQRD3") != -1 ||
            el.name.indexOf("MQRJ3") != -1 ||
            el.name.indexOf("MQRK3") != -1 ||
            el.name.indexOf("MQRN3") != -1 ||
            el.name.indexOf("MQRP3") != -1 ||
            el.name.indexOf("MQRQ3") != -1 ||
            el.name.indexOf("MQRR3") != -1 ||
            el.name.indexOf("MQRT3") != -1 ||
            el.name.indexOf("MQRU3") != -1 ||
            el.name.indexOf("MXNG2") != -1 ||
            el.name.indexOf("Z12SIMAC01") != -1 ||
            el.name.indexOf("Z12TIMAC01") != -1 ||
            el.name.indexOf("Z130IMAC01") != -1 ||
            el.name.indexOf("Z131IMAC01") != -1 ||
            el.name.indexOf("Z132IMAC01") != -1 ||
            el.name.indexOf("Z133IMAC01") != -1 ||
            el.name.indexOf("MXNF2") != -1) &&
          (isProduct || setIsProduct(true)) &&
          returnFixPrice(el, fixName(el)) + newPrice(el.name, el.price)
      )
    );
  };


  return (
    <div>
      <div>
        {allPriceArr.length > 1 && (
          <span
            className={
              checkIsProduct(allPriceArr) && !isProduct
                ? style.titleNotFound
                : isOpen
                ? style.titleOpen
                : style.title
            }
            onClick={() => closedSubMenu()}
          >
            {isOpen ? "Apple ▲" : "Apple ▼"}         
          </span>
        )}
      </div>
      {isOpen && (
        <div className={isOpen ? style.open : style.closed}>
          <div className={style.test}>
            <table className="table">
              <div>
                <div
                  className={
                    checkIsProductAirPods(allPriceArr) && !isProductAirPods
                      ? style.titleCategoryNotFound
                      : isOpenAirPods
                      ? style.titlecategoryOpen
                      : style.titlecategory
                  }
                  onClick={() => setIsOpenAirPods(!isOpenAirPods)}
                >
                  {isOpenAirPods ? "AirPods ▲" : "AirPods ▼"} 
                </div>
                {isOpenAirPods && (
                  <div
                    className={
                      isOpenAirPods ? style.openAppleCategory : style.closed
                    }
                  >
                    <h4
                      onClick={() => {
                        copyTable();
                      }}
                    >
                      ❐ Copy
                    </h4>
                    <tbody>
                      {isAirPods && <div>🎧 **AirPods**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.name.indexOf("AirPods") != -1 ||
                                el.name.indexOf("airpods") != -1 ||
                                el.name.indexOf("Airpods") != -1 ||
                                el.name.indexOf("Air Pods") != -1) &&
                              el.name.indexOf("AirPods Max") == -1 &&
                              (isAirPods || setIsAirPods(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("AirPods") != -1 ||
                                  el.name.indexOf("airpods") != -1 ||
                                  el.name.indexOf("Airpods") != -1 ||
                                  el.name.indexOf("Air Pods") != -1) &&
                                el.name.indexOf("AirPods Max") == -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isAirPodsMax && <br />}
                      {isAirPodsMax && <div>🎧 **AirPods Max**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("AirPods Max") != -1 &&
                              el.name.indexOf("USB-C") == -1 &&
                              el.name.indexOf("2") == -1 &&
                              (isAirPodsMax || setIsAirPodsMax(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("AirPods Max") != -1 &&
                                el.name.indexOf("USB-C") == -1 &&
                                el.name.indexOf("2") == -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isAirPodsMax2024 && <br />}
                      {isAirPodsMax2024 && <div>🎧 **AirPods Max 2024**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("AirPods Max") != -1 &&
                              el.name.indexOf("USB-C") != -1 &&
                              (isAirPodsMax2024 || setIsAirPodsMax2024(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("AirPods Max") != -1 &&
                                el.name.indexOf("USB-C") != -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isPencil && <br />}
                      {isPencil && <div>✏️ **Pencil**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("Pencil") != -1 &&
                              (isPencil || setIsPencil(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("Pencil") != -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isMagic && <br />}
                      {isMagic && <div>🖱️⌨️ **Magic**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.name.indexOf("Magic Keyboard") != -1 ||
                                el.name.indexOf("Magic Mouse") != -1) &&
                              (isMagic || setIsMagic(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("Magic Keyboard") != -1 ||
                                  el.name.indexOf("Magic Mouse") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {(isAsIs13 || isAsIs14 || isAsIs15 || isAsIs16) && <br />}
                      {(isAsIs13 || isAsIs14 || isAsIs15 || isAsIs16) && <br />}
                      {(isAsIs13 || isAsIs14 || isAsIs15 || isAsIs16) && (
                        <div>📱 **iPhone ASIS**</div>
                      )}
                      {allPriceArr.length ? (
                        allPriceArr.map((asis, index) => (
                          <div key={index}>
                            {baseFix(asis) &&
                              (asis.name.indexOf("ASIS") != -1 ||
                                asis.name.indexOf("Asis") != -1) &&
                              (asis.name.indexOf("13 Mini 128") != -1 ||
                                asis.name.indexOf("13 Mini 256") != -1 ||
                                asis.name.indexOf("13 Mini 512") != -1 ||
                                asis.name.indexOf("13 128") != -1 ||
                                asis.name.indexOf("13 256") != -1 ||
                                asis.name.indexOf("13 512") != -1) &&
                              (isAsIs13 || setIsAsIs13(true)) &&
                              returnFixPrice(asis, fixName(asis)) +
                                (asis.provider !== "База"
                                  ? newPrice(asis.name, asis.stockPrice)
                                  : asis.stockPrice)}
                            <h3 className="del">
                              {baseFix(asis) &&
                                (asis.name.indexOf("ASIS") != -1 ||
                                  asis.name.indexOf("Asis") != -1) &&
                                (asis.name.indexOf("13 Mini 128") != -1 ||
                                  asis.name.indexOf("13 Mini 256") != -1 ||
                                  asis.name.indexOf("13 Mini 512") != -1 ||
                                  asis.name.indexOf("13 128") != -1 ||
                                  asis.name.indexOf("13 256") != -1 ||
                                  asis.name.indexOf("13 512") != -1) && (
                                  <span>{" - " + asis.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isAsIs13 && isAsIs14 && <br />}
                      {allPriceArr.length ? (
                        allPriceArr.map((asis, index) => (
                          <div key={index}>
                            {baseFix(asis) &&
                              (asis.name.indexOf("ASIS") != -1 ||
                                asis.name.indexOf("Asis") != -1) &&
                              (asis.name.indexOf("14 128") != -1 ||
                                asis.name.indexOf("14 256") != -1 ||
                                asis.name.indexOf("14 512") != -1 ||
                                asis.name.indexOf("14 Plus") != -1 ||
                                asis.name.indexOf("14 Pro 128") != -1 ||
                                asis.name.indexOf("14 Pro 256") != -1 ||
                                asis.name.indexOf("14 Pro 512") != -1 ||
                                asis.name.indexOf("14 Pro 1TB") != -1 ||
                                asis.name.indexOf("14 Pro Max 128") != -1 ||
                                asis.name.indexOf("14 Pro Max 256") != -1 ||
                                asis.name.indexOf("14 Pro Max 512") != -1 ||
                                asis.name.indexOf("14 Pro Max 1TB") != -1) &&
                              (isAsIs14 || setIsAsIs14(true)) &&
                              returnFixPrice(asis, fixName(asis)) +
                                (asis.provider !== "База"
                                  ? newPrice(asis.name, asis.stockPrice)
                                  : asis.stockPrice)}
                            <h3 className="del">
                              {baseFix(asis) &&
                                (asis.name.indexOf("ASIS") != -1 ||
                                  asis.name.indexOf("Asis") != -1) &&
                                (asis.name.indexOf("14 128") != -1 ||
                                  asis.name.indexOf("14 256") != -1 ||
                                  asis.name.indexOf("14 512") != -1 ||
                                  asis.name.indexOf("14 Plus") != -1 ||
                                  asis.name.indexOf("14 Pro 128") != -1 ||
                                  asis.name.indexOf("14 Pro 256") != -1 ||
                                  asis.name.indexOf("14 Pro 512") != -1 ||
                                  asis.name.indexOf("14 Pro 1TB") != -1 ||
                                  asis.name.indexOf("14 Pro Max 128") != -1 ||
                                  asis.name.indexOf("14 Pro Max 256") != -1 ||
                                  asis.name.indexOf("14 Pro Max 512") != -1 ||
                                  asis.name.indexOf("14 Pro Max 1TB") !=
                                    -1) && <span>{" - " + asis.provider}</span>}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isAsIs15 && (isAsIs13 || isAsIs14) &&  <br />}
                      {allPriceArr.length ? (
                        allPriceArr.map((asis, index) => (
                          <div key={index}>
                            {baseFix(asis) &&
                              (asis.name.indexOf("ASIS") != -1 ||
                                asis.name.indexOf("Asis") != -1) &&
                              (asis.name.indexOf("15 128") != -1 ||
                                asis.name.indexOf("15 256") != -1 ||
                                asis.name.indexOf("15 512") != -1 ||
                                asis.name.indexOf("15 Plus") != -1 ||
                                asis.name.indexOf("15 Pro 128") != -1 ||
                                asis.name.indexOf("15 Pro 256") != -1 ||
                                asis.name.indexOf("15 Pro 512") != -1 ||
                                asis.name.indexOf("15 Pro 1TB") != -1 ||
                                asis.name.indexOf("15 Pro Max 256") != -1 ||
                                asis.name.indexOf("15 Pro Max 512") != -1 ||
                                asis.name.indexOf("15 Pro Max 1TB") != -1) &&
                              (isAsIs15 || setIsAsIs15(true)) &&
                              returnFixPrice(asis, fixName(asis)) +
                                (asis.provider !== "База"
                                  ? newPrice(asis.name, asis.stockPrice)
                                  : asis.stockPrice)}
                            <h3 className="del">
                              {baseFix(asis) &&
                                (asis.name.indexOf("ASIS") != -1 ||
                                  asis.name.indexOf("Asis") != -1) &&
                                (asis.name.indexOf("15 128") != -1 ||
                                  asis.name.indexOf("15 256") != -1 ||
                                  asis.name.indexOf("15 512") != -1 ||
                                  asis.name.indexOf("15 Plus") != -1 ||
                                  asis.name.indexOf("15 Pro 128") != -1 ||
                                  asis.name.indexOf("15 Pro 256") != -1 ||
                                  asis.name.indexOf("15 Pro 512") != -1 ||
                                  asis.name.indexOf("15 Pro 1TB") != -1 ||
                                  asis.name.indexOf("15 Pro Max 256") != -1 ||
                                  asis.name.indexOf("15 Pro Max 512") != -1 ||
                                  asis.name.indexOf("15 Pro Max 1TB") !=
                                    -1) && <span>{" - " + asis.provider}</span>}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isAsIs16 && (isAsIs13 || isAsIs14 || isAsIs15) &&  <br />}
                      {allPriceArr.length ? (
                        allPriceArr.map((asis, index) => (
                          <div key={index}>
                            {baseFix(asis) &&
                              (asis.name.indexOf("ASIS") != -1 ||
                                asis.name.indexOf("Asis") != -1) &&
                              (asis.name.indexOf("16 128") != -1 ||
                                asis.name.indexOf("16 256") != -1 ||
                                asis.name.indexOf("16 512") != -1 ||
                                asis.name.indexOf("16e 128") != -1 ||
                                asis.name.indexOf("16e 256") != -1 ||
                                asis.name.indexOf("16e 512") != -1 ||
                                asis.name.indexOf("16 Plus") != -1 ||
                                asis.name.indexOf("16 Pro 128") != -1 ||
                                asis.name.indexOf("16 Pro 256") != -1 ||
                                asis.name.indexOf("16 Pro 512") != -1 ||
                                asis.name.indexOf("16 Pro 1TB") != -1 ||
                                asis.name.indexOf("16 Pro Max 256") != -1 ||
                                asis.name.indexOf("16 Pro Max 512") != -1 ||
                                asis.name.indexOf("16 Pro Max 1TB") != -1) &&
                              (isAsIs16 || setIsAsIs16(true)) &&
                              returnFixPrice(asis, fixName(asis)) +
                                (asis.provider !== "База"
                                  ? newPrice(asis.name, asis.stockPrice)
                                  : asis.stockPrice)}
                            <h3 className="del">
                              {baseFix(asis) &&
                                (asis.name.indexOf("ASIS") != -1 ||
                                  asis.name.indexOf("Asis") != -1) &&
                                (asis.name.indexOf("16 128") != -1 ||
                                  asis.name.indexOf("16 256") != -1 ||
                                  asis.name.indexOf("16 512") != -1 ||
                                  asis.name.indexOf("16e 128") != -1 ||
                                  asis.name.indexOf("16e 256") != -1 ||
                                  asis.name.indexOf("16e 512") != -1 ||
                                  asis.name.indexOf("16 Plus") != -1 ||
                                  asis.name.indexOf("16 Pro 128") != -1 ||
                                  asis.name.indexOf("16 Pro 256") != -1 ||
                                  asis.name.indexOf("16 Pro 512") != -1 ||
                                  asis.name.indexOf("16 Pro 1TB") != -1 ||
                                  asis.name.indexOf("16 Pro Max 256") != -1 ||
                                  asis.name.indexOf("16 Pro Max 512") != -1 ||
                                  asis.name.indexOf("16 Pro Max 1TB") !=
                                    -1) && <span>{" - " + asis.provider}</span>}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      <Footer />
                    </tbody>
                  </div>
                )}
                <div
                  className={
                    checkIsProductiPhone(allPriceArr) && !isProductiPhone
                      ? style.titleCategoryNotFound
                      : isOpeniPhone
                      ? style.titlecategoryOpen
                      : style.titlecategory
                  }
                  onClick={() => setIsOpeniPhone(!isOpeniPhone)}
                >
                  {isOpeniPhone ? "iPhone ▲" : "iPhone ▼"}
                </div>
                {isOpeniPhone && (
                  <div
                    className={
                      isOpeniPhone ? style.openAppleCategory : style.closed
                    }
                  >
                    <h4
                      onClick={() => {
                        copyTable();
                      }}
                    >
                      ❐ Copy
                    </h4>
                    <tbody>
                      <div>__🇨🇳🇭🇰🇸🇬 ( 2 sim ) 🇸🇬 бывает sim + e sim__</div>
                      <div>__🇺🇸 14 Модели - e sim ( нет лотка sim )__</div>
                      <div> __Остальные страны sim + e sim__</div>
                      {isXR && <div>📱 **iPhone XR**</div>}                     
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              (el.name.indexOf("XR 64") != -1 ||
                                el.name.indexOf("XR 128") != -1) &&
                              (isXR || setIsXR(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                (el.name.indexOf("XR 64") != -1 ||
                                  el.name.indexOf("XR 128") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isSE && <br />}
                      {isSE && <div>📱 **iPhone SE**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              (el.name.indexOf("SE 3") != -1 ||
                                el.name.indexOf("SE 64") != -1 ||
                                el.name.indexOf("SE 128") != -1 ||
                                el.name.indexOf("SE 256") != -1) &&
                              (isSE || setIsSE(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                (el.name.indexOf("SE 3") != -1 ||
                                  el.name.indexOf("SE 64") != -1 ||
                                  el.name.indexOf("SE 128") != -1 ||
                                  el.name.indexOf("SE 256") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is11 && <br />}
                      {is11 && <div>📱 **iPhone 11**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              el.name.indexOf("Air") === -1 &&
                              (el.name.indexOf("11 64") != -1 ||
                                el.name.indexOf("11 128") != -1) &&
                              (is11 || setIs11(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                el.name.indexOf("Air") === -1 &&
                                (el.name.indexOf("11 64") != -1 ||
                                  el.name.indexOf("11 128") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is12 && <br />}
                      {is12 && <div>📱 **iPhone 12**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              (el.name.indexOf("12 64") != -1 ||
                                el.name.indexOf("12 128") != -1 ||
                                el.name.indexOf("12 256") != -1 ||
                                el.name.indexOf("12 Pro Max") != -1) &&
                              (is12 || setIs12(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                (el.name.indexOf("12 64") != -1 ||
                                  el.name.indexOf("12 128") != -1 ||
                                  el.name.indexOf("12 256") != -1 ||
                                  el.name.indexOf("12 Pro Max") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is13Mini && <br />}
                      {is13Mini && <div>📱 **iPhone 13 Mini**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              (el.name.indexOf("13 Mini 128") != -1 ||
                                el.name.indexOf("13 Mini 256") != -1 ||
                                el.name.indexOf("13 Mini 512") != -1) &&
                              (is13Mini || setIs13Mini(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                (el.name.indexOf("13 Mini 128") != -1 ||
                                  el.name.indexOf("13 Mini 256") != -1 ||
                                  el.name.indexOf("13 Mini 512") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is13 && <br />}
                      {is13 && <div>📱 **iPhone 13**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              el.name.indexOf("Air") === -1 &&
                              (el.name.indexOf("13 128") != -1 ||
                                el.name.indexOf("13 256") != -1 ||
                                el.name.indexOf("13 512") != -1) &&
                              (is13 || setIs13(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                el.name.indexOf("Air") === -1 &&
                                (el.name.indexOf("13 128") != -1 ||
                                  el.name.indexOf("13 256") != -1 ||
                                  el.name.indexOf("13 512") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is14 && <br />}
                      {is14 && <div>📱 **iPhone 14**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              (el.name.indexOf("14 128") != -1 ||
                                el.name.indexOf("14 256") != -1 ||
                                el.name.indexOf("14 512") != -1 ||
                                el.name.indexOf("14 Plus") != -1) &&
                              (is14 || setIs14(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                (el.name.indexOf("14 128") != -1 ||
                                  el.name.indexOf("14 256") != -1 ||
                                  el.name.indexOf("14 512") != -1 ||
                                  el.name.indexOf("14 Plus") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is14Pro && <br />}
                      {is14Pro && <div>📱 **iPhone 14 Pro**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              (el.name.indexOf("14 Pro 128") != -1 ||
                                el.name.indexOf("14 Pro 256") != -1 ||
                                el.name.indexOf("14 Pro 512") != -1 ||
                                el.name.indexOf("14 Pro 1TB") != -1) &&
                              (is14Pro || setIs14Pro(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                (el.name.indexOf("14 Pro 128") != -1 ||
                                  el.name.indexOf("14 Pro 256") != -1 ||
                                  el.name.indexOf("14 Pro 512") != -1 ||
                                  el.name.indexOf("14 Pro 1TB") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is15 && <br />}
                      {is15 && <div>📱 **iPhone 15**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              (el.name.indexOf("15 128") != -1 ||
                                el.name.indexOf("15 256") != -1 ||
                                el.name.indexOf("15 512") != -1) &&
                              (is15 || setIs15(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                (el.name.indexOf("15 128") != -1 ||
                                  el.name.indexOf("15 256") != -1 ||
                                  el.name.indexOf("15 512") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is15Plus && <br />}
                      {is15Plus && <div>📱 **iPhone 15 Plus**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              (el.name.indexOf("15 Plus 128") != -1 ||
                                el.name.indexOf("15 Plus 256") != -1 ||
                                el.name.indexOf("15 Plus 512") != -1) &&
                              (is15Plus || setIs15Plus(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                (el.name.indexOf("15 Plus 128") != -1 ||
                                  el.name.indexOf("15 Plus 256") != -1 ||
                                  el.name.indexOf("15 Plus 512") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is15Pro && <br />}
                      {is15Pro && <div>📱 **iPhone 15 Pro**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              (el.name.indexOf("15 Pro 128") != -1 ||
                                el.name.indexOf("15 Pro 256") != -1 ||
                                el.name.indexOf("15 Pro 512") != -1 ||
                                el.name.indexOf("15 Pro 1Tb") != -1) &&
                              (is15Pro || setIs15Pro(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                (el.name.indexOf("15 Pro 128") != -1 ||
                                  el.name.indexOf("15 Pro 256") != -1 ||
                                  el.name.indexOf("15 Pro 512") != -1 ||
                                  el.name.indexOf("15 Pro 1Tb") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is15ProMax && <br />}
                      {is15ProMax && <div>📱 **iPhone 15 Pro Max**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              (el.name.indexOf("15 ProMax 256") != -1 ||
                                el.name.indexOf("15 ProMax 512") != -1 ||
                                el.name.indexOf("15 ProMax 1Tb") != -1 ||
                                el.name.indexOf("15 Pro Max 256") != -1 ||
                                el.name.indexOf("15 Pro Max 512") != -1 ||
                                el.name.indexOf("15 Pro Max 1Tb") != -1 ||
                                el.name.indexOf("15 Pro Max 1TB") != -1 ||
                                el.name.indexOf("15 Pro Max 1Tb") != -1) &&
                              (is15ProMax || setIs15ProMax(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                (el.name.indexOf("15 ProMax 256") != -1 ||
                                  el.name.indexOf("15 ProMax 512") != -1 ||
                                  el.name.indexOf("15 ProMax 1Tb") != -1 ||
                                  el.name.indexOf("15 Pro Max 256") != -1 ||
                                  el.name.indexOf("15 Pro Max 512") != -1 ||
                                  el.name.indexOf("15 Pro Max 1Tb") != -1 ||
                                  el.name.indexOf("15 Pro Max 1TB") != -1 ||
                                  el.name.indexOf("15 Pro Max 1Tb") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is16e && <br />}
                      {is16e && <div>📱 **🔥iPhone 16e🔥**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              (el.name.indexOf("16e 128") != -1 ||
                                el.name.indexOf("16e 256") != -1 ||
                                el.name.indexOf("16e 512") != -1 ||
                                el.name.indexOf("16Е 128") != -1 ||
                                el.name.indexOf("16E 256") != -1 ||
                                el.name.indexOf("16E 512") != -1) &&
                              (is16e || setIs16e(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                (el.name.indexOf("16e 128") != -1 ||
                                  el.name.indexOf("16e 256") != -1 ||
                                  el.name.indexOf("16e 512") != -1 ||
                                  el.name.indexOf("16Е 128") != -1 ||
                                  el.name.indexOf("16E 256") != -1 ||
                                  el.name.indexOf("16E 512") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is16 && <br />}
                      {is16 && <div>📱 **iPhone 16**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              (el.name.indexOf("16 128") != -1 ||
                                el.name.indexOf("16 256") != -1 ||
                                el.name.indexOf("16 512") != -1) &&
                              (is16 || setIs16(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                (el.name.indexOf("16 128") != -1 ||
                                  el.name.indexOf("16 256") != -1 ||
                                  el.name.indexOf("16 512") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is16Plus && <br />}
                      {is16Plus && <div>📱 **iPhone 16 Plus**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              (el.name.indexOf("16 Plus 128") != -1 ||
                                el.name.indexOf("16 Plus 256") != -1 ||
                                el.name.indexOf("16 Plus 512") != -1) &&
                              (is16Plus || setIs16Plus(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                (el.name.indexOf("16 Plus 128") != -1 ||
                                  el.name.indexOf("16 Plus 256") != -1 ||
                                  el.name.indexOf("16 Plus 512") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is16Pro && <br />}
                      {is16Pro && <div>📱 **iPhone 16 Pro**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("ASIS") === -1 &&
                              el.name.indexOf("Asis") === -1 &&
                              (el.name.indexOf("16 Pro 128") != -1 ||
                                el.name.indexOf("16 Pro 256") != -1 ||
                                el.name.indexOf("16 Pro 512") != -1 ||
                                el.name.indexOf("16 Pro 1Tb") != -1) &&
                              (is16Pro || setIs16Pro(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("ASIS") === -1 &&
                                el.name.indexOf("Asis") === -1 &&
                                (el.name.indexOf("16 Pro 128") != -1 ||
                                  el.name.indexOf("16 Pro 256") != -1 ||
                                  el.name.indexOf("16 Pro 512") != -1 ||
                                  el.name.indexOf("16 Pro 1Tb") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is16ProMax && <br />}
                      {is16ProMax && <div>📱 **iPhone 16 Pro Max**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((iPhone16PM, index) => (
                          <div key={index}>
                            {baseFix(iPhone16PM) &&
                              iPhone16PM.name.indexOf("ASIS") === -1 &&
                              iPhone16PM.name.indexOf("Asis") === -1 &&
                              (iPhone16PM.name.indexOf("16 ProMax 256") != -1 ||
                                iPhone16PM.name.indexOf("16 ProMax 512") !=
                                  -1 ||
                                iPhone16PM.name.indexOf("16 ProMax 1Tb") !=
                                  -1 ||
                                iPhone16PM.name.indexOf("16 Pro Max 256") !=
                                  -1 ||
                                iPhone16PM.name.indexOf("16 Pro Max 512") !=
                                  -1 ||
                                iPhone16PM.name.indexOf("16 Pro Max 1Tb") !=
                                  -1 ||
                                iPhone16PM.name.indexOf("16 Pro Max 1TB") !=
                                  -1 ||
                                iPhone16PM.name.indexOf("16 Pro Max 1Tb") !=
                                  -1) &&
                              (is16ProMax || setIs16ProMax(true)) &&
                              returnFixPrice(iPhone16PM, fixName(iPhone16PM)) +
                                (iPhone16PM.provider !== "База"
                                  ? newPrice(
                                      iPhone16PM.name,
                                      iPhone16PM.stockPrice
                                    )
                                  : iPhone16PM.stockPrice)}
                            <h3 className="del">
                              {baseFix(iPhone16PM) &&
                                iPhone16PM.name.indexOf("ASIS") === -1 &&
                                iPhone16PM.name.indexOf("Asis") === -1 &&
                                (iPhone16PM.name.indexOf("16 ProMax 256") !=
                                  -1 ||
                                  iPhone16PM.name.indexOf("16 ProMax 512") !=
                                    -1 ||
                                  iPhone16PM.name.indexOf("16 ProMax 1Tb") !=
                                    -1 ||
                                  iPhone16PM.name.indexOf("16 Pro Max 256") !=
                                    -1 ||
                                  iPhone16PM.name.indexOf("16 Pro Max 512") !=
                                    -1 ||
                                  iPhone16PM.name.indexOf("16 Pro Max 1Tb") !=
                                    -1 ||
                                  iPhone16PM.name.indexOf("16 Pro Max 1TB") !=
                                    -1 ||
                                  iPhone16PM.name.indexOf("16 Pro Max 1Tb") !=
                                    -1) && (
                                  <span>{" - " + iPhone16PM.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      <Footer />
                    </tbody>
                  </div>
                )}
                <div
                  className={
                    checkIsProductAW(allPriceArr) && !isProductAW
                      ? style.titleCategoryNotFound
                      : isOpenWatch
                      ? style.titlecategoryOpen
                      : style.titlecategory
                  }
                  onClick={() => setIsOpenWatch(!isOpenWatch)}
                >
                  {isOpenWatch ? "AW ▲" : "AW ▼"}
                </div>
                {isOpenWatch && (
                  <div
                    className={
                      isOpenWatch ? style.openAppleCategory : style.closed
                    }
                  >
                    <h4
                      onClick={() => {
                        copyTable();
                      }}
                    >
                      ❐ Copy
                    </h4>
                    <tbody>
                      {isSEWatch && <div>⌚ **AW SE**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.name.indexOf("Watch SE") != -1 ||
                                el.name.indexOf("SE (2023) Gen") != -1 ||
                                el.name.indexOf("SE (2022) Gen") != -1 ||
                                el.name.indexOf("SE 2") != -1 ||
                                el.name.indexOf("SE2 4") != -1 ||
                                el.name.indexOf("SE 4") != -1 ||
                                el.name.indexOf("SE (2022) 64") != -1 ||
                                el.name.indexOf("SE (2022) 128") != -1 ||
                                el.name.indexOf("SE (2022) 256") != -1) &&
                              el.name.indexOf("OnePlus") === -1 &&
                              (isSEWatch || setIsSEWatch(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("Watch SE") != -1 ||
                                  el.name.indexOf("SE (2023) Gen") != -1 ||
                                  el.name.indexOf("SE (2022) Gen") != -1 ||
                                  el.name.indexOf("SE 2") != -1 ||
                                  el.name.indexOf("SE2 4") != -1 ||
                                  el.name.indexOf("SE 4") != -1 ||
                                  el.name.indexOf("SE (2022) 64") != -1 ||
                                  el.name.indexOf("SE (2022) 128") != -1 ||
                                  el.name.indexOf("SE (2022) 256") != -1) &&
                                el.name.indexOf("OnePlus") === -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isS8 && <br />}
                      {isS8 && <div>⌚ **AW S8**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.name.indexOf("Watch S8") != -1 ||
                                el.name.indexOf("S8 4") != -1 ||
                                el.name.indexOf("AW Series 8") != -1 ||
                                el.name.indexOf("AW 8") != -1 ||
                                el.name.indexOf("AW  8") != -1) &&
                              (isS8 || setIsS8(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("Watch S8") != -1 ||
                                  el.name.indexOf("S8 4") != -1 ||
                                  el.name.indexOf("AW Series 8") != -1 ||
                                  el.name.indexOf("AW 8") != -1 ||
                                  el.name.indexOf("AW  8") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isS9 && <br />}
                      {isS9 && <div>⌚ **AW S9**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.name.indexOf("Watch S9") != -1 ||
                                el.name.indexOf("AW Series 9") != -1 ||
                                el.name.indexOf("AW 9") != -1 ||
                                el.name.indexOf("S9 4") != -1 ||
                                el.name.indexOf("AW  9") != -1) &&
                              (isS9 || setIsS9(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("Watch S9") != -1 ||
                                  el.name.indexOf("AW Series 9") != -1 ||
                                  el.name.indexOf("AW 9") != -1 ||
                                  el.name.indexOf("S9 4") != -1 ||
                                  el.name.indexOf("AW  9") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isS10 && <br />}
                      {isS10 && <div>⌚ **AW S10**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.name.indexOf("Watch S10") != -1 ||
                                el.name.indexOf("AW Series 10") != -1 ||
                                el.name.indexOf("AW 10") != -1 ||
                                el.name.indexOf("S10 4") != -1 ||
                                el.name.indexOf("AW  10") != -1) &&
                              (isS10 || setIsS10(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("Watch S10") != -1 ||
                                  el.name.indexOf("AW Series 10") != -1 ||
                                  el.name.indexOf("AW 10") != -1 ||
                                  el.name.indexOf("S10 4") != -1 ||
                                  el.name.indexOf("AW  10") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isUltra && <br />}
                      {isUltra && <div>⌚ **AW Ultra**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.name.indexOf("Ultra 2") != -1 ||
                                el.name.indexOf("UL 2") != -1) &&
                              el.name.indexOf("2024") == -1 &&
                              (isUltra || setIsUltra(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("Ultra 2") != -1 ||
                                  el.name.indexOf("UL 2") != -1) &&
                                el.name.indexOf("2024") == -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isUltra2024 && <br />}
                      {isUltra2024 && <div>⌚ **AW Ultra 2024**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.name.indexOf("Ultra 2 2024") != -1 ||
                                el.name.indexOf("Ultra 2 (2024)") != -1 ||
                                (el.name.indexOf("UL 2") != -1 &&
                                  el.name.indexOf("2024") != -1)) &&
                              (isUltra2024 || setIsUltra2024(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("Ultra 2 2024") != -1 ||
                                  el.name.indexOf("Ultra 2 (2024)") != -1 ||
                                  (el.name.indexOf("UL 2") != -1 &&
                                    el.name.indexOf("2024") != -1)) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      <Footer />
                    </tbody>
                  </div>
                )}
                <div
                  className={
                    checkIsProductiPad(allPriceArr) && !isProductiPad
                      ? style.titleCategoryNotFound
                      : isOpeniPad
                      ? style.titlecategoryOpen
                      : style.titlecategory
                  }
                  onClick={() => setIsOpeniPad(!isOpeniPad)}
                >
                  {isOpeniPad ? "iPad ▲" : "iPad ▼"}
                </div>
                {isOpeniPad && (
                  <div
                    className={
                      isOpeniPad ? style.openAppleCategory : style.closed
                    }
                  >
                    <h4
                      onClick={() => {
                        copyTable();
                      }}
                    >
                      ❐ Copy
                    </h4>
                    <tbody>
                      {isiPad9 && <div>📟 **iPad 9**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.name.indexOf("iPad 9") != -1 ||
                                el.name.indexOf("IPad 9") != -1) &&
                              (isiPad9 || setIsiPad9(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("iPad 9") != -1 ||
                                  el.name.indexOf("IPad 9") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isiPad10 && <br />}
                      {isiPad10 && <div>📟 **iPad 10**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.name.indexOf("iPad 10") != -1 ||
                                el.name.indexOf("IPad 10") != -1) &&
                              (isiPad10 || setIsiPad10(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("iPad 10") != -1 ||
                                  el.name.indexOf("IPad 10") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isiPadMini && <br />}
                      {isiPadMini && <div>📟 **iPad Mini**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("Mini 64") === -1 &&
                              (el.name.indexOf("Mini 6") != -1 ||
                                el.name.indexOf("MINI 6") != -1 ||
                                el.name.indexOf("Mini 7") != -1 ||
                                el.name.indexOf("MINI 7") != -1) &&
                              (isiPadMini || setIsiPadMini(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("Mini 64") === -1 &&
                                (el.name.indexOf("Mini 6") != -1 ||
                                  el.name.indexOf("MINI 6") != -1 ||
                                  el.name.indexOf("Mini 7") != -1 ||
                                  el.name.indexOf("MINI 7") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isiPadAir && <br />}
                      {isiPadAir && <div>📟 **iPad Air**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.name.indexOf("iPad Air 5") != -1 ||
                                el.name.indexOf("iPad Air 11") != -1 ||
                                el.name.indexOf("iPad Air 13") != -1 ||
                                el.name.indexOf("IPad Air 11") != -1) &&
                              (isiPadAir || setIsiPadAir(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("iPad Air 5") != -1 ||
                                  el.name.indexOf("iPad Air 11") != -1 ||
                                  el.name.indexOf("iPad Air 13") != -1 ||
                                  el.name.indexOf("IPad Air 11") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isiPadPro11 && <br />}
                      {isiPadPro11 && <div>📟 **iPad Pro 11**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("Magic Keyboard") == -1 &&
                              el.name.indexOf("iPad Pro 11") != -1 &&
                              (isiPadPro11 || setIsiPadPro11(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("Magic Keyboard") == -1 &&
                                el.name.indexOf("iPad Pro 11") != -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isiPadPro12 && <br />}
                      {isiPadPro12 && <div>📟 **iPad Pro 12**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("iPad Pro 12") != -1 &&
                              (isiPadPro12 || setIsiPadPro12(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("iPad Pro 12") != -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isiPadPro13 && <br />}
                      {isiPadPro13 && <div>📟 **iPad Pro 13**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.name.indexOf("iPad Pro 13") != -1 &&
                              el.name.indexOf("Magic Keyboard") == -1 &&
                              (isiPadPro13 || setIsiPadPro13(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("iPad Pro 13") != -1 &&
                                el.name.indexOf("Magic Keyboard") == -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      <Footer /> 
                    </tbody>
                  </div>
                )}
                <div
                  className={
                    checkIsProductMac(allPriceArr) && !isProductMac
                      ? style.titleCategoryNotFound
                      : isOpenMacBook
                      ? style.titlecategoryOpen
                      : style.titlecategory
                  }
                  onClick={() => setIsOpenMacBook(!isOpenMacBook)}
                >
                  {isOpenMacBook ? "MacBook ▲" : "MacBook ▼"} 
                </div>
                {isOpenMacBook && (
                  <div
                    className={
                      isOpenMacBook ? style.openAppleCategory : style.closed
                    }
                  >
                    <h4
                      onClick={() => {
                        copyTable();
                      }}
                    >
                      ❐ Copy
                    </h4>
                    <tbody>
                      {isiMac && <br />}
                      {isiMac && <div>🖥️ **iMac**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.name.indexOf("iMac") != -1 ||
                                el.name.indexOf("MGNR3") != -1 ||
                                el.name.indexOf("MGNT3") != -1 ||
                                el.name.indexOf("MGPC3") != -1 ||
                                el.name.indexOf("MGPD3") != -1 ||
                                el.name.indexOf("MGPH3") != -1 ||
                                el.name.indexOf("MGPJ3") != -1 ||
                                el.name.indexOf("MGPK3") != -1 ||
                                el.name.indexOf("MGPL3") != -1 ||
                                el.name.indexOf("MGPM3") != -1 ||
                                el.name.indexOf("MGPN3") != -1 ||
                                el.name.indexOf("MGTF3") != -1 ||
                                el.name.indexOf("MJV83") != -1 ||
                                el.name.indexOf("MJV93") != -1 ||
                                el.name.indexOf("MJVA3") != -1 ||
                                el.name.indexOf("MQR93") != -1 ||
                                el.name.indexOf("MQRA3") != -1 ||
                                el.name.indexOf("MQRC3") != -1 ||
                                el.name.indexOf("MQRD3") != -1 ||
                                el.name.indexOf("MQRJ3") != -1 ||
                                el.name.indexOf("MQRK3") != -1 ||
                                el.name.indexOf("MQRN3") != -1 ||
                                el.name.indexOf("MQRP3") != -1 ||
                                el.name.indexOf("MQRQ3") != -1 ||
                                el.name.indexOf("MQRR3") != -1 ||
                                el.name.indexOf("MQRT3") != -1 ||
                                el.name.indexOf("MQRU3") != -1 ||
                                el.name.indexOf("MXNG2") != -1 ||
                                el.name.indexOf("Z12SIMAC01") != -1 ||
                                el.name.indexOf("Z12TIMAC01") != -1 ||
                                el.name.indexOf("Z130IMAC01") != -1 ||
                                el.name.indexOf("Z131IMAC01") != -1 ||
                                el.name.indexOf("Z132IMAC01") != -1 ||
                                el.name.indexOf("Z133IMAC01") != -1 ||
                                el.name.indexOf("MXNF2") != -1) &&
                              (isiMac || setIsiMac(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("iMac") != -1 ||
                                  el.name.indexOf("MGNR3") != -1 ||
                                  el.name.indexOf("MGNT3") != -1 ||
                                  el.name.indexOf("MGPC3") != -1 ||
                                  el.name.indexOf("MGPD3") != -1 ||
                                  el.name.indexOf("MGPH3") != -1 ||
                                  el.name.indexOf("MGPJ3") != -1 ||
                                  el.name.indexOf("MGPK3") != -1 ||
                                  el.name.indexOf("MGPL3") != -1 ||
                                  el.name.indexOf("MGPM3") != -1 ||
                                  el.name.indexOf("MGPN3") != -1 ||
                                  el.name.indexOf("MGTF3") != -1 ||
                                  el.name.indexOf("MJV83") != -1 ||
                                  el.name.indexOf("MJV93") != -1 ||
                                  el.name.indexOf("MJVA3") != -1 ||
                                  el.name.indexOf("MQR93") != -1 ||
                                  el.name.indexOf("MQRA3") != -1 ||
                                  el.name.indexOf("MQRC3") != -1 ||
                                  el.name.indexOf("MQRD3") != -1 ||
                                  el.name.indexOf("MQRJ3") != -1 ||
                                  el.name.indexOf("MQRK3") != -1 ||
                                  el.name.indexOf("MQRN3") != -1 ||
                                  el.name.indexOf("MQRP3") != -1 ||
                                  el.name.indexOf("MQRQ3") != -1 ||
                                  el.name.indexOf("MQRR3") != -1 ||
                                  el.name.indexOf("MQRT3") != -1 ||
                                  el.name.indexOf("MQRU3") != -1 ||
                                  el.name.indexOf("MXNG2") != -1 ||
                                  el.name.indexOf("Z12SIMAC01") != -1 ||
                                  el.name.indexOf("Z12TIMAC01") != -1 ||
                                  el.name.indexOf("Z130IMAC01") != -1 ||
                                  el.name.indexOf("Z131IMAC01") != -1 ||
                                  el.name.indexOf("Z132IMAC01") != -1 ||
                                  el.name.indexOf("Z133IMAC01") != -1 ||
                                  el.name.indexOf("MXNF2") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {isMacBook && <br />}
                      {isMacBook && <div>💻 **MacBook**</div>}
                      {allPriceArr.length ? (
                        allPriceArr.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.name.indexOf("Macbook") != -1 ||
                                el.name.indexOf("Book ") != -1 ||
                                el.name.indexOf("MB") != -1 ||
                                el.name.indexOf("13.6 M") != -1 ||
                                el.name.indexOf("15 M") != -1 ||
                                el.name.indexOf("MGN") != -1 ||
                                el.name.indexOf("MBPM2-03") != -1 ||
                                el.name.indexOf("MBPM2-04") != -1 ||
                                el.name.indexOf("MBPM2-05") != -1 ||
                                el.name.indexOf("MBPM2-06") != -1 ||
                                el.name.indexOf("MBPM2-07") != -1 ||
                                el.name.indexOf("MBPM2-08") != -1 ||
                                el.name.indexOf("MBPM2-09") != -1 ||
                                el.name.indexOf("MBPM2-10") != -1 ||
                                el.name.indexOf("MBPM2-11") != -1 ||
                                el.name.indexOf("MBPM2-12") != -1 ||
                                el.name.indexOf("MBPM2SL-03") != -1 ||
                                el.name.indexOf("MBPM2SL-04") != -1 ||
                                el.name.indexOf("MBPM2SL-05") != -1 ||
                                el.name.indexOf("MBPM2SL-06") != -1 ||
                                el.name.indexOf("MBPM2SL-07") != -1 ||
                                el.name.indexOf("MBPM2SL-08") != -1 ||
                                el.name.indexOf("MBPM2SL-09") != -1 ||
                                el.name.indexOf("MBPM2SL-10") != -1 ||
                                el.name.indexOf("MBPM2SL-11") != -1 ||
                                el.name.indexOf("MBPM2SL-12") != -1 ||
                                el.name.indexOf("MGN63") != -1 ||
                                el.name.indexOf("MGN93") != -1 ||
                                el.name.indexOf("MGND3") != -1 ||
                                el.name.indexOf("MLXW3") != -1 ||
                                el.name.indexOf("MLXX3") != -1 ||
                                el.name.indexOf("MLXY3") != -1 ||
                                el.name.indexOf("MLY03") != -1 ||
                                el.name.indexOf("MLY13") != -1 ||
                                el.name.indexOf("MLY23") != -1 ||
                                el.name.indexOf("MLY33") != -1 ||
                                el.name.indexOf("MLY43") != -1 ||
                                el.name.indexOf("MNEH3") != -1 ||
                                el.name.indexOf("MNEJ3") != -1 ||
                                el.name.indexOf("MNEP3") != -1 ||
                                el.name.indexOf("MNEQ3") != -1 ||
                                el.name.indexOf("MPHE3") != -1 ||
                                el.name.indexOf("MPHF3") != -1 ||
                                el.name.indexOf("MPHH3") != -1 ||
                                el.name.indexOf("MPHJ3") != -1 ||
                                el.name.indexOf("MQKP3") != -1 ||
                                el.name.indexOf("MQKQ3") != -1 ||
                                el.name.indexOf("MQKR3") != -1 ||
                                el.name.indexOf("MQKT3") != -1 ||
                                el.name.indexOf("MQKU3") != -1 ||
                                el.name.indexOf("MQKU3") != -1 ||
                                el.name.indexOf("MQKV3") != -1 ||
                                el.name.indexOf("MQKW3") != -1 ||
                                el.name.indexOf("MQKX3") != -1 ||
                                el.name.indexOf("MR7J3") != -1 ||
                                el.name.indexOf("MR7K3") != -1 ||
                                el.name.indexOf("MRW13") != -1 ||
                                el.name.indexOf("MRW23") != -1 ||
                                el.name.indexOf("MRW33") != -1 ||
                                el.name.indexOf("MRW43") != -1 ||
                                el.name.indexOf("MRW63") != -1 ||
                                el.name.indexOf("MRW73") != -1 ||
                                el.name.indexOf("MRX33") != -1 ||
                                el.name.indexOf("MRX43") != -1 ||
                                el.name.indexOf("MRX53") != -1 ||
                                el.name.indexOf("MRX63") != -1 ||
                                el.name.indexOf("MRX73") != -1 ||
                                el.name.indexOf("MRX83") != -1 ||
                                el.name.indexOf("MRXN3") != -1 ||
                                el.name.indexOf("MRXP3") != -1 ||
                                el.name.indexOf("MRXQ3") != -1 ||
                                el.name.indexOf("MRXR3") != -1 ||
                                el.name.indexOf("MRXT3") != -1 ||
                                el.name.indexOf("MRXU3") != -1 ||
                                el.name.indexOf("MRXV3") != -1 ||
                                el.name.indexOf("MRXW3") != -1 ||
                                el.name.indexOf("MRYM3") != -1 ||
                                el.name.indexOf("MRYN3") != -1 ||
                                el.name.indexOf("MRYP3") != -1 ||
                                el.name.indexOf("MRYQ3") != -1 ||
                                el.name.indexOf("MRYR3") != -1 ||
                                el.name.indexOf("MRYT3") != -1 ||
                                el.name.indexOf("MRYU3") != -1 ||
                                el.name.indexOf("MRYV3") != -1 ||
                                el.name.indexOf("MTL73") != -1 ||
                                el.name.indexOf("MTL83") != -1 ||
                                el.name.indexOf("MUW63") != -1 ||
                                el.name.indexOf("MUW73") != -1 ||
                                el.name.indexOf("MXCR3") != -1 ||
                                el.name.indexOf("MXCT3") != -1 ||
                                el.name.indexOf("MXCU3") != -1 ||
                                el.name.indexOf("MXCV3") != -1 ||
                                el.name.indexOf("MXD13") != -1 ||
                                el.name.indexOf("MXD23") != -1 ||
                                el.name.indexOf("MXD33") != -1 ||
                                el.name.indexOf("MXD43") != -1 ||
                                el.name.indexOf("Z1AW001FY") != -1 ||
                                el.name.indexOf("Z1AW001LV") != -1 ||
                                el.name.indexOf("Z1AW001NS") != -1 ||
                                el.name.indexOf("MW123") != -1 ||
                                el.name.indexOf("MW0W3") != -1 ||
                                el.name.indexOf("MC6T4") != -1 ||
                                el.name.indexOf("MW0Y3") != -1 ||
                                el.name.indexOf("MC6V4") != -1 ||
                                el.name.indexOf("MW0X3") != -1 ||
                                el.name.indexOf("MC6V4") != -1 ||
                                el.name.indexOf("MW103") != -1 ||
                                el.name.indexOf("MW1L3") != -1 ||
                                el.name.indexOf("MW1G3") != -1 ||
                                el.name.indexOf("MC7A4") != -1 ||
                                el.name.indexOf("MW1J3") != -1 ||
                                el.name.indexOf("MW1M3") != -1 ||
                                el.name.indexOf("MW1H3") != -1 ||
                                el.name.indexOf("MC7C4") != -1 ||
                                el.name.indexOf("MW1K3") != -1) &&
                              (isMacBook || setIsMacBook(true)) &&
                              returnFixPrice(el, fixName(el)) +
                                (el.provider !== "База"
                                  ? newPrice(el.name, el.stockPrice)
                                  : el.stockPrice)}
                            <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("Macbook") != -1 ||
                                  el.name.indexOf("Book ") != -1 ||
                                  el.name.indexOf("MB") != -1 ||
                                  el.name.indexOf("13.6 M") != -1 ||
                                  el.name.indexOf("15 M") != -1 ||
                                  el.name.indexOf("MGN") != -1 ||
                                  el.name.indexOf("MBPM2-03") != -1 ||
                                  el.name.indexOf("MBPM2-04") != -1 ||
                                  el.name.indexOf("MBPM2-05") != -1 ||
                                  el.name.indexOf("MBPM2-06") != -1 ||
                                  el.name.indexOf("MBPM2-07") != -1 ||
                                  el.name.indexOf("MBPM2-08") != -1 ||
                                  el.name.indexOf("MBPM2-09") != -1 ||
                                  el.name.indexOf("MBPM2-10") != -1 ||
                                  el.name.indexOf("MBPM2-11") != -1 ||
                                  el.name.indexOf("MBPM2-12") != -1 ||
                                  el.name.indexOf("MBPM2SL-03") != -1 ||
                                  el.name.indexOf("MBPM2SL-04") != -1 ||
                                  el.name.indexOf("MBPM2SL-05") != -1 ||
                                  el.name.indexOf("MBPM2SL-06") != -1 ||
                                  el.name.indexOf("MBPM2SL-07") != -1 ||
                                  el.name.indexOf("MBPM2SL-08") != -1 ||
                                  el.name.indexOf("MBPM2SL-09") != -1 ||
                                  el.name.indexOf("MBPM2SL-10") != -1 ||
                                  el.name.indexOf("MBPM2SL-11") != -1 ||
                                  el.name.indexOf("MBPM2SL-12") != -1 ||
                                  el.name.indexOf("MGN63") != -1 ||
                                  el.name.indexOf("MGN93") != -1 ||
                                  el.name.indexOf("MGND3") != -1 ||
                                  el.name.indexOf("MLXW3") != -1 ||
                                  el.name.indexOf("MLXX3") != -1 ||
                                  el.name.indexOf("MLXY3") != -1 ||
                                  el.name.indexOf("MLY03") != -1 ||
                                  el.name.indexOf("MLY13") != -1 ||
                                  el.name.indexOf("MLY23") != -1 ||
                                  el.name.indexOf("MLY33") != -1 ||
                                  el.name.indexOf("MLY43") != -1 ||
                                  el.name.indexOf("MNEH3") != -1 ||
                                  el.name.indexOf("MNEJ3") != -1 ||
                                  el.name.indexOf("MNEP3") != -1 ||
                                  el.name.indexOf("MNEQ3") != -1 ||
                                  el.name.indexOf("MPHE3") != -1 ||
                                  el.name.indexOf("MPHF3") != -1 ||
                                  el.name.indexOf("MPHH3") != -1 ||
                                  el.name.indexOf("MPHJ3") != -1 ||
                                  el.name.indexOf("MQKP3") != -1 ||
                                  el.name.indexOf("MQKQ3") != -1 ||
                                  el.name.indexOf("MQKR3") != -1 ||
                                  el.name.indexOf("MQKT3") != -1 ||
                                  el.name.indexOf("MQKU3") != -1 ||
                                  el.name.indexOf("MQKU3") != -1 ||
                                  el.name.indexOf("MQKV3") != -1 ||
                                  el.name.indexOf("MQKW3") != -1 ||
                                  el.name.indexOf("MQKX3") != -1 ||
                                  el.name.indexOf("MR7J3") != -1 ||
                                  el.name.indexOf("MR7K3") != -1 ||
                                  el.name.indexOf("MRW13") != -1 ||
                                  el.name.indexOf("MRW23") != -1 ||
                                  el.name.indexOf("MRW33") != -1 ||
                                  el.name.indexOf("MRW43") != -1 ||
                                  el.name.indexOf("MRW63") != -1 ||
                                  el.name.indexOf("MRW73") != -1 ||
                                  el.name.indexOf("MRX33") != -1 ||
                                  el.name.indexOf("MRX43") != -1 ||
                                  el.name.indexOf("MRX53") != -1 ||
                                  el.name.indexOf("MRX63") != -1 ||
                                  el.name.indexOf("MRX73") != -1 ||
                                  el.name.indexOf("MRX83") != -1 ||
                                  el.name.indexOf("MRXN3") != -1 ||
                                  el.name.indexOf("MRXP3") != -1 ||
                                  el.name.indexOf("MRXQ3") != -1 ||
                                  el.name.indexOf("MRXR3") != -1 ||
                                  el.name.indexOf("MRXT3") != -1 ||
                                  el.name.indexOf("MRXU3") != -1 ||
                                  el.name.indexOf("MRXV3") != -1 ||
                                  el.name.indexOf("MRXW3") != -1 ||
                                  el.name.indexOf("MRYM3") != -1 ||
                                  el.name.indexOf("MRYN3") != -1 ||
                                  el.name.indexOf("MRYP3") != -1 ||
                                  el.name.indexOf("MRYQ3") != -1 ||
                                  el.name.indexOf("MRYR3") != -1 ||
                                  el.name.indexOf("MRYT3") != -1 ||
                                  el.name.indexOf("MRYU3") != -1 ||
                                  el.name.indexOf("MRYV3") != -1 ||
                                  el.name.indexOf("MTL73") != -1 ||
                                  el.name.indexOf("MTL83") != -1 ||
                                  el.name.indexOf("MUW63") != -1 ||
                                  el.name.indexOf("MUW73") != -1 ||
                                  el.name.indexOf("MXCR3") != -1 ||
                                  el.name.indexOf("MXCT3") != -1 ||
                                  el.name.indexOf("MXCU3") != -1 ||
                                  el.name.indexOf("MXCV3") != -1 ||
                                  el.name.indexOf("MXD13") != -1 ||
                                  el.name.indexOf("MXD23") != -1 ||
                                  el.name.indexOf("MXD33") != -1 ||
                                  el.name.indexOf("MXD43") != -1 ||
                                  el.name.indexOf("Z1AW001FY") != -1 ||
                                  el.name.indexOf("Z1AW001LV") != -1 ||
                                  el.name.indexOf("Z1AW001NS") != -1 ||
                                  el.name.indexOf("MW123") != -1 ||
                                  el.name.indexOf("MW0W3") != -1 ||
                                  el.name.indexOf("MC6T4") != -1 ||
                                  el.name.indexOf("MW0Y3") != -1 ||
                                  el.name.indexOf("MC6V4") != -1 ||
                                  el.name.indexOf("MW0X3") != -1 ||
                                  el.name.indexOf("MC6V4") != -1 ||
                                  el.name.indexOf("MW103") != -1 ||
                                  el.name.indexOf("MW1L3") != -1 ||
                                  el.name.indexOf("MW1G3") != -1 ||
                                  el.name.indexOf("MC7A4") != -1 ||
                                  el.name.indexOf("MW1J3") != -1 ||
                                  el.name.indexOf("MW1M3") != -1 ||
                                  el.name.indexOf("MW1H3") != -1 ||
                                  el.name.indexOf("MC7C4") != -1 ||
                                  el.name.indexOf("MW1K3") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      <Footer /> 
                    </tbody>
                  </div>
                )}
              </div>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
export default Apple;
