import React, { useState } from "react";
import { returnFixPrice } from "../helpers/fixPrice";
import style from "./styles.module.css";

const Apple = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let aws9 = /AW Series 9/gi;
  let aw9 = /AW  9/gi;
  let awu2 = /AW Ultra 2/gi;
  let awSE = /AW SE/gi;
  let apple = /Apple /gi;
  let mb = /MB /gi;
  let ipad = /🇺🇸 \(2022\)/gi;
  let aws8 = /AW 8/gi;
  let airPods = /Airpods/gi;
  let proMax = /ProMax/gi;
  let wiFi = /wifi/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixWiFi = fixGb.replace(wiFi, "Wi-Fi");
    const fixAWS9 = fixWiFi.replace(aws9, "S9");
    const fixAW9 = fixAWS9.replace(aw9, "S9");
    const fixAW8 = fixAW9.replace(aws8, "S8");
    const fixAWU2 = fixAW8.replace(awu2, "Ultra 2");
    const fixAWSE = fixAWU2.replace(awSE, "SE");
    const fixApple = fixAWSE.replace(apple, "");
    const fixmb = fixApple.replace(mb, "");
    const fixIpad = fixmb.replace(ipad, "(2022) 🇺🇸");
    const fixAirPods = fixIpad.replace(airPods, "AirPods");
    return fixAirPods.replace(proMax, "Pro Max");
  };

  const newPrice = (el) => {
    if (
      el.Товар.indexOf("AirPods") != -1 ||
      el.Товар.indexOf("Airpods") != -1 ||
      el.Товар.indexOf("Air Pods") != -1 ||
      el.Товар.indexOf("Pencil") != -1 ||
      el.Товар.indexOf("HomePod") != -1
    ) {
      return Number(el.Стоимость) + 100;
    } else if (
      el.Товар.indexOf("Watch SE") != -1 ||
      el.Товар.indexOf("SE (2023) Gen") != -1
    ) {
      return Number(el.Стоимость) + 300;
    } else if (
      el.Товар.indexOf("iPad 9") != -1 ||
      el.Товар.indexOf("iPad 10") != -1 ||
      el.Товар.indexOf("iPad 9") != -1
    ) {
      return Number(el.Стоимость) + 400;
    } else if (
      el.Товар.indexOf("SE 2") != -1 ||
      el.Товар.indexOf("SE 3") != -1 ||
      el.Товар.indexOf("11 64") != -1 ||
      el.Товар.indexOf("11 128") != -1 ||
      el.Товар.indexOf("12 64") != -1 ||
      el.Товар.indexOf("12 128") != -1 ||
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
      el.Товар.indexOf("iPad Pro 11") != -1 ||
      el.Товар.indexOf("AW Series 9") != -1 ||
      el.Товар.indexOf("Mac") != -1 ||
      el.Товар.indexOf("AW 9") != -1 ||
      el.Товар.indexOf("AW  9") != -1 ||
      el.Товар.indexOf("AW Series 8") != -1 ||
      el.Товар.indexOf("AW 8") != -1 ||
      el.Товар.indexOf("AW  8") != -1
    ) {
      return Number(el.Стоимость) + 500;
    } else if (
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
      el.Товар.indexOf("iPad Pro 12.9") != -1 ||
      el.Товар.indexOf("Ultra 2") != -1
    ) {
      return Number(el.Стоимость) + 600;
    } else if (
      el.Товар.indexOf("Macbook") != -1 ||
      el.Товар.indexOf("Book ") != -1 ||
      el.Товар.indexOf("MB") != -1 ||
      el.Товар.indexOf("Vision Pro") != -1
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
                      {el[0] !== "(" &&
                        el.Товар.indexOf("MagEZ Case") == -1 &&
                        el.Товар.indexOf("PITAKA") == -1 &&
                        el.Товар.indexOf("USB-C 25W") == -1 &&
                        el.Товар.indexOf("Кабель") == -1 &&
                        el.Товар.indexOf("Charge Cable") == -1 &&
                        el.Товар.indexOf("20W") == -1 &&
                        el.Товар.indexOf("USB-С Lightning") == -1 &&
                        el.Товар.indexOf("Муляж") == -1 &&
                        el.Товар.indexOf("кожа") == -1 &&
                        el.Товар.indexOf("Silicon") == -1 &&
                        el.Товар.indexOf("Grip Case") == -1 &&
                        el !== "Товар" &&
                        (el.Товар.indexOf("AirPods") != -1 ||
                          el.Товар.indexOf("Airpods") != -1 ||
                          el.Товар.indexOf("Air Pods") != -1 ||
                          el.Товар.indexOf("Pencil") != -1 ||
                          el.Товар.indexOf("HomePod") != -1 ||
                          el.Товар.indexOf("Watch SE") != -1 ||
                          el.Товар.indexOf("SE (2023) Gen") != -1 ||
                          el.Товар.indexOf("SE 2") != -1 ||
                          el.Товар.indexOf("SE 3") != -1 ||
                          el.Товар.indexOf("11 64") != -1 ||
                          el.Товар.indexOf("11 128") != -1 ||
                          el.Товар.indexOf("12 64") != -1 ||
                          el.Товар.indexOf("12 128") != -1 ||
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
                          el.Товар.indexOf("iPad Pro 11") != -1 ||
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
                          el.Товар.indexOf("iPad Pro 12.9") != -1 ||
                          el.Товар.indexOf("Ultra 2") != -1 ||
                          el.Товар.indexOf("Macbook") != -1 ||
                          el.Товар.indexOf("Book ") != -1 ||
                          el.Товар.indexOf("MB") != -1 ||
                          el.Товар.indexOf("Vision Pro") != -1) &&
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
