import React, { useState } from "react";
import { returnFixPrice } from "../helpers/fixPrice";
import style from "./styles.module.css";

const AGMBeatsFujifilm = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let wiFi = /wifi/gi;

  console.log(el);

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    return fixGb.replace(wiFi, "Wi-Fi");
  };

  const newPrice = (el) => {
    if (el.Товар.indexOf("Fujifilm") != -1 || el.Товар.indexOf("Beats") != -1) {
      return Number(el.Стоимость) + 200;
    } else if (
      el.Товар.indexOf("AGM") != -1 ||
      el.Товар.indexOf("Blackview") != -1 ||
      el.Товар.indexOf("Insta ") != -1
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
                ? "AGM / Beats / Fujifilm / Blackview / Insta ▲"
                : "AGM / Beats / Fujifilm / Blackview / Insta ▼"}
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
                        (el.Товар.indexOf("Fujifilm") != -1 ||
                          el.Товар.indexOf("Beats") != -1 ||
                          el.Товар.indexOf("Blackview") != -1 ||
                          el.Товар.indexOf("AGM") != -1 ||
                          el.Товар.indexOf("Insta ") != -1) &&
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

export default AGMBeatsFujifilm;
