import React, { useState } from "react";
import { returnFixPrice, returnFixPrice1 } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";
import Product from "../Common/Product";

const Dyson = ({ double, dataUnimtrn }) => {
  const res= []

  let dyson = /Dyson/gi;

  const fixName = (name) => {
    return name.replace(dyson, "")
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isDyson, setIsDyson] = useState(false);

  const checkIsDyson = (dysonEl) => {
    return (
      dysonEl.length &&
      dataUnimtrn.map(
        (dysonEl, index) =>
          baseFix(dysonEl) &&
          (dysonEl.name.indexOf("Airwrap") != -1 ||
            dysonEl.name.indexOf("V1") != -1 ||
            dysonEl.name.indexOf("V-1") != -1 ||
            dysonEl.name.indexOf("Vented") != -1 ||
            dysonEl.name.indexOf("HD0") != -1 ||
            dysonEl.name.indexOf("HD1") != -1 ||
            dysonEl.name.indexOf("HD-0") != -1 ||
            dysonEl.name.indexOf("HD-1") != -1 ||
            dysonEl.name.indexOf("Gen5 Detect") != -1 ||
            dysonEl.name.indexOf("Gen 5 Detect") != -1 ||
            dysonEl.name.indexOf("RB0") != -1 ||
            dysonEl.name.indexOf("HT0") != -1 ||
            dysonEl.name.indexOf("HS0") != -1 ||
            dysonEl.name.indexOf("RB-0") != -1 ||
            dysonEl.name.indexOf("HT-0") != -1 ||
            dysonEl.name.indexOf("HS-0") != -1 ||
            dysonEl.name.indexOf("Designed") != -1 ||
            dysonEl.name.indexOf("Heapdphone") != -1 ||
            dysonEl.name.indexOf("PH04") != -1 ||
            dysonEl.name.indexOf("PH-04") != -1 ||
            dysonEl.name.indexOf("Wash G1 ") != -1 ||
            dysonEl.name.indexOf("Paddle Brush") != -1 ||
            dysonEl.name.indexOf("Supersonic Hair") != -1 ||
            dysonEl.name.indexOf("Air Purifier") != -1 ||
            dysonEl.name.indexOf("Vacuum Cleaner Micro") != -1) &&
          (isDyson || setIsDyson(true)) &&
          fixName(dysonEl.name) + dysonEl.extraPrice
      )
    );
  };

  return (
    <div>
      <div>
        <div>
          {dataUnimtrn.length > 1 && (
            <span
              className={
                checkIsDyson(dataUnimtrn) && !isDyson
                  ? style.titleNotFound
                  : (isOpen ? style.titleOpen : style.title)
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
              <tbody id="product">
                {isDyson && <div>✂**Dyson**🪒</div>}
                {dataUnimtrn.length ? (
                  dataUnimtrn.map((dysonEl, index) => (
                    <div key={index}>
                      {baseFix(dysonEl) &&
                        (dysonEl.name.indexOf("Airwrap") != -1 ||
                          dysonEl.name.indexOf("V12") != -1 ||
                          dysonEl.name.indexOf("V-12") != -1 ||
                          dysonEl.name.indexOf("Vented") != -1 ||
                          dysonEl.name.indexOf("HD0") != -1 ||
                          dysonEl.name.indexOf("HD1") != -1 ||
                          dysonEl.name.indexOf("HD-0") != -1 ||
                          dysonEl.name.indexOf("HD-1") != -1 ||
                          dysonEl.name.indexOf("Gen5 Detect") != -1 ||
                          dysonEl.name.indexOf("Gen 5 Detect") != -1 ||
                          dysonEl.name.indexOf("RB0") != -1 ||
                          dysonEl.name.indexOf("HT0") != -1 ||
                          dysonEl.name.indexOf("HS0") != -1 ||
                          dysonEl.name.indexOf("RB-0") != -1 ||
                          dysonEl.name.indexOf("HT-0") != -1 ||
                          dysonEl.name.indexOf("HS-0") != -1 ||
                          dysonEl.name.indexOf("Designed") != -1 ||
                          dysonEl.name.indexOf("Heapdphone") != -1 ||
                          dysonEl.name.indexOf("PH04") != -1 ||
                          dysonEl.name.indexOf("PH-04") != -1 ||
                          dysonEl.name.indexOf("Wash G1 ") != -1 ||
                          dysonEl.name.indexOf("Paddle Brush") != -1 ||
                          dysonEl.name.indexOf("Supersonic Hair") != -1 ||
                          dysonEl.name.indexOf("Air Purifier") != -1 ||
                          dysonEl.name.indexOf("Vacuum Cleaner Micro") != -1) &&
                        returnFixPrice1(dysonEl, fixName(dysonEl.name)) +
                        (dysonEl.provider !== "База" ? newPrice(dysonEl.name, dysonEl.price) : dysonEl.price)}
                      
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}
                <br />
                <div>__🇪🇺 - Наша вилка__</div>
                <div>🇦🇪🇮🇳🇨🇳🇬🇧🇭🇰 __- Не наша вилка__</div>
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
