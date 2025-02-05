import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const NoName = ({ double }) => {
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
  const [isBeats, setIsBeats] = useState(false);
  const [isBlackview, setIsBlackview] = useState(false);
  const [isAGM, setIsAGM] = useState(false);
  const [isInfinix, setIsInfinix] = useState(false);
  const [isOppo, setIsOppo] = useState(false);
  const [isHuawei, setIsHuawei] = useState(false);
  const [isRealme, setIsRealme] = useState(false);
  const [isTecno, setIsTecno] = useState(false);
  const [isProduct, setIsProduct] = useState(false);
  const [isYandex, setIsYandex] = useState(false);

  let gb = /Gb/gi;
  let wiFi = /wifi/gi;
  let glasses = /glases/gi;
  let huawei = /HUAWEI/gi;

  const fixName = (allPriceArr) => {
    const fixGb = allPriceArr.name.replace(gb, "");
    const fixGlasses = fixGb.replace(glasses, "glasses");
    const fixHuawei = fixGlasses.replace(huawei, "Huawei");
    const fixZigbee = fixHuawei.replace("Ziee", "Zigbee");
    const fix65Вт = fixZigbee.replace(", 65Вт", "");
    return fix65Вт.replace(wiFi, "Wi-Fi");
  };

  const checkIsProduct = (allPriceArr) => {
    return (
      allPriceArr.length &&
      allPriceArr.map(
        (productEl, index) =>
          baseFix(productEl) &&
          (productEl.name.indexOf("Beats") != -1 ||
            productEl.name.indexOf("Blackview") != -1 ||
            productEl.name.indexOf("AGM") != -1 ||
            productEl.name.indexOf("infinix") != -1 ||
            productEl.name.indexOf("Oppo") != -1 ||
            productEl.name.indexOf("Huawei") != -1 ||
            productEl.name.indexOf("HUAWEI") != -1 ||
            productEl.name.indexOf("Realme") != -1 ||
            productEl.name.indexOf("Tecno") != -1 ||
            productEl.name.indexOf("Camon ") != -1 ||
            productEl.name.indexOf("Яндекс") != -1 ||
            productEl.name.indexOf("Spark ") != -1) &&
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
              {isOpen ? "No name ▲" : "No name ▼"}
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
                {isBeats && <div>🎧 **Beats**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("Beats") != -1 &&
                        (isBeats || setIsBeats(true)) &&
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
                        {baseFix(el) && el.name.indexOf("Beats") != -1 && (
                          <span>{" - " + el.provider}</span>
                        )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isBlackview && <br />}
                {isBlackview && <div>📱 **Blackview**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("Blackview") != -1 &&
                        (isBlackview || setIsBlackview(true)) &&
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
                        {baseFix(el) && el.name.indexOf("Blackview") != -1 && (
                          <span>{" - " + el.provider}</span>
                        )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isAGM && <br />}
                {isAGM && <div>📱 **AGM**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("AGM") != -1 &&
                        (isAGM || setIsAGM(true)) &&
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
                        {baseFix(el) && el.name.indexOf("AGM") != -1 && (
                          <span>{" - " + el.provider}</span>
                        )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isInfinix && <br />}
                {isInfinix && <div>📱 **Infinix**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("infinix") != -1 &&
                        (isInfinix || setIsInfinix(true)) &&
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
                        {baseFix(el) && el.name.indexOf("infinix") != -1 && (
                          <span>{" - " + el.provider}</span>
                        )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isOppo && <br />}
                {isOppo && <div>📱 **Oppo**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("Oppo") != -1 &&
                        (isOppo || setIsOppo(true)) &&
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
                        {baseFix(el) && el.name.indexOf("Oppo") != -1 && (
                          <span>{" - " + el.provider}</span>
                        )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isHuawei && <br />}
                {isHuawei && <div>📱 **Huawei**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.name.indexOf("Huawei") != -1 ||
                          el.name.indexOf("HUAWEI") != -1) &&
                        (isHuawei || setIsHuawei(true)) &&
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
                          (el.name.indexOf("Huawei") != -1 ||
                            el.name.indexOf("HUAWEI") != -1) && (
                            <span>{" - " + el.provider}</span>
                          )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isRealme && <br />}
                {isRealme && <div>📱 **Realme**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("Realme") != -1 &&
                        (isRealme || setIsRealme(true)) &&
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
                        {baseFix(el) && el.name.indexOf("Realme") != -1 && (
                          <span>{" - " + el.provider}</span>
                        )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isTecno && <br />}
                {isTecno && <div>📱 **Tecno**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.name.indexOf("Tecno") != -1 ||
                          el.name.indexOf("Camon ") != -1 ||
                          el.name.indexOf("Spark ") != -1) &&
                        (isTecno || setIsTecno(true)) &&
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
                          (el.name.indexOf("Tecno") != -1 ||
                            el.name.indexOf("Camon ") != -1 ||
                            el.name.indexOf("Spark ") != -1) && (
                            <span>{" - " + el.provider}</span>
                          )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isYandex && <br />}
                {isYandex && <div>🔊 **Яндекс**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("Яндекс") != -1 &&
                        (isYandex || setIsYandex(true)) &&
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
                        {baseFix(el) && el.name.indexOf("Яндекс") != -1 && (
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

export default NoName;
