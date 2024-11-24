import React, { useState } from "react";
import { returnFixPrice, returnFixPrice1 } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";
import Product from "../Common/Product";

const Dyson = ({ double }) => {
  const res= []

  let gb = /Gb/gi;
  let wiFi = /wifi/gi;
  let heapdphone = /Heapdphone/gi;
  let dyson = /Dyson/gi;

  double.map((el) => {
    const fixGb = el.name.replace(gb, "");
    const fixHeapdphone = fixGb.replace(heapdphone, "Headphone");
    const fixDyson = fixHeapdphone.replace(dyson, "");
    const replaceSpace =
      fixDyson[0] === " " ? fixDyson.slice(1) : fixDyson;
    res.push({
      id: el.id,
      name: replaceSpace.replace(wiFi, "Wi-Fi"),
      stockPrice: el.stockPrice,
      extraPrice: el.extraPrice,
      provider: el.provider,
      condition: el.condition,
    });
  });

  const sort = res.sort(
    (a, b) =>
      (a.id > b.id ? 1 : b.id > a.id ? -1 : 0) &&
      (a.stockPrice > b.stockPrice ? 1 : b.stockPrice > a.stockPrice ? -1 : 0)
  );

  let allPriceArr1 = sort.filter((obj1, i, arr) => {
    return (
      arr.findIndex(
        (obj2) =>
          ["id"].every((key) => obj2[key] === obj1[key]) &&
          ["stockPrice"].every((key) => obj2[key] <= obj1[key])
      ) === i
    );
  });

  const sort1 = allPriceArr1.sort(
    (a, b) =>
      (a.id > b.id ? 1 : b.id > a.id ? -1 : 0) &&
      (a.stockPrice > b.stockPrice ? 1 : b.stockPrice > a.stockPrice ? -1 : 0)
  );

  let allPriceArr2 = sort1.filter((obj1, i, arr) => {
    return (
      arr.findIndex(
        (obj2) =>
          ["id"].every((key) => obj2[key] === obj1[key]) &&
          ["stockPrice"].every((key) => obj2[key] <= obj1[key])
      ) === i
    );
  });

  const sort2 = allPriceArr2.sort(
    (a, b) =>
      (a.id > b.id ? 1 : b.id > a.id ? -1 : 0) &&
      (a.stockPrice > b.stockPrice ? 1 : b.stockPrice > a.stockPrice ? -1 : 0)
  );

  let allPriceArr3 = sort2.filter((obj1, i, arr) => {
    return (
      arr.findIndex(
        (obj2) =>
          ["id"].every((key) => obj2[key] === obj1[key]) &&
          ["stockPrice"].every((key) => obj2[key] <= obj1[key])
      ) === i
    );
  });

  const sort3 = allPriceArr3.sort(
    (a, b) =>
      (a.id > b.id ? 1 : b.id > a.id ? -1 : 0) &&
      (a.stockPrice > b.stockPrice ? 1 : b.stockPrice > a.stockPrice ? -1 : 0)
  );

  const sort3rev = sort3.reverse();

  let allPriceArr = sort3rev.filter((obj1, i, arr) => {
    return (
      arr.findIndex(
        (obj2) =>
          ["id"].every((key) => obj2[key] === obj1[key]) &&
          ["stockPrice"].every((key) => obj2[key] <= obj1[key])
      ) === i
    );
  });

  allPriceArr.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  const [isOpen, setIsOpen] = useState(false);
  const [isDyson, setIsDyson] = useState(false);

  const checkIsDyson = (dysonEl) => {
    return (
      dysonEl.length &&
      allPriceArr.map(
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
          dysonEl.name + dysonEl.extraPrice
      )
    );
  };

  return (
    <div>
      <div>
        <div>
          {allPriceArr.length > 1 && (
            <span
              className={
                checkIsDyson(allPriceArr) && !isDyson
                  ? style.titleNotFound
                  : style.title
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
                {allPriceArr.length ? (
                  allPriceArr.map((dysonEl, index) => (
                    <div key={index}>
                      {baseFix(dysonEl) &&
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
                        returnFixPrice1(dysonEl, dysonEl.name) +
                        (dysonEl.provider !== "База" ? newPrice(dysonEl.name, dysonEl.stockPrice) : dysonEl.stockPrice)}
                      <h3 className="del">
                        {baseFix(dysonEl) &&
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
                            dysonEl.name.indexOf("Vacuum Cleaner Micro") !=
                              -1) && <span>{" - " + dysonEl.provider}</span>}
                      </h3>
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
