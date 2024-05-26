import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";

const Apple = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState([]);

  console.log(result);

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
    return fixMGND3.replace(proMax, "Pro Max");
  };

  return (
    <div>
      <div>
        {el.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Apple ▲" : "Apple ▼"}
          </span>
        )}
      </div>
      {isOpen && (
        <div className={style.row}>
          <div className="col-sm-6 offset-3">
            <table className="table">
              <thead>
                <tr>{/* <th scope="col">Товар</th> */}</tr>
              </thead>
              <tbody>
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("AirPods") != -1 ||
                          el.Товар.indexOf("Airpods") != -1 ||
                          el.Товар.indexOf("Air Pods") != -1 ||
                          el.Товар.indexOf("Pencil") != -1 ||
                          el.Товар.indexOf("HomePod") != -1 ||
                          el.Товар.indexOf("Watch SE") != -1 ||
                          el.Товар.indexOf("SE (2023) Gen") != -1 ||
                          el.Товар.indexOf("SE (2022) Gen") != -1 ||
                          el.Товар.indexOf("SE 2") != -1 ||
                          el.Товар.indexOf("SE 3") != -1 ||
                          el.Товар.indexOf("SE 64") != -1 ||
                          el.Товар.indexOf("SE 128") != -1 ||
                          el.Товар.indexOf("SE 256") != -1 ||
                          el.Товар.indexOf("XR 64") != -1 ||
                          el.Товар.indexOf("11 64") != -1 ||
                          el.Товар.indexOf("11 128") != -1 ||
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
                          el.Товар.indexOf("iPad 9") != -1 ||
                          el.Товар.indexOf("iPad 10") != -1 ||
                          el.Товар.indexOf("iPad Mini 6") != -1 ||
                          el.Товар.indexOf("iPad Air 5") != -1 ||
                          el.Товар.indexOf("iPad Pro") != -1 ||
                          el.Товар.indexOf("AW Series 9") != -1 ||
                          el.Товар.indexOf("AW 9") != -1 ||
                          el.Товар.indexOf("AW  9") != -1 ||
                          el.Товар.indexOf("AW Series 8") != -1 ||
                          el.Товар.indexOf("AW 8") != -1 ||
                          el.Товар.indexOf("AW  8") != -1 ||
                          el.Товар.indexOf("Mac") != -1 ||
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
                          el.Товар.indexOf("15 Pro Max 1TB") != -1 ||
                          el.Товар.indexOf("15 Pro Max 1Tb") != -1 ||
                          el.Товар.indexOf("iPad Pro 12.9") != -1 ||
                          el.Товар.indexOf("Ultra 2") != -1 ||
                          el.Товар.indexOf("Macbook") != -1 ||
                          el.Товар.indexOf("Book ") != -1 ||
                          el.Товар.indexOf("MB") != -1 ||
                          el.Товар.indexOf("13.6 M") != -1 ||
                          el.Товар.indexOf("15 M") != -1 ||
                          el.Товар.indexOf("MGN") != -1 ||
                          el.Товар.indexOf("Vision Pro") != -1 ||
                          el.Товар.indexOf("Watch S8") != -1 ||
                          el.Товар.indexOf("Watch S9") != -1 ||
                          el.Товар.indexOf("IPad 9") != -1 ||
                          el.Товар.indexOf("Magic Keyboard") != -1 ||
                          el.Товар.indexOf("Magic Mouse") != -1) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apple;
