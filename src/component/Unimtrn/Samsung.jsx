import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const Samsung = ({ double }) => {
  const res = []

  let gb = /Gb/gi;
  let zFlip = /Z flip/gi;
  let galaxyWatch = /Galaxy Watch/gi;
  let classik = /Classik/gi;
  let wiFi = /wifi/gi;
  let s21 = /Samsung S21/gi;
  let s22 = /Samsung S22/gi;
  let s23 = /Samsung S23/gi;
  let s24 = /Samsung S24/gi;
  let a550 = /A550/gi;

  double.map((el) => {
    const fixGb = el.name.replace(gb, "");
    const fixGalaxyWatch = fixGb.replace(galaxyWatch, "Watch");
    const fixClassik = fixGalaxyWatch.replace(classik, "Classic");
    const fixS21 = fixClassik.replace(s21, "S21");
    const fixS22 = fixS21.replace(s22, "S22");
    const fixS23 = fixS22.replace(s23, "S23");
    const fixS24 = fixS23.replace(s24, "S24");
    const fixWiFi = fixS24.replace(wiFi, "Wi-Fi");
    const fixA550 = fixWiFi.replace(a550, "A55");
    const fixGalaxy = (fixA550.indexOf("Galaxy A") || fixA550.indexOf("Galaxy S")) ? fixA550.replace("Galaxy ", ""): fixA550
    const replaceSamsung = fixGalaxy.replace("Samsung ", "");
    const replaceSpace =
      replaceSamsung[0] === " " ? replaceSamsung.slice(1) : replaceSamsung;
    res.push({
      id: el.id,
      name: replaceSpace.replace(zFlip, "Z Flip"),
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
  const [isOther, setIsOther] = useState(false);
  const [isPhones, setIsPhones] = useState(false);
  const [isWatch, setIsWatch] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isProduct, setIsProduct] = useState(false);

  const checkIsProduct = (allPriceArr) => {
    return (
      allPriceArr.length &&
      allPriceArr.map(
        (productEl, index) =>
          baseFix(productEl) &&
          (productEl.name.indexOf("Galaxy Buds") != -1 ||
            productEl.name.indexOf("Galaxy Smart Tag") != -1 ||
            productEl.name.indexOf("Watch 6") != -1 ||
            productEl.name.indexOf("A05s ") != -1 ||
            productEl.name.indexOf("A05 ") != -1 ||
            productEl.name.indexOf("A06 ") != -1 ||
            productEl.name.indexOf("A15 ") != -1 ||
            productEl.name.indexOf("A16 ") != -1 ||
            productEl.name.indexOf("A25 ") != -1 ||
            productEl.name.indexOf("A24 ") != -1 ||
            productEl.name.indexOf("A54 ") != -1 ||
            productEl.name.indexOf("A34 ") != -1 ||
            productEl.name.indexOf("A35 ") != -1 ||
            productEl.name.indexOf("M34 ") != -1 ||
            productEl.name.indexOf("M54 ") != -1 ||
            productEl.name.indexOf("A55 ") != -1 ||
            productEl.name.indexOf("S21 ") != -1 ||
            productEl.name.indexOf("S22 ") != -1 ||
            productEl.name.indexOf("S23 ") != -1 ||
            productEl.name.indexOf("S24 ") != -1 ||
            productEl.name.indexOf("Z Flip") != -1 ||
            productEl.name.indexOf("Z Fold") != -1 ||
            productEl.name.indexOf("Tab S") != -1) &&
          (isProduct || setIsProduct(true)) &&
          returnFixPrice(productEl, productEl.name) +
            newPrice(productEl.name, productEl.stockPrice)
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
                checkIsProduct(allPriceArr) && !isProduct
                  ? style.titleNotFound
                  : (isOpen ? style.titleOpen : style.title)
              }
              onClick={() => setIsOpen(!isOpen)}
            >
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
              <h4
                onClick={() => {
                  copyTable();
                }}
              >
                ❐ Copy
              </h4>
              <tbody>
                <div>👇 **Samsung**</div>
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.name.indexOf("Galaxy Buds") != -1 ||
                          el.name.indexOf("Galaxy Smart Tag") != -1) &&
                        (isOther || setIsOther(true)) &&
                        returnFixPrice(el, el.name) +
                          (el.condition
                            ? `${newPrice(el.name, el.extraPrice)} 👉 (${
                                newPrice(el.name, el.stockPrice) + el.condition
                              })`
                            : el.provider !== "База"
                            ? newPrice(
                                el.name,
                                el.condition
                                  ? el.extraPrice
                                  : el.stockPrice
                              )
                            : el.stockPrice)}
                      <h3 className="del">
                        {baseFix(el) &&
                          (el.name.indexOf("Galaxy Buds") != -1 ||
                            el.name.indexOf("Galaxy Smart Tag") != -1) && (
                            <span>{" - " + el.provider}</span>
                          )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isWatch && <br />}
                {isWatch && <div>⌚ Galaxy Watch</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.name.indexOf("Watch 6") != -1 ||
                          el.name.indexOf("Watch 7") != -1) &&
                        (isWatch || setIsWatch(true)) &&
                        returnFixPrice(el, el.name) +
                          (el.condition
                            ? `${newPrice(el.name, el.extraPrice)} 👉 (${
                                newPrice(el.name, el.stockPrice) + el.condition
                              })`
                            : el.provider !== "База"
                            ? newPrice(
                                el.name,
                                el.condition
                                  ? el.extraPrice
                                  : el.stockPrice
                              )
                            : el.stockPrice)}
                      <h3 className="del">
                        {baseFix(el) &&
                          (el.name.indexOf("Watch 6") != -1 ||
                            el.name.indexOf("Watch 7") != -1) && (
                            <span>{" - " + el.provider}</span>
                          )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isPhones && <br />}
                {isPhones && <div>📱 Galaxy Phones</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.name.indexOf("A05s ") != -1 ||
                          el.name.indexOf("A05 ") != -1 ||
                          el.name.indexOf("A06 ") != -1 ||
                          el.name.indexOf("A15 ") != -1 ||
                          el.name.indexOf("A16 ") != -1 ||
                          el.name.indexOf("A25 ") != -1 ||
                          el.name.indexOf("A24 ") != -1 ||
                          el.name.indexOf("A54 ") != -1 ||
                          el.name.indexOf("A34 ") != -1 ||
                          el.name.indexOf("A35 ") != -1 ||
                          el.name.indexOf("M34 ") != -1 ||
                          el.name.indexOf("M54 ") != -1 ||
                          el.name.indexOf("A55 ") != -1 ||
                          el.name.indexOf("S21 ") != -1 ||
                          el.name.indexOf("S22 ") != -1 ||
                          el.name.indexOf("S23 ") != -1 ||
                          el.name.indexOf("S24 ") != -1 ||
                          el.name.indexOf("Z Flip") != -1 ||
                          el.name.indexOf("Z Fold") != -1) &&
                        (isPhones || setIsPhones(true)) &&
                        returnFixPrice(el, el.name) +
                          (el.condition
                            ? `${newPrice(el.name, el.extraPrice)} 👉 (${
                                newPrice(el.name, el.stockPrice) + el.condition
                              })`
                            : el.provider !== "База"
                            ? newPrice(
                                el.name,
                                el.condition
                                  ? el.extraPrice
                                  : el.stockPrice
                              )
                            : el.stockPrice)}
                      <h3 className="del">
                        {baseFix(el) &&
                          (el.name.indexOf("A05s ") != -1 ||
                            el.name.indexOf("A05 ") != -1 ||
                            el.name.indexOf("A06 ") != -1 ||
                            el.name.indexOf("A15 ") != -1 ||
                            el.name.indexOf("A25 ") != -1 ||
                            el.name.indexOf("A24 ") != -1 ||
                            el.name.indexOf("A54 ") != -1 ||
                            el.name.indexOf("A34 ") != -1 ||
                            el.name.indexOf("A35 ") != -1 ||
                            el.name.indexOf("M34 ") != -1 ||
                            el.name.indexOf("M54 ") != -1 ||
                            el.name.indexOf("A55 ") != -1 ||
                            el.name.indexOf("S21 ") != -1 ||
                            el.name.indexOf("S22 ") != -1 ||
                            el.name.indexOf("S23 ") != -1 ||
                            el.name.indexOf("S24 ") != -1 ||
                            el.name.indexOf("Z Flip") != -1 ||
                            el.name.indexOf("Z Fold") != -1) && (
                            <span>{" - " + el.provider}</span>
                          )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isTab && <br />}
                {isTab && <div>📟 Galaxy Tab</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("Tab S") != -1 &&
                        (isTab || setIsTab(true)) &&
                        returnFixPrice(el, el.name) +
                          (el.condition
                            ? `${newPrice(el.name, el.extraPrice)} 👉 (${
                                newPrice(el.name, el.stockPrice) + el.condition
                              })`
                            : el.provider !== "База"
                            ? newPrice(
                                el.name,
                                el.condition
                                  ? el.extraPrice
                                  : el.stockPrice
                              )
                            : el.stockPrice)}
                      <h3 className="del">
                        {baseFix(el) && el.name.indexOf("Tab S") != -1 && (
                          <span>{" - " + el.provider}</span>
                        )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}
                <Footer />
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Samsung;
