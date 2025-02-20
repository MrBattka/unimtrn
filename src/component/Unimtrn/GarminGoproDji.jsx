import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const GarminGoProDji = ({ double, superprice, dataUnimtrn }) => {
  const res = [];

  let gb = /Gb/gi;
  let watchGarmin = /Watch Garmin/gi;
  let wiFi = /wifi/gi;
  let sunglases = /Sunglases/gi;
  let dji = /Dji/gi;

  double.map((el) => {
    const fixGb = el.name.replace(gb, "");
    const fixWatchGarmin = fixGb.replace(watchGarmin, "Garmin");
    const fixSunglases = fixWatchGarmin.replace(sunglases, "Sunglasses");
    const fixDji = fixSunglases.replace(dji, "DJI");
    const replaceGoPro = fixDji.replace("GoPro", "");
    const replaceSpace =
      replaceGoPro[0] === " " ? replaceGoPro.slice(1) : replaceGoPro;
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
  const [isDJI, setIsDJI] = useState(false);
  const [isGarmin, setIsGarmin] = useState(false);
  const [isGoPro, setIsGoPro] = useState(false);
  const [isJBL, setIsJBL] = useState(false);
  const [isMarshall, setIsMarshall] = useState(false);
  const [isProduct, setIsProduct] = useState(false);

  const checkIsProduct = (allPriceArr) => {
    return (
      allPriceArr.length &&
      allPriceArr.map(
        (productEl, index) =>
          baseFix(productEl) &&
          (productEl.name.indexOf("DJL ") != -1 ||
            productEl.name.indexOf("DJI ") != -1 ||
            productEl.name.indexOf("DJi ") != -1 ||
            productEl.name.indexOf("Dji ") != -1 ||
            productEl.name.indexOf("Garmin") != -1 ||
            productEl.name.indexOf("GoPro") != -1 ||
            productEl.name.indexOf("JBL") != -1 ||
            productEl.name.indexOf("Marshall") != -1) &&
          (isProduct || setIsProduct(true)) &&
          returnFixPrice(productEl, productEl.name) + productEl.stockPrice
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
                ? "Garmin / GoPro / DJI / JBL ▲"
                : "Garmin / GoPro / DJI / JBL ▼"}
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
                {isDJI && <div>📸 **DJI**</div>}
                {dataUnimtrn.length ? (
                  dataUnimtrn.map((DJIEl, index) => (
                    <div key={index}>
                      {baseFix(DJIEl) &&
                      DJIEl.price &&
                      (DJIEl.name.indexOf("DJL ") != -1 ||
                      DJIEl.name.indexOf("DJI ") != -1 ||
                      DJIEl.name.indexOf("DJi ") != -1 ||
                      DJIEl.name.indexOf("Dji ") != -1) &&
                      (isDJI || setIsDJI(true)) &&
                      returnFixPrice(DJIEl, DJIEl.name) + newPrice(DJIEl.name, DJIEl.price)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isGarmin && <br />}
                {isGarmin && <div>⌚ **Garmin**</div>}
                {superprice.length ? (
                  superprice.map((garminEl, index) => (
                    <div key={index}>
                      {baseFix(garminEl) &&
                      garminEl.price &&
                        (garminEl.name.indexOf("Garmin") != -1 ||
                          garminEl.name.indexOf("GARMIN") != -1) &&
                        (isGarmin || setIsGarmin(true)) &&
                        returnFixPrice(garminEl, garminEl.name) + newPrice(garminEl.name, garminEl.price)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isGoPro && <br />}
                {isGoPro && <div>📸 **GoPro**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((goProEl, index) => (
                    <div key={index}>
                      {baseFix(goProEl) &&
                        (goProEl.name.indexOf("GoPro") != -1 ||
                          goProEl.name.indexOf("Hero") != -1) &&
                        (isGoPro || setIsGoPro(true)) &&
                        returnFixPrice(goProEl, goProEl.name) +
                          (goProEl.provider !== "База"
                            ? newPrice(goProEl.name, goProEl.stockPrice)
                            : goProEl.stockPrice)}
                      <h3 className="del">
                        {baseFix(goProEl) &&
                          (goProEl.name.indexOf("GoPro") != -1 ||
                            goProEl.name.indexOf("Hero") != -1) && (
                            <span>{" - " + goProEl.provider}</span>
                          )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isJBL && <br />}
                {isJBL && <div>🔊 **JBL**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((jblEl, index) => (
                    <div key={index}>
                      {baseFix(jblEl) &&
                        jblEl.name.indexOf("JBL") != -1 &&
                        (isJBL || setIsJBL(true)) &&
                        returnFixPrice(jblEl, jblEl.name) +
                          (jblEl.provider !== "База"
                            ? newPrice(jblEl.name, jblEl.stockPrice)
                            : jblEl.stockPrice)}
                      <h3 className="del">
                        {baseFix(jblEl) && jblEl.name.indexOf("JBL") != -1 && (
                          <span>{" - " + jblEl.provider}</span>
                        )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isMarshall && <br />}
                {isMarshall && <div>🎧 **Marshall**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((marshsalEl, index) => (
                    <div key={index}>
                      {baseFix(marshsalEl) &&
                        marshsalEl.name.indexOf("Marshall") != -1 &&
                        (isMarshall || setIsMarshall(true)) &&
                        returnFixPrice(marshsalEl, marshsalEl.name) +
                          (marshsalEl.provider !== "База"
                            ? newPrice(marshsalEl.name, marshsalEl.stockPrice)
                            : marshsalEl.stockPrice)}
                      <h3 className="del">
                        {baseFix(marshsalEl) &&
                          marshsalEl.name.indexOf("Marshall") != -1 && (
                            <span>{" - " + marshsalEl.provider}</span>
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

export default GarminGoProDji;
