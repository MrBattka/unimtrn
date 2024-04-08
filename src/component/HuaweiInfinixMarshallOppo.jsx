import React, { useState } from "react";
import { returnFixPrice } from "../helpers/fixPrice";
import style from "./styles.module.css";

const HuaweiInfinixMarshallOppo = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let wiFi = /wifi/gi;
  let huawei = /HUAWEI/gi;
  let infinix = /T.infinix/gi;

  const fixName = (el) => {
    const fixHuawei = el.Товар.replace(huawei, "Huawei");
    const fixInfinix = fixHuawei.replace(infinix, "Infinix");
    const fixGb = fixInfinix.replace(gb, "");
    return fixGb.replace(wiFi, "Wi-Fi");
  };

  const newPrice = (el) => {
    if (
      el.Товар.indexOf("HUAWEI") != -1 ||
      el.Товар.indexOf("Huawei") != -1 ||
      el.Товар.indexOf("Marshall") != -1 ||
      el.Товар.indexOf("Blackview") != -1 ||
      el.Товар.indexOf("infinix") != -1
    ) {
      return Number(el.Стоимость) + 200;
    } else if (el.Товар.indexOf("Oppo") != -1) {
      return Number(el.Стоимость) + 500;
    } else {
      return `${el.Стоимость} 🟥 `;
    }
  };

  return (
    <div>
      <div>
        <div>
          {el.length > 1 && (
            <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
              {isOpen
                ? "Huawei / Infinix / Marshall / Oppo ▲"
                : "Huawei / Infinix / Marshall / Oppo ▼"}
            </span>
          )}
        </div>
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
                        (el.Товар.indexOf("HUAWEI") != -1 ||
                          el.Товар.indexOf("Huawei") != -1 ||
                          el.Товар.indexOf("Marshall") != -1 ||
                          el.Товар.indexOf("Blackview") != -1 ||
                          el.Товар.indexOf("infinix") != -1 ||
                          el.Товар.indexOf("Oppo") != -1) &&
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

export default HuaweiInfinixMarshallOppo;
