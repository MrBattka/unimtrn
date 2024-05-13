import React, { useState } from "react";
import { returnFixPriceHi } from "../../helpers/fixPrice";
import style from "./styles.module.css";

const AppleHi = ({ el }) => {
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
  let carDelivery = /🏎/gi
  let headphones = /🎧/gi

  const fixName = (el) => {
    // console.log(typeof el.Hi);
    const fixGb = el.Hi.replace(gb, "");
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
    const fixCarDelivery = fixAirPods.replace(carDelivery, "")
    const fixHeadphones = fixCarDelivery.replace(headphones, "")
    return fixHeadphones.replace(proMax, "Pro Max");
  };

  const newPrice = (el) => {
    if (
      el.Hi.indexOf("AirPods Pro") != -1 ||
      el.Hi.indexOf("Airpods Pro") != -1 ||
      el.Hi.indexOf("Air Pods Pro") != -1 ||
      el.Hi.indexOf("Air Pods 2") != -1 ||
      el.Hi.indexOf("AirPods 2") != -1 ||
      el.Hi.indexOf("Airpods 2") != -1 ||
      el.Hi.indexOf("Air Pods 3") != -1 ||
      el.Hi.indexOf("AirPods 3") != -1 ||
      el.Hi.indexOf("Airpods 3") != -1 ||
      el.Hi.indexOf("Pencil") != -1 ||
      el.Hi.indexOf("HomePod") != -1
    ) {
      return Number(el.Стоимость) + 100;
    } else if (
      el.Hi.indexOf("Watch SE") != -1 ||
      el.Hi.indexOf("SE (2023) Gen") != -1
    ) {
      return Number(el.Стоимость) + 300;
    } else if (
      el.Hi.indexOf("iPad 9") != -1 ||
      el.Hi.indexOf("iPad 10") != -1 ||
      el.Hi.indexOf("iPad 9") != -1 ||
      el.Hi.indexOf("IPad 9") != -1 ||
      el.Hi.indexOf("Magic Keyboard") != -1
    ) {
      return Number(el.Стоимость) + 400;
    } else if (
      el.Hi.indexOf("SE 2") != -1 ||
      el.Hi.indexOf("SE 3") != -1 ||
      el.Hi.indexOf("SE 64") != -1 ||
      el.Hi.indexOf("SE 128") != -1 ||
      el.Hi.indexOf("SE 256") != -1 ||
      el.Hi.indexOf("11 64") != -1 ||
      el.Hi.indexOf("11 128") != -1 ||
      el.Hi.indexOf("12 64") != -1 ||
      el.Hi.indexOf("12 128") != -1 ||
      el.Hi.indexOf("12 256") != -1 ||
      el.Hi.indexOf("12 Pro Max") != -1 ||
      el.Hi.indexOf("13 128") != -1 ||
      el.Hi.indexOf("13 256") != -1 ||
      el.Hi.indexOf("13 512") != -1 ||
      el.Hi.indexOf("14 128") != -1 ||
      el.Hi.indexOf("14 256") != -1 ||
      el.Hi.indexOf("14 512") != -1 ||
      el.Hi.indexOf("14 Plus") != -1 ||
      el.Hi.indexOf("14 Pro 128") != -1 ||
      el.Hi.indexOf("14 Pro 256") != -1 ||
      el.Hi.indexOf("14 Pro 512") != -1 ||
      el.Hi.indexOf("14 Pro 1Tb") != -1 ||
      el.Hi.indexOf("14 Pro 1TB") != -1 ||
      el.Hi.indexOf("14 ProMax") != -1 ||
      el.Hi.indexOf("15 128") != -1 ||
      el.Hi.indexOf("15 256") != -1 ||
      el.Hi.indexOf("15 512") != -1 ||
      el.Hi.indexOf("iPad Mini") != -1 ||
      el.Hi.indexOf("iPad Air") != -1 ||
      el.Hi.indexOf("iPad Pro") != -1 ||
      el.Hi.indexOf("AW Series 9") != -1 ||
      el.Hi.indexOf("Mac") != -1 ||
      el.Hi.indexOf("AW 9") != -1 ||
      el.Hi.indexOf("AW  9") != -1 ||
      el.Hi.indexOf("AW Series 8") != -1 ||
      el.Hi.indexOf("AW 8") != -1 ||
      el.Hi.indexOf("AW  8") != -1 ||
      el.Hi.indexOf("Watch S8") != -1 ||
      el.Hi.indexOf("AirPods Max") != -1 ||
      el.Hi.indexOf("Air Pods Max") != -1 ||
      el.Hi.indexOf("Airpods Max") != -1
    ) {
      return Number(el.Стоимость) + 500;
    } else if (
      el.Hi.indexOf("15 Plus 128") != -1 ||
      el.Hi.indexOf("15 Plus 256") != -1 ||
      el.Hi.indexOf("15 Plus 512") != -1 ||
      el.Hi.indexOf("15 Pro 128") != -1 ||
      el.Hi.indexOf("15 Pro 256") != -1 ||
      el.Hi.indexOf("15 Pro 512") != -1 ||
      el.Hi.indexOf("15 Pro 1Tb") != -1 ||
      el.Hi.indexOf("15 ProMax 256") != -1 ||
      el.Hi.indexOf("15 ProMax 512") != -1 ||
      el.Hi.indexOf("15 ProMax 1Tb") != -1 ||
      el.Hi.indexOf("15 Pro Max 1TB") != -1 ||
      el.Hi.indexOf("15 Pro Max 1Tb") != -1 ||
      el.Hi.indexOf("iPad Pro 12.9") != -1 ||
      el.Hi.indexOf("Ultra 2") != -1
    ) {
      return Number(el.Стоимость) + 600;
    } else if (
      el.Hi.indexOf("Macbook") != -1 ||
      el.Hi.indexOf("Book ") != -1 ||
      el.Hi.indexOf("MB") != -1 ||
      el.Hi.indexOf("Vision Pro") != -1
    ) {
      return Number(el.Стоимость) + 1000;
    } else {
      return `${el.Стоимость} 🟥 `;
    }
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
                      {typeof el.Hi === "string" &&
                        (el.Hi.indexOf("AirPods") != -1 ||
                          el.Hi.indexOf("Airpods") != -1 ||
                          el.Hi.indexOf("Air Pods") != -1 ||
                          el.Hi.indexOf("Pencil") != -1 ||
                          el.Hi.indexOf("HomePod") != -1 ||
                          el.Hi.indexOf("Watch SE") != -1 ||
                          el.Hi.indexOf("SE (2023) Gen") != -1 ||
                          el.Hi.indexOf("SE 2") != -1 ||
                          el.Hi.indexOf("SE 3") != -1 ||
                          el.Hi.indexOf("SE 64") != -1 ||
                          el.Hi.indexOf("SE 128") != -1 ||
                          el.Hi.indexOf("SE 256") != -1 ||
                          el.Hi.indexOf("11 64") != -1 ||
                          el.Hi.indexOf("11 128") != -1 ||
                          el.Hi.indexOf("12 64") != -1 ||
                          el.Hi.indexOf("12 128") != -1 ||
                          el.Hi.indexOf("12 256") != -1 ||
                          el.Hi.indexOf("12 Pro Max") != -1 ||
                          el.Hi.indexOf("13 128") != -1 ||
                          el.Hi.indexOf("13 256") != -1 ||
                          el.Hi.indexOf("13 512") != -1 ||
                          el.Hi.indexOf("14 128") != -1 ||
                          el.Hi.indexOf("14 256") != -1 ||
                          el.Hi.indexOf("14 512") != -1 ||
                          el.Hi.indexOf("14 Plus") != -1 ||
                          el.Hi.indexOf("14 Pro 128") != -1 ||
                          el.Hi.indexOf("14 Pro 256") != -1 ||
                          el.Hi.indexOf("14 Pro 512") != -1 ||
                          el.Hi.indexOf("14 Pro 1Tb") != -1 ||
                          el.Hi.indexOf("14 Pro 1TB") != -1 ||
                          el.Hi.indexOf("14 ProMax") != -1 ||
                          el.Hi.indexOf("15 128") != -1 ||
                          el.Hi.indexOf("15 256") != -1 ||
                          el.Hi.indexOf("15 512") != -1 ||
                          el.Hi.indexOf("iPad 9") != -1 ||
                          el.Hi.indexOf("iPad 10") != -1 ||
                          el.Hi.indexOf("iPad Mini 6") != -1 ||
                          el.Hi.indexOf("iPad Air 5") != -1 ||
                          el.Hi.indexOf("iPad Pro") != -1 ||
                          el.Hi.indexOf("AW Series 9") != -1 ||
                          el.Hi.indexOf("AW 9") != -1 ||
                          el.Hi.indexOf("AW  9") != -1 ||
                          el.Hi.indexOf("AW Series 8") != -1 ||
                          el.Hi.indexOf("AW 8") != -1 ||
                          el.Hi.indexOf("AW  8") != -1 ||
                          el.Hi.indexOf("Mac") != -1 ||
                          el.Hi.indexOf("15 Plus 128") != -1 ||
                          el.Hi.indexOf("15 Plus 256") != -1 ||
                          el.Hi.indexOf("15 Plus 512") != -1 ||
                          el.Hi.indexOf("15 Pro 128") != -1 ||
                          el.Hi.indexOf("15 Pro 256") != -1 ||
                          el.Hi.indexOf("15 Pro 512") != -1 ||
                          el.Hi.indexOf("15 Pro 1Tb") != -1 ||
                          el.Hi.indexOf("15 ProMax 256") != -1 ||
                          el.Hi.indexOf("15 ProMax 512") != -1 ||
                          el.Hi.indexOf("15 ProMax 1Tb") != -1 ||
                          el.Hi.indexOf("15 Pro Max 1TB") != -1 ||
                          el.Hi.indexOf("15 Pro Max 1Tb") != -1 ||
                          el.Hi.indexOf("iPad Pro 12.9") != -1 ||
                          el.Hi.indexOf("Ultra 2") != -1 ||
                          el.Hi.indexOf("Macbook") != -1 ||
                          el.Hi.indexOf("Book ") != -1 ||
                          el.Hi.indexOf("MB") != -1 ||
                          el.Hi.indexOf("Vision Pro") != -1 ||
                          el.Hi.indexOf("Watch S8") != -1 ||
                          el.Hi.indexOf("Watch S9") != -1 ||
                          el.Hi.indexOf("IPad 9") != -1 ||
                          el.Hi.indexOf("Magic Keyboard") != -1 ||
                          el.Hi.indexOf("MINI 6") != -1 ||
                          el.Hi.indexOf("Air 13") != -1 ||
                          el.Hi.indexOf("Air 15") != -1 ||
                          el.Hi.indexOf("Pro 13") != -1
                        ) &&
                        typeof el.Hi === "string" &&
                        returnFixPriceHi(el, fixName(el))}
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

export default AppleHi;
