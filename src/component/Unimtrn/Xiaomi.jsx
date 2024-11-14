import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const Xiaomi = ({ double }) => {

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
  const [isOther, setIsOther] = useState(false);
  const [isRedmi, setIsRedmi] = useState(false);
  const [isMi, setIsMi] = useState(false);
  const [isPoco, setIsPoco] = useState(false);
  const [isProduct, setIsProduct] = useState(false);

  let gb = /Gb/gi;
  let wiFi = /wifi/gi;
  let poco = /Poco/gi;
  let poco1 = /poco/gi;


  const fixName = (allPriceArr) => {
    const fixGb = allPriceArr.name.replace(gb, "");
    const fixPoco = fixGb.replace(poco, "POCO");
    const fixPoco1 = fixPoco.replace(poco1, "POCO");
    const fixPocophone = fixPoco1.replace("phone", "");
    const replaceXiaomi = fixPocophone.replace("Xiaomi ", "");
    const replaceRedmi = replaceXiaomi.replace("Redmi Note", "Note");
    return replaceRedmi.replace(wiFi, "Wi-Fi")
  };

  const checkIsProduct = (allPriceArr) => {
    return (
      allPriceArr.length &&
      allPriceArr.map(
        (productEl, index) =>
          baseFix(productEl) &&
          productEl.name.indexOf("Mi Watch") == -1 &&
          productEl.name.indexOf("Mi Portable ") == -1 &&
          productEl.name.indexOf("HDMI") == -1 &&
          (productEl.name.indexOf("Redmi Buds") != -1 ||
            productEl.name.indexOf("Mi Watch") != -1 ||
            productEl.name.indexOf("Mi Portable") != -1 ||
            productEl.name.indexOf("Redmi Note") != -1 ||
            productEl.name.indexOf("Note") != -1 ||
            productEl.name.indexOf("Redmi") != -1 ||
            productEl.name.indexOf("Mi ") != -1 ||
            productEl.name.indexOf("MI ") != -1 ||
            productEl.name.indexOf("Poco") != -1 ||
            productEl.name.indexOf("POCO") != -1) &&
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
                  : style.title
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Xiaomi ▲" : "Xiaomi ▼"}
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
                <div>👉Xiaomi</div>
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.name.indexOf("Redmi Buds") != -1 ||
                          el.name.indexOf("Mi Watch") != -1 ||
                          el.name.indexOf("Mi Portable") != -1) &&
                        (isOther || setIsOther(true)) &&
                        returnFixPrice(el, fixName(el)) +
                          (el.condition
                            ? `${newPrice(el.name, el.extraPrice)} 👉 (${
                                newPrice(el.name, el.stockPrice) + el.condition
                              })`
                            : newPrice(
                                el.name,
                                el.condition ? el.extraPrice : el.stockPrice
                              ))}
                              <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("Redmi Buds") != -1 ||
                                el.name.indexOf("Mi Watch") != -1 ||
                                el.name.indexOf("Mi Portable") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isRedmi && <br />}
                {isRedmi && <div>📱Redmi</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.name.indexOf("Redmi Note") != -1 ||
                          el.name.indexOf("Note") != -1 ||
                          el.name.indexOf("Redmi") != -1 ||
                          el.name.indexOf("Pad SE") != -1) &&
                        el.name.indexOf("Redmi Buds") == -1 &&
                        el.name.indexOf("HUAWEI") == -1 &&
                        el.name.indexOf("Huawei") == -1 &&
                        (isRedmi || setIsRedmi(true)) &&
                        returnFixPrice(el, fixName(el)) +
                          (el.condition
                            ? `${newPrice(el.name, el.extraPrice)} 👉 (${
                                newPrice(el.name, el.stockPrice) + el.condition
                              })`
                            : newPrice(
                                el.name,
                                el.condition ? el.extraPrice : el.stockPrice
                              ))}
                              <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("Redmi Note") != -1 ||
                                el.name.indexOf("Note") != -1 ||
                                el.name.indexOf("Redmi") != -1 ||
                                el.name.indexOf("Pad SE") != -1) &&
                              el.name.indexOf("Redmi Buds") == -1 &&
                              el.name.indexOf("HUAWEI") == -1 &&
                              el.name.indexOf("Huawei") == -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isMi && <br />}
                {isMi && <div>📱Mi</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.name.indexOf("Mi ") != -1 ||
                          el.name.indexOf("MI ") != -1) &&
                        el.name.indexOf("Mi Watch") == -1 &&
                        el.name.indexOf("Mi Portable ") == -1 &&
                        el.name.indexOf("HDMI") == -1 &&
                        (isMi || setIsMi(true)) &&
                        returnFixPrice(el, fixName(el)) +
                          (el.condition
                            ? `${newPrice(el.name, el.extraPrice)} 👉 (${
                                newPrice(el.name, el.stockPrice) + el.condition
                              })`
                            : newPrice(
                                el.name,
                                el.condition ? el.extraPrice : el.stockPrice
                              ))}
                              <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("Mi ") != -1 ||
                                el.name.indexOf("MI ") != -1) &&
                              el.name.indexOf("Mi Watch") == -1 &&
                              el.name.indexOf("Mi Portable ") == -1 &&
                              el.name.indexOf("HDMI") == -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isPoco && <br />}
                {isPoco && <div>📱Poco</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.name.indexOf("Poco") != -1 ||
                          el.name.indexOf("POCO") != -1) &&
                        (isPoco || setIsPoco(true)) &&
                        returnFixPrice(el, fixName(el)) +
                          (el.condition
                            ? `${newPrice(el.name, el.extraPrice)} 👉 (${
                                newPrice(el.name, el.stockPrice) + el.condition
                              })`
                            : newPrice(
                                el.name,
                                el.condition ? el.extraPrice : el.stockPrice
                              ))}
                              <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("Poco") != -1 ||
                                el.name.indexOf("POCO") != -1) && (
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

export default Xiaomi;
