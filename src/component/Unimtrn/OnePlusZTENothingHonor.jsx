import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";

const OnePlusZTENothingHonor = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let tecno = /T.Tecno/gi;
  let realme = /T.Realme/gi;
  let wiFi = /wifi/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixTecno = fixGb.replace(tecno, "Tecno");
    const fixRealme = fixTecno.replace(realme, "Realme");
    return fixRealme.replace(wiFi, "Wi-Fi");
  };

  return (
    <div>
      <div>
        <div>
          {el.length > 1 && (
            <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
              {isOpen
                ? "OnePlus / ZTE / Nothing / Honor ▲"
                : "OnePlus / ZTE / Nothing / Honor ▼"}
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
              <div><b>Nothing Phone (2) 12/256 White - 46500</b></div>
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("OnePlus") != -1 ||
                          el.Товар.indexOf("RedMagic") != -1 ||
                          el.Товар.indexOf("Nubia") != -1 ||
                          el.Товар.indexOf("Nothing Phone") != -1 ||
                          el.Товар.indexOf("Nothing CMF") != -1 ||
                          el.Товар.indexOf("Nothing Ear") != -1 ||
                          el.Товар.indexOf("Nothing ear") != -1 ||
                          el.Товар.indexOf("Honor") != -1) &&
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

export default OnePlusZTENothingHonor;
