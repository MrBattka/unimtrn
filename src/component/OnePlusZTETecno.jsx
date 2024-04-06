import React, { useState } from "react";
import { returnFixPrice } from "../helpers/fixPrice";
import style from "./styles.module.css";

const OnePlusZTETecno = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let tecno = /T.Tecno/gi;
  let nubia = /Nubia/gi;
  let realme = /T.Realme/gi;
  let redMagic = /RedMagic/gi;
  let wiFi = /wifi/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixTecno = fixGb.replace(tecno, "Tecno");
    const fixRealme = fixTecno.replace(realme, "Realme");
    const fixNubia = fixRealme.replace(nubia, "ZTE Nubia");
    const fixRedMagic = fixNubia.replace(redMagic, "ZTE RedMagic");
    return fixRedMagic.replace(wiFi, "Wi-Fi");
  };

  const newPrice = (el) => {
    if (el.Товар.indexOf("Asus") != -1 || el.Товар.indexOf("ZenFone") != -1) {
      return Number(el.Стоимость) + 300;
    } else if (
      el.Товар.indexOf("OnePlus") != -1 ||
      el.Товар.indexOf("RedMagic") != -1 ||
      el.Товар.indexOf("Nubia") != -1
    ) {
      return Number(el.Стоимость) + 500;
    } else if (
      el.Товар.indexOf("Tecno") != -1 ||
      el.Товар.indexOf("Realme") != -1
    ) {
      return Number(el.Стоимость) + 300;
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
                ? "OnePlus / ZTE / Tecno / Realme ▲"
                : "OnePlus / ZTE / Tecno / Realme ▼"}
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
                        (el.Товар.indexOf("OnePlus") != -1 ||
                          el.Товар.indexOf("RedMagic") != -1 ||
                          el.Товар.indexOf("Tecno") != -1 ||
                          el.Товар.indexOf("Nubia") != -1 ||
                          el.Товар.indexOf("Realme") != -1) &&
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

export default OnePlusZTETecno;
