import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const GameConsoles = ({ double }) => {
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
  const [isNintendo, setIsNintendo] = useState(false);
  const [isOculus, setIsOculus] = useState(false);
  const [isPlayStation, setIsPlayStation] = useState(false);
  const [isXbox, setIsXbox] = useState(false);
  const [isPico, setIsPico] = useState(false);
  const [isSteam, setIsSteam] = useState(false);
  const [isConsoles, setIsConsoles] = useState(false);

  let gb = /Gb/gi;
  let wiFi = /wifi/gi;
  let playstation = /Playstation/gi;

  const fixName = (allPriceArr) => {
    const fixGb = allPriceArr.name.replace(gb, "");
    const replaceSony = fixGb.replace("Sony ", "");
    const fixPlaystation = replaceSony.replace(playstation, "PlayStation");
    return fixPlaystation.replace(wiFi, "Wi-Fi");
  };

  const checkIsConsoles = (allPriceArr) => {
    return (
      allPriceArr.length &&
      allPriceArr.map(
        (productEl, index) =>
          baseFix(productEl) &&
          (productEl.name.indexOf("PlayStation") != -1 ||
            productEl.name.indexOf("Playstation") != -1 ||
            productEl.name.indexOf("PS5") != -1 ||
            productEl.name.indexOf("Nintendo") != -1 ||
            productEl.name.indexOf("Oculus") != -1 ||
            productEl.name.indexOf("Pico") != -1 ||
            productEl.name.indexOf("Xbox") != -1 ||
            productEl.name.indexOf("Steam") != -1) &&
          (isConsoles || setIsConsoles(true)) &&
          returnFixPrice(productEl, fixName(productEl)) + newPrice(productEl.name, productEl.stockPrice)
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
                checkIsConsoles(allPriceArr) && !isConsoles
                  ? style.titleNotFound
                  : style.title
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Игровые приставки ▲" : "Игровые приставки ▼"}
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
                {isNintendo && <div>🕹️ **Nintendo**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("Nintendo") != -1 &&
                        (isNintendo || setIsNintendo(true)) &&
                        returnFixPrice(el, fixName(el)) + (el.provider !== "База"
                          ? newPrice(el.name, el.stockPrice)
                          : el.stockPrice)}
                        <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("Nintendo") != -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isOculus && <br />}
                {isOculus && <div>🥽 **Oculus**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("Oculus") != -1 &&
                        (isOculus || setIsOculus(true)) &&
                        returnFixPrice(el, fixName(el)) + (el.provider !== "База"
                          ? newPrice(el.name, el.stockPrice)
                          : el.stockPrice)}
                        <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("Oculus") != -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isPico && <br />}
                {isPico && <div>🥽 **Pico**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("Pico") != -1 &&
                        (isPico || setIsPico(true)) &&
                        returnFixPrice(el, fixName(el)) + (el.provider !== "База"
                          ? newPrice(el.name, el.stockPrice)
                          : el.stockPrice)}
                        <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("Pico") != -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isPlayStation && <br />}
                {isPlayStation && <div>🎮 **PlayStation**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.name.indexOf("PlayStation") != -1 ||
                          el.name.indexOf("Playstation") != -1 ||
                          el.name.indexOf("PS5") != -1) &&
                        (isPlayStation || setIsPlayStation(true)) &&
                        returnFixPrice(el, fixName(el)) + (el.provider !== "База"
                          ? newPrice(el.name, el.stockPrice)
                          : el.stockPrice)}
                         <h3 className="del">
                              {baseFix(el) &&
                                (el.name.indexOf("PlayStation") != -1 ||
                                el.name.indexOf("Playstation") != -1 ||
                                el.name.indexOf("PS5") != -1) && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isXbox && <br />}
                {isXbox && <div>🎮 **Xbox**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("Xbox") != -1 &&
                        (isXbox || setIsXbox(true)) &&
                        returnFixPrice(el, fixName(el)) + (el.provider !== "База"
                          ? newPrice(el.name, el.stockPrice)
                          : el.stockPrice)}
                        <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("Xbox") != -1 && (
                                  <span>{" - " + el.provider}</span>
                                )}
                            </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isSteam && <br />}
                {isSteam && <div>🕹️ **Steam**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        el.name.indexOf("Steam") != -1 &&
                        (isSteam || setIsSteam(true)) &&
                        returnFixPrice(el, fixName(el)) + (el.provider !== "База"
                          ? newPrice(el.name, el.stockPrice)
                          : el.stockPrice)}
                        <h3 className="del">
                              {baseFix(el) &&
                                el.name.indexOf("Steam") != -1 && (
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

export default GameConsoles;
