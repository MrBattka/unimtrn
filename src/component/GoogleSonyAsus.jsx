import React, { useState } from "react";
import { returnFixPrice } from "../helpers/fixPrice";
import style from "./styles.module.css";

const GoogleSonyAsus = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let rog = /Rog/gi
  let zenFone = /Asus ZenFone/gi
  let wiFi = /wifi/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixRog = fixGb.replace(rog, "ROG")
    const fixZenFone = fixRog.replace(zenFone, "ZenFone")
    return fixZenFone.replace(wiFi, "Wi-Fi");
  };

  const newPrice = (el) => {
    if (el.Товар.indexOf("Asus") != -1 || el.Товар.indexOf("ZenFone") != -1) {
      return Number(el.Стоимость) + 300;
    } else if (
      el.Товар.indexOf("Google") != -1 ||
      el.Товар.indexOf("Pixel") != -1 ||
      el.Товар.indexOf("Xperia") != -1 ||
      el.Товар.indexOf("ROG") != -1 ||
      el.Товар.indexOf("Rog") != -1
    ) {
      return Number(el.Стоимость) + 400;
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
              {isOpen ? "Google / Sony / Asus ▲" : "Google / Sony / Asus ▼"}
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
                        (el.Товар.indexOf("Asus") != -1 ||
                          el.Товар.indexOf("ZenFone") != -1 ||
                          el.Товар.indexOf("Google") != -1 ||
                          el.Товар.indexOf("Pixel") != -1 ||
                          el.Товар.indexOf("Xperia") != -1 ||
                          el.Товар.indexOf("ROG") != -1 ||
                          el.Товар.indexOf("Rog") != -1) &&
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

export default GoogleSonyAsus;
