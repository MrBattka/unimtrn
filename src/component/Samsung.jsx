import React, { useState } from "react";
import { returnFixPrice } from "../helpers/fixPrice";
import style from "./styles.module.css";

const Samsung = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let zFlip = /Z flip/gi;
  let wiFi = /wifi/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixWiFi = fixGb.replace(wiFi, "Wi-Fi");
    return fixWiFi.replace(zFlip, "Z Flip");
  };

  const newPrice = (el) => {
    if (
      el.Товар.indexOf("Galaxy Buds") != -1 ||
      el.Товар.indexOf("Galaxy Smart Tag") != -1
    ) {
      return Number(el.Стоимость) + 100;
    } else if (
      el.Товар.indexOf("A05s ") != -1 ||
      el.Товар.indexOf("A05 ") != -1 ||
      el.Товар.indexOf("A15 ") != -1 ||
      el.Товар.indexOf("A25 ") != -1 ||
      el.Товар.indexOf("A24 ") != -1 ||
      el.Товар.indexOf("A54 ") != -1 ||
      el.Товар.indexOf("A35 ") != -1 ||
      el.Товар.indexOf("A34 ") != -1 ||
      el.Товар.indexOf("M34 ") != -1 ||
      el.Товар.indexOf("M54 ") != -1 ||
      el.Товар.indexOf("A55 ") != -1 ||
      el.Товар.indexOf("Galaxy Watch") != -1
    ) {
      return Number(el.Стоимость) + 300;
    } else if (
      el.Товар.indexOf("Watch") != -1 ||
      el.Товар.indexOf("Tab A") != -1
    ) {
      return Number(el.Стоимость) + 400;
    } else if (
      el.Товар.indexOf("S21") != -1 ||
      el.Товар.indexOf("S22") != -1 ||
      el.Товар.indexOf("S23") != -1 ||
      el.Товар.indexOf("S24") != -1 ||
      el.Товар.indexOf("Z Flip") != -1 ||
      (el.Товар.indexOf("Z Fold") != -1) | (el.Товар.indexOf("Z Fold") != -1)
    ) {
      return Number(el.Стоимость) + 500;
    } else if (el.Товар.indexOf("Tab S") != -1) {
      return Number(el.Стоимость) + 600;
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
              {isOpen ? "Samsung ▲" : "Samsung ▼"}
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
                        (el.Товар.indexOf("Galaxy") != -1 ||
                          el.Товар.indexOf("A05s") != -1 ||
                          el.Товар.indexOf("A05") != -1 ||
                          el.Товар.indexOf("A15") != -1 ||
                          el.Товар.indexOf("A25") != -1 ||
                          el.Товар.indexOf("A24") != -1 ||
                          el.Товар.indexOf("A54") != -1 ||
                          el.Товар.indexOf("A34") != -1 ||
                          el.Товар.indexOf("M34") != -1 ||
                          el.Товар.indexOf("M54") != -1 ||
                          el.Товар.indexOf("A55") != -1 ||
                          el.Товар.indexOf("S21") != -1 ||
                          el.Товар.indexOf("S22") != -1 ||
                          el.Товар.indexOf("S23") != -1 ||
                          el.Товар.indexOf("S24") != -1 ||
                          el.Товар.indexOf("Z Flip") != -1 ||
                          el.Товар.indexOf("Z Fold") != -1) &&
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

export default Samsung;
