import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const Samsung = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOther, setIsOther] = useState(false);
  const [isPhones, setIsPhones] = useState(false);
  const [isWatch, setIsWatch] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isProduct, setIsProduct] = useState(false);

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

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixGalaxyWatch = fixGb.replace(galaxyWatch, "Watch");
    const fixClassik = fixGalaxyWatch.replace(classik, "Classic");
    const fixS21 = fixClassik.replace(s21, "S21");
    const fixS22 = fixS21.replace(s22, "S22");
    const fixS23 = fixS22.replace(s23, "S23");
    const fixS24 = fixS23.replace(s24, "S24");
    const fixWiFi = fixS24.replace(wiFi, "Wi-Fi");
    const fixA550 = fixWiFi.replace(a550, "A55");
    return fixA550.replace(zFlip, "Z Flip");
  };

  const checkIsProduct = (el) => {
    return (
      el.length &&
      el.map(
        (el, index) =>
          baseFix(el) &&
          (el.Товар.indexOf("Galaxy Buds") != -1 ||
            el.Товар.indexOf("Galaxy Smart Tag") != -1 ||
            el.Товар.indexOf("Watch 6") != -1 ||
            el.Товар.indexOf("A05s") != -1 ||
            el.Товар.indexOf("A05") != -1 ||
            el.Товар.indexOf("A06") != -1 ||
            el.Товар.indexOf("A15") != -1 ||
            el.Товар.indexOf("A25") != -1 ||
            el.Товар.indexOf("A24") != -1 ||
            el.Товар.indexOf("A54") != -1 ||
            el.Товар.indexOf("A34") != -1 ||
            el.Товар.indexOf("A35 ") != -1 ||
            el.Товар.indexOf("M34") != -1 ||
            el.Товар.indexOf("M54") != -1 ||
            el.Товар.indexOf("A55") != -1 ||
            el.Товар.indexOf("S21") != -1 ||
            el.Товар.indexOf("S22") != -1 ||
            el.Товар.indexOf("S23") != -1 ||
            el.Товар.indexOf("S24") != -1 ||
            el.Товар.indexOf("Z Flip") != -1 ||
            el.Товар.indexOf("Z Fold") != -1 ||
            el.Товар.indexOf("Tab S") != -1) &&
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
                {isOther && <div>👉Samsung</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Galaxy Buds") != -1 ||
                          el.Товар.indexOf("Galaxy Smart Tag") != -1) &&
                        (isOther || setIsOther(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isWatch && <br />}
                {isWatch && <div>⌚Watch</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.Товар.indexOf("Watch 6") != -1 &&
                        (isWatch || setIsWatch(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isPhones && <br />}
                {isPhones && <div>📱Phones</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("A05s") != -1 ||
                          el.Товар.indexOf("A05") != -1 ||
                          el.Товар.indexOf("A06") != -1 ||
                          el.Товар.indexOf("A15") != -1 ||
                          el.Товар.indexOf("A25") != -1 ||
                          el.Товар.indexOf("A24") != -1 ||
                          el.Товар.indexOf("A54") != -1 ||
                          el.Товар.indexOf("A34") != -1 ||
                          el.Товар.indexOf("A35 ") != -1 ||
                          el.Товар.indexOf("M34") != -1 ||
                          el.Товар.indexOf("M54") != -1 ||
                          el.Товар.indexOf("A55") != -1 ||
                          el.Товар.indexOf("S21") != -1 ||
                          el.Товар.indexOf("S22") != -1 ||
                          el.Товар.indexOf("S23") != -1 ||
                          el.Товар.indexOf("S24") != -1 ||
                          el.Товар.indexOf("Z Flip") != -1 ||
                          el.Товар.indexOf("Z Fold") != -1) &&
                        (isPhones || setIsPhones(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isTab && <br />}
                {isTab && <div>📟Tab</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.Товар.indexOf("Tab S") != -1 &&
                        (isTab || setIsTab(true)) &&
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

export default Samsung;
