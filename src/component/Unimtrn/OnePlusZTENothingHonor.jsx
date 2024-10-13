import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const OnePlusZTENothingHonor = ({ el }) => {
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

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixTecno = fixGb.replace(tecno, "Tecno");
    const fixRealme = fixTecno.replace(realme, "Realme");
    return fixRealme.replace(wiFi, "Wi-Fi");
  };

  const checkIsProduct = (el) => {
    return (
      el.length &&
      el.map(
        (el, index) =>
          baseFix(el) &&
          (el.Товар.indexOf("OnePlus") != -1 ||
            el.Товар.indexOf("RedMagic") != -1 ||
            el.Товар.indexOf("Nubia") != -1 ||
            el.Товар.indexOf("Nothing Phone") != -1 ||
            el.Товар.indexOf("Nothing CMF") != -1 ||
            el.Товар.indexOf("Nothing Ear") != -1 ||
            el.Товар.indexOf("Nothing ear") != -1 ||
            el.Товар.indexOf("Honor") != -1) &&
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
                ? "OnePlus / ZTE / Nothing / Honor ▲"
                : "OnePlus / ZTE / Nothing / Honor ▼"}
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
                {isOnePlus && <br />}
                {isOnePlus && <div>📱OnePlus</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.Товар.indexOf("OnePlus") != -1 &&
                        (isOnePlus || setIsOnePlus(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isZTE && <br />}
                {isZTE && <div>📱ZTE</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("RedMagic") != -1 ||
                          el.Товар.indexOf("Nubia") != -1) &&
                        (isZTE || setIsZTE(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isNothing && <br />}
                {isNothing && <div>📱Nothing</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Nothing Phone") != -1 ||
                          el.Товар.indexOf("Nothing CMF") != -1 ||
                          el.Товар.indexOf("Nothing Ear") != -1 ||
                          el.Товар.indexOf("Nothing ear") != -1) &&
                        (isNothing || setIsNothing(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isHonor && <br />}
                {isHonor && <div>📱Honor</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.Товар.indexOf("Honor") != -1 &&
                        (isHonor || setIsHonor(true)) &&
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

export default OnePlusZTENothingHonor;
