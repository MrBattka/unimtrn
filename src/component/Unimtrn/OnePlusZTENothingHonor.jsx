import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const OnePlusZTENothingHonor = ({ double }) => {
  const sort = double.sort(
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
  const [isOnePlus, setIsOnePlus] = useState(false);
  const [isZTE, setIsZTE] = useState(false);
  const [isNothing, setIsNothing] = useState(false);
  const [isHonor, setIsHonor] = useState(false);
  const [isProduct, setIsProduct] = useState(false);

  let gb = /Gb/gi;
  let tecno = /T.Tecno/gi;
  let realme = /T.Realme/gi;
  let wiFi = /wifi/gi;

  const fixName = (allPriceArr) => {
    const fixGb = allPriceArr.name.replace(gb, "");
    const fixTecno = fixGb.replace(tecno, "Tecno");
    const fixRealme = fixTecno.replace(realme, "Realme");
    return fixRealme.replace(wiFi, "Wi-Fi");
  };

  const checkIsProduct = (allPriceArr) => {
    return (
      allPriceArr.length &&
      allPriceArr.map(
        (productEl, index) =>
          baseFix(productEl) &&
          (productEl.name.indexOf("OnePlus") != -1 ||
            productEl.name.indexOf("RedMagic") != -1 ||
            productEl.name.indexOf("Nubia") != -1 ||
            productEl.name.indexOf("Nothing Phone") != -1 ||
            productEl.name.indexOf("Nothing CMF") != -1 ||
            productEl.name.indexOf("Nothing Ear") != -1 ||
            productEl.name.indexOf("Nothing ear") != -1 ||
            productEl.name.indexOf("Honor") != -1) &&
          (isProduct || setIsProduct(true)) &&
          returnFixPrice(productEl, fixName(productEl)) +
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
                  : isOpen
                  ? style.titleOpen
                  : style.title
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen
                ? "OnePlus / ZTE / Nothing / Honor ▲"
                : "OnePlus / ZTE / Nothing / Honor ▼"}
            </span>
          )}
        </div>
      </div>
      {isOpen && (
        <div className={isOpen ? style.open : style.closed}>
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
                {isOnePlus && <br />}
                {isOnePlus && <div>📱 **OnePlus**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("OnePlus") != -1 &&
                        (isOnePlus || setIsOnePlus(true)) &&
                        returnFixPrice(el, fixName(el)) +
                          (el.condition
                            ? `${newPrice(el.name, el.extraPrice)} 👉 (${
                                newPrice(el.name, el.stockPrice) + el.condition
                              })`
                            : el.provider !== "База"
                            ? newPrice(
                                el.name,
                                el.condition ? el.extraPrice : el.stockPrice
                              )
                            : el.stockPrice)}
                      <h3 className="del">
                        {baseFix(el) && el.name.indexOf("OnePlus") != -1 && (
                          <span>{" - " + el.provider}</span>
                        )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isZTE && <br />}
                {isZTE && <div>📱 **ZTE**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.name.indexOf("RedMagic") != -1 ||
                          el.name.indexOf("Nubia") != -1) &&
                        (isZTE || setIsZTE(true)) &&
                        returnFixPrice(el, fixName(el)) +
                          (el.condition
                            ? `${newPrice(el.name, el.extraPrice)} 👉 (${
                                newPrice(el.name, el.stockPrice) + el.condition
                              })`
                            : el.provider !== "База"
                            ? newPrice(
                                el.name,
                                el.condition ? el.extraPrice : el.stockPrice
                              )
                            : el.stockPrice)}
                      <h3 className="del">
                        {baseFix(el) &&
                          (el.name.indexOf("RedMagic") != -1 ||
                            el.name.indexOf("Nubia") != -1) && (
                            <span>{" - " + el.provider}</span>
                          )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isNothing && <br />}
                {isNothing && <div>📱 **Nothing**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.name.indexOf("Nothing Phone") != -1 ||
                          el.name.indexOf("Nothing CMF") != -1 ||
                          el.name.indexOf("Nothing Ear") != -1 ||
                          el.name.indexOf("Nothing ear") != -1) &&
                        (isNothing || setIsNothing(true)) &&
                        returnFixPrice(el, fixName(el)) +
                          (el.condition
                            ? `${newPrice(el.name, el.extraPrice)} 👉 (${
                                newPrice(el.name, el.stockPrice) + el.condition
                              })`
                            : el.provider !== "База"
                            ? newPrice(
                                el.name,
                                el.condition ? el.extraPrice : el.stockPrice
                              )
                            : el.stockPrice)}
                      <h3 className="del">
                        {baseFix(el) &&
                          (el.name.indexOf("Nothing Phone") != -1 ||
                            el.name.indexOf("Nothing CMF") != -1 ||
                            el.name.indexOf("Nothing Ear") != -1 ||
                            el.name.indexOf("Nothing ear") != -1) && (
                            <span>{" - " + el.provider}</span>
                          )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isHonor && <br />}
                {isHonor && <div>📱 **Honor**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("Honor") != -1 &&
                        (isHonor || setIsHonor(true)) &&
                        returnFixPrice(el, fixName(el)) +
                          (el.condition
                            ? `${newPrice(el.name, el.extraPrice)} 👉 (${
                                newPrice(el.name, el.stockPrice) + el.condition
                              })`
                            : el.provider !== "База"
                            ? newPrice(
                                el.name,
                                el.condition ? el.extraPrice : el.stockPrice
                              )
                            : el.stockPrice)}
                      <h3 className="del">
                        {baseFix(el) && el.name.indexOf("Honor") != -1 && (
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

export default OnePlusZTENothingHonor;
