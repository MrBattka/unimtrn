import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";
import Product from "../Common/Product";

const Dyson = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDyson, setIsDyson] = useState(false);

  let gb = /Gb/gi;
  let wiFi = /wifi/gi;
  let heapdphone = /Heapdphone/gi;
  let dyson = /Dyson/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixHeapdphone = fixGb.replace(heapdphone, "Headphone");
    const fixDyson = fixHeapdphone.replace(dyson, "");
    return fixDyson.replace(wiFi, "Wi-Fi");
  };

  const checkIsDyson = (el) => {
    return (
      el.length &&
      el.map(
        (el, index) =>
          baseFix(el) &&
          (el.Товар.indexOf("Airwrap ") != -1 ||
            el.Товар.indexOf("V1") != -1 ||
            el.Товар.indexOf("Vented") != -1 ||
            el.Товар.indexOf("HD0") != -1 ||
            el.Товар.indexOf("HD1") != -1 ||
            el.Товар.indexOf("Gen5 Detect") != -1 ||
            el.Товар.indexOf("Gen 5 Detect") != -1 ||
            el.Товар.indexOf("RB0") != -1 ||
            el.Товар.indexOf("HT0") != -1 ||
            el.Товар.indexOf("HS0") != -1 ||
            el.Товар.indexOf("Designed") != -1 ||
            el.Товар.indexOf("Heapdphone") != -1 ||
            el.Товар.indexOf("PH04") != -1 ||
            el.Товар.indexOf("Wash G1 ") != -1 ||
            el.Товар.indexOf("Paddle Brush") != -1 ||
            el.Товар.indexOf("Supersonic Hair") != -1 ||
            el.Товар.indexOf("Air Purifier") != -1 ||
            el.Товар.indexOf("Vacuum Cleaner Micro") != -1) &&
          (isDyson || setIsDyson(true)) &&
          returnFixPrice(el, fixName(el)) + newPrice(el)
      )
    );
  };

  return (
    <div>
      <div>
        <div>
          {el.length > 1 && (
            <span
              className={
                checkIsDyson(el) && !isDyson ? style.titleNotFound : style.title
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Dyson ▲" : "Dyson ▼"}
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
              <h4
                onClick={() => {
                  copyTable();
                }}
              >
                ❐ Copy
              </h4>
              <tbody>
                {isDyson && <div>✂Dyson🪒</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Airwrap ") != -1 ||
                          el.Товар.indexOf("V1") != -1 ||
                          el.Товар.indexOf("Vented") != -1 ||
                          el.Товар.indexOf("HD0") != -1 ||
                          el.Товар.indexOf("HD1") != -1 ||
                          el.Товар.indexOf("Gen5 Detect") != -1 ||
                          el.Товар.indexOf("Gen 5 Detect") != -1 ||
                          el.Товар.indexOf("RB0") != -1 ||
                          el.Товар.indexOf("HT0") != -1 ||
                          el.Товар.indexOf("HS0") != -1 ||
                          el.Товар.indexOf("Designed") != -1 ||
                          el.Товар.indexOf("Heapdphone") != -1 ||
                          el.Товар.indexOf("PH04") != -1 ||
                          el.Товар.indexOf("Wash G1 ") != -1 ||
                          el.Товар.indexOf("Paddle Brush") != -1 ||
                          el.Товар.indexOf("Supersonic Hair") != -1 ||
                          el.Товар.indexOf("Air Purifier") != -1 ||
                          el.Товар.indexOf("Vacuum Cleaner Micro") != -1) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}
                <br />
                <div>🇪🇺 - Наша вилка</div>
                <div>🇦🇪🇮🇳🇨🇳🇬🇧🇭🇰 - Не наша вилка</div>
                <Footer />
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dyson;
