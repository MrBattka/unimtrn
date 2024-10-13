import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const GarminGoProDji = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDJI, setIsDJI] = useState(false);
  const [isGarmin, setIsGarmin] = useState(false);
  const [isGoPro, setIsGoPro] = useState(false);
  const [isJBL, setIsJBL] = useState(false);
  const [isMarshall, setIsMarshall] = useState(false);
  const [isProduct, setIsProduct] = useState(false);

  let gb = /Gb/gi;
  let watchGarmin = /Watch Garmin/gi;
  let wiFi = /wifi/gi;
  let sunglases = /Sunglases/gi;
  let dji = /Dji/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixWatchGarmin = fixGb.replace(watchGarmin, "Garmin");
    const fixSunglases = fixWatchGarmin.replace(sunglases, "Sunglasses");
    const fixDji = fixSunglases.replace(dji, "DJI");
    return fixDji.replace(wiFi, "Wi-Fi");
  };

  const checkIsProduct = (el) => {
    return (
      el.length &&
      el.map(
        (el, index) =>
          baseFix(el) &&
          (el.Товар.indexOf("DJL ") != -1 ||
            el.Товар.indexOf("DJI ") != -1 ||
            el.Товар.indexOf("DJi ") != -1 ||
            el.Товар.indexOf("Dji ") != -1 ||
            el.Товар.indexOf("Garmin") != -1 ||
            el.Товар.indexOf("GoPro") != -1 ||
            el.Товар.indexOf("JBL") != -1 ||
            el.Товар.indexOf("Marshall") != -1) &&
          (isProduct || setIsProduct(true)) &&
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
                checkIsProduct(el) && !isProduct
                  ? style.titleNotFound
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
                {isDJI && <div>📸DJI</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("DJL ") != -1 ||
                          el.Товар.indexOf("DJI ") != -1 ||
                          el.Товар.indexOf("DJi ") != -1 ||
                          el.Товар.indexOf("Dji ") != -1) &&
                        (isDJI || setIsDJI(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isGarmin && <br />}
                {isGarmin && <div>⌚Garmin</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.Товар.indexOf("Garmin") != -1 &&
                        (isGarmin || setIsGarmin(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isGoPro && <br />}
                {isGoPro && <div>📸GoPro</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.Товар.indexOf("GoPro") != -1 &&
                        (isGoPro || setIsGoPro(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isJBL && <br />}
                {isJBL && <div>🔊JBL</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.Товар.indexOf("JBL") != -1 &&
                        (isJBL || setIsJBL(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isMarshall && <br />}
                {isMarshall && <div>🎧Marshall</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.Товар.indexOf("Marshall") != -1 &&
                        (isMarshall || setIsMarshall(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
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
