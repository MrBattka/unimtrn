import React, { useState } from "react";
import { baseFix } from "../../helpers/baseFix";
import { returnFixPrice } from "../../helpers/fixPrice";
import { newPrice } from "../../helpers/newPrice";
import style from "./styles.module.css";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const Apple = ({ el }) => {
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
  const [is16, setIs16] = useState(false);
  const [is16Plus, setIs16Plus] = useState(false);
  const [is16Pro, setIs16Pro] = useState(false);
  const [is16ProMax, setIs16ProMax] = useState(false);

  const [isOpenAirPods, setIsOpenAirPods] = useState(false);
  const [isAirPods, setIsAirPods] = useState(false);
  const [isAirPodsMax, setIsAirPodsMax] = useState(false);
  const [isPencil, setIsPencil] = useState(false);
  const [isMagic, setIsMagic] = useState(false);

  const [isOpenWatch, setIsOpenWatch] = useState(false);
  const [isSEWatch, setIsSEWatch] = useState(false);
  const [isS8, setIsS8] = useState(false);
  const [isS9, setIsS9] = useState(false);
  const [isUltra, setIsUltra] = useState(false);

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

  let gb = /Gb/gi;
  let aws9 = /AW Series 9/gi;
  let aw9Space = /AW  9/gi;
  let aw9 = /AW 9/gi;
  let awu2 = /AW Ultra 2/gi;
  let awSE = /AW SE/gi;
  let apple = /Apple /gi;
  let mb = /MB /gi;
  let ipad = /🇺🇸 \(2022\)/gi;
  let aw8Spaces = /AW  8/gi;
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

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
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
    const fixAir13 = fixAirPods.replace(air13, "Air 13.6 M");
    const fixAir15 = fixAir13.replace(air15, "Air 15 M");
    const fixAirAir13 = fixAir15.replace(airAir13, "13.6");
    const fixAirAir15 = fixAirAir13.replace(airAir15, "15");
    const fixMGN63 = fixAirAir15.replace(MGN63, "Air M1 256 Gold MGND3");
    const fixMGN93 = fixMGN63.replace(MGN93, "Air M1 256 Silver MGN93");
    const fixMGND3 = fixMGN93.replace(MGND3, "Air M1 256 Space Grey MGN63");
    const fixGongkong = fixMGND3.replace("Гонконг", "");
    return fixGongkong.replace(proMax, "Pro Max");
  };

  const closedSubMenu = () => {
    setIsOpen(!isOpen);
    setIsOpeniPhone(false);
    setIsOpenAirPods(false);
    setIsOpenWatch(false);
    setIsOpeniPad(false);
    setIsOpenMacBook(false);
  };

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => closedSubMenu()}>
            {isOpen ? "Apple ▲" : "Apple ▼"}
          </span>
        )}
      </div>
      {isOpen && (
        <div className={style.row}>
          <div className="col-sm-6 offset-3">
            <table className="table">
              <div>
                <div
                  className={style.titlecategory}
                  onClick={() => setIsOpenAirPods(!isOpenAirPods)}
                >
                  {isOpenAirPods ? "AirPods ▲" : "AirPods ▼"}
                </div>
                {isOpenAirPods && (
                  <div className={style.category}>
                    <h4
                      onClick={() => {
                        copyTable();
                      }}
                    >
                      ❐ Copy
                    </h4>
                    <tbody>
                      {isAirPods && <div>🎧AirPods</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("AirPods") != -1 ||
                                el.Товар.indexOf("Airpods") != -1 ||
                                el.Товар.indexOf("Air Pods") != -1) &&
                              el.Товар.indexOf("AirPods Max") == -1 &&
                              (isAirPods || setIsAirPods(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {isAirPodsMax && <br />}
                      {isAirPodsMax && <div>🎧AirPods Max</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.Товар.indexOf("AirPods Max") != -1 &&
                              (isAirPodsMax || setIsAirPodsMax(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {isPencil && <br />}
                      {isPencil && <div>✏️Pencil</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.Товар.indexOf("Pencil") != -1 &&
                              (isPencil || setIsPencil(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {isMagic && <br />}
                      {isMagic && <div>🖱️Magic⌨️</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("Magic Keyboard") != -1 ||
                                el.Товар.indexOf("Magic Mouse") != -1) &&
                              (isMagic || setIsMagic(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
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
                  className={style.titlecategory}
                  onClick={() => setIsOpeniPhone(!isOpeniPhone)}
                >
                  {isOpeniPhone ? "iPhone ▲" : "iPhone ▼"}
                </div>
                {isOpeniPhone && (
                  <div className={style.category}>
                    <h4
                      onClick={() => {
                        copyTable();
                      }}
                    >
                      ❐ Copy
                    </h4>
                    <tbody>
                      <div>🇨🇳🇭🇰🇸🇬 ( 2 sim ) 🇸🇬 бывает sim + e sim</div>
                      <div>🇺🇸 14 Модели - e sim ( нет лотка sim )</div>
                      <div>
                        🇯🇵🇨🇦🇮🇳🇰🇿🇷🇺🇻🇳🇩🇪🇦🇪🇪🇺 и др. 1 sim + e sim (14е модели)
                      </div>
                      {isXR && <div>📱iPhone XR</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("XR 64") != -1 ||
                                el.Товар.indexOf("XR 128") != -1) &&
                              (isXR || setIsXR(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {isSE && <br />}
                      {isSE && <div>📱iPhone SE</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("SE 3") != -1 ||
                                el.Товар.indexOf("SE 64") != -1 ||
                                el.Товар.indexOf("SE 128") != -1 ||
                                el.Товар.indexOf("SE 256") != -1) &&
                              (isSE || setIsSE(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {is11 && <br />}
                      {is11 && <div>📱iPhone 11</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("11 64") != -1 ||
                                el.Товар.indexOf("11 128") != -1) &&
                              (is11 || setIs11(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {is12 && <br />}
                      {is12 && <div>📱iPhone 12</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("12 64") != -1 ||
                                el.Товар.indexOf("12 128") != -1 ||
                                el.Товар.indexOf("12 256") != -1 ||
                                el.Товар.indexOf("12 Pro Max") != -1) &&
                              (is12 || setIs12(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {is13Mini && <br />}
                      {is13Mini && <div>📱iPhone 13 Mini</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("13 Mini 128") != -1 ||
                                el.Товар.indexOf("13 Mini 256") != -1 ||
                                el.Товар.indexOf("13 Mini 512") != -1) &&
                              (is13Mini || setIs13Mini(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {is13 && <br />}
                      {is13 && <div>📱iPhone 13</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("13 128") != -1 ||
                                el.Товар.indexOf("13 256") != -1 ||
                                el.Товар.indexOf("13 512") != -1) &&
                              (is13 || setIs13(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {is14 && <br />}
                      {is14 && <div>📱iPhone 14</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("14 128") != -1 ||
                                el.Товар.indexOf("14 256") != -1 ||
                                el.Товар.indexOf("14 512") != -1 ||
                                el.Товар.indexOf("14 Plus") != -1) &&
                              (is14 || setIs14(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {is14Pro && <br />}
                      {is14Pro && <div>📱iPhone 14 Pro</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("14 Pro 128") != -1 ||
                                el.Товар.indexOf("14 Pro 256") != -1 ||
                                el.Товар.indexOf("14 Pro 512") != -1 ||
                                el.Товар.indexOf("14 Pro 1TB") != -1) &&
                              (is14Pro || setIs14Pro(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {is15 && <br />}
                      {is15 && <div>📱iPhone 15</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("15 128") != -1 ||
                                el.Товар.indexOf("15 256") != -1 ||
                                el.Товар.indexOf("15 512") != -1) &&
                              (is15 || setIs15(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {is15Plus && <br />}
                      {is15Plus && <div>📱iPhone 15 Plus</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("15 Plus 128") != -1 ||
                                el.Товар.indexOf("15 Plus 256") != -1 ||
                                el.Товар.indexOf("15 Plus 512") != -1) &&
                              (is15Plus || setIs15Plus(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {is15Pro && <br />}
                      {is15Pro && <div>📱iPhone 15 Pro</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("15 Pro 128") != -1 ||
                                el.Товар.indexOf("15 Pro 256") != -1 ||
                                el.Товар.indexOf("15 Pro 512") != -1 ||
                                el.Товар.indexOf("15 Pro 1Tb") != -1) &&
                              (is15Pro || setIs15Pro(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {is15ProMax && <br />}
                      {is15ProMax && <div>📱iPhone 15 Pro Max</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("15 ProMax 256") != -1 ||
                                el.Товар.indexOf("15 ProMax 512") != -1 ||
                                el.Товар.indexOf("15 ProMax 1Tb") != -1 ||
                                el.Товар.indexOf("15 Pro Max 256") != -1 ||
                                el.Товар.indexOf("15 Pro Max 512") != -1 ||
                                el.Товар.indexOf("15 Pro Max 1Tb") != -1 ||
                                el.Товар.indexOf("15 Pro Max 1TB") != -1 ||
                                el.Товар.indexOf("15 Pro Max 1Tb") != -1) &&
                              (is15ProMax || setIs15ProMax(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {is16 && <br />}
                      {is16 && <div>📱iPhone 16🔥</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("16 128") != -1 ||
                                el.Товар.indexOf("16 256") != -1 ||
                                el.Товар.indexOf("16 512") != -1) &&
                              (is16 || setIs16(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is16Plus && <br />}
                      {is16Plus && <div>📱iPhone 16 Plus🔥</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("16 Plus 128") != -1 ||
                                el.Товар.indexOf("16 Plus 256") != -1 ||
                                el.Товар.indexOf("16 Plus 512") != -1) &&
                              (is16Plus || setIs16Plus(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is16Pro && <br />}
                      {is16Pro && <div>📱iPhone 16 Pro🔥</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("16 Pro 128") != -1 ||
                                el.Товар.indexOf("16 Pro 256") != -1 ||
                                el.Товар.indexOf("16 Pro 512") != -1 ||
                                el.Товар.indexOf("16 Pro 1Tb") != -1) &&
                              (is16Pro || setIs16Pro(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                      {is16ProMax && <br />}
                      {is16ProMax && <div>📱iPhone 16 Pro Max🔥</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("16 ProMax 256") != -1 ||
                                el.Товар.indexOf("16 ProMax 512") != -1 ||
                                el.Товар.indexOf("16 ProMax 1Tb") != -1 ||
                                el.Товар.indexOf("16 Pro Max 256") != -1 ||
                                el.Товар.indexOf("16 Pro Max 512") != -1 ||
                                el.Товар.indexOf("16 Pro Max 1Tb") != -1 ||
                                el.Товар.indexOf("16 Pro Max 1TB") != -1 ||
                                el.Товар.indexOf("16 Pro Max 1Tb") != -1) &&
                              (is16ProMax || setIs16ProMax(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
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
                  className={style.titlecategory}
                  onClick={() => setIsOpenWatch(!isOpenWatch)}
                >
                  {isOpenWatch ? "AW ▲" : "AW ▼"}
                </div>
                {isOpenWatch && (
                  <div className={style.category}>
                    <h4
                      onClick={() => {
                        copyTable();
                      }}
                    >
                      ❐ Copy
                    </h4>
                    <tbody>
                      {isSEWatch && <div>⌚AW SE</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("Watch SE") != -1 ||
                                el.Товар.indexOf("SE (2023) Gen") != -1 ||
                                el.Товар.indexOf("SE (2022) Gen") != -1 ||
                                el.Товар.indexOf("SE 2") != -1 ||
                                el.Товар.indexOf("SE (2022) 64") != -1 ||
                                el.Товар.indexOf("SE (2022) 128") != -1 ||
                                el.Товар.indexOf("SE (2022) 256") != -1) &&
                              (isSEWatch || setIsSEWatch(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {isS8 && <br />}
                      {isS8 && <div>⌚AW S8</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("Watch S8") != -1 ||
                                el.Товар.indexOf("AW Series 8") != -1 ||
                                el.Товар.indexOf("AW 8") != -1 ||
                                el.Товар.indexOf("AW  8") != -1) &&
                              (isS8 || setIsS8(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {isS9 && <br />}
                      {isS9 && <div>⌚AW S9</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("Watch S9") != -1 ||
                                el.Товар.indexOf("AW Series 9") != -1 ||
                                el.Товар.indexOf("AW 9") != -1 ||
                                el.Товар.indexOf("AW  9") != -1) &&
                              (isS9 || setIsS9(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {isUltra && <br />}
                      {isUltra && <div>⌚AW Ultra</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.Товар.indexOf("Ultra 2") != -1 &&
                              (isUltra || setIsUltra(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
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
                  className={style.titlecategory}
                  onClick={() => setIsOpeniPad(!isOpeniPad)}
                >
                  {isOpeniPad ? "iPad ▲" : "iPad ▼"}
                </div>
                {isOpeniPad && (
                  <div className={style.category}>
                    <h4
                      onClick={() => {
                        copyTable();
                      }}
                    >
                      ❐ Copy
                    </h4>
                    <tbody>
                      {isiPad9 && <div>📟iPad 9</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("iPad 9") != -1 ||
                                el.Товар.indexOf("IPad 9") != -1) &&
                              (isiPad9 || setIsiPad9(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {isiPad10 && <br />}
                      {isiPad10 && <div>📟iPad 10</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("iPad 10") != -1 ||
                                el.Товар.indexOf("IPad 10") != -1) &&
                              (isiPad10 || setIsiPad10(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {isiPadMini && <br />}
                      {isiPadMini && <div>📟iPad Mini</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.Товар.indexOf("iPad Mini 6") != -1 &&
                              (isiPadMini || setIsiPadMini(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {isiPadAir && <br />}
                      {isiPadAir && <div>📟iPad Air</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("iPad Air 5") != -1 ||
                                el.Товар.indexOf("iPad Air 11") != -1) &&
                              (isiPadAir || setIsiPadAir(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {isiPadPro11 && <br />}
                      {isiPadPro11 && <div>📟iPad Pro 11</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.Товар.indexOf("iPad Pro 11") != -1 &&
                              (isiPadPro11 || setIsiPadPro11(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {isiPadPro12 && <br />}
                      {isiPadPro12 && <div>📟iPad Pro 12</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.Товар.indexOf("iPad Pro 12") != -1 &&
                              (isiPadPro12 || setIsiPadPro12(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {isiPadPro13 && <br />}
                      {isiPadPro13 && <div>📟iPad Pro 13</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.Товар.indexOf("iPad Pro 13") != -1 &&
                              (isiPadPro13 || setIsiPadPro13(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
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
                  className={style.titlecategory}
                  onClick={() => setIsOpenMacBook(!isOpenMacBook)}
                >
                  {isOpenMacBook ? "MacBook ▲" : "MacBook ▼"}
                </div>
                {isOpenMacBook && (
                  <div className={style.category}>
                    <h4
                      onClick={() => {
                        copyTable();
                      }}
                    >
                      ❐ Copy
                    </h4>
                    <tbody>
                      {isiMac && <br />}
                      {isiMac && <div>🖥️iMac</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              el.Товар.indexOf("iMac") != -1 &&
                              (isiMac || setIsiMac(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
                          </div>
                        ))
                      ) : (
                        <tr></tr>
                      )}

                      {isMacBook && <br />}
                      {isMacBook && <div>💻MacBook</div>}
                      {el.length ? (
                        el.map((el, index) => (
                          <div key={index}>
                            {baseFix(el) &&
                              (el.Товар.indexOf("Macbook") != -1 ||
                                el.Товар.indexOf("Book ") != -1 ||
                                el.Товар.indexOf("MB") != -1 ||
                                el.Товар.indexOf("13.6 M") != -1 ||
                                el.Товар.indexOf("15 M") != -1 ||
                                el.Товар.indexOf("MGN") != -1) &&
                              (isMacBook || setIsMacBook(true)) &&
                              returnFixPrice(el, fixName(el)) + newPrice(el)}
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
