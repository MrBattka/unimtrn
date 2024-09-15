import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const NoName = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBeats, setIsBeats] = useState(false);
  const [isBlackview, setIsBlackview] = useState(false);
  const [isAGM, setIsAGM] = useState(false);
  const [isInfinix, setIsInfinix] = useState(false);
  const [isOppo, setIsOppo] = useState(false);
  const [isHuawei, setIsHuawei] = useState(false);
  const [isRealme, setIsRealme] = useState(false);
  const [isTecno, setIsTecno] = useState(false);

  let gb = /Gb/gi;
  let wiFi = /wifi/gi;
  let glasses = /glases/gi;
  let huawei = /HUAWEI/gi;

  console.log(el);

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixGlasses = fixGb.replace(glasses, "glasses");
    const fixHuawei = fixGlasses.replace(huawei, "Huawei");
    return fixHuawei.replace(wiFi, "Wi-Fi");
  };

  return (
    <div>
      <div>
        <div>
          {el.length > 1 && (
            <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "No name ▲" : "No name ▼"}
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

                {isBeats && <div>🎧Beats</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Beats") != -1) &&
                        (isBeats || setIsBeats(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isBlackview && <br />}
                {isBlackview && <div>📱Blackview</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Blackview") != -1) &&
                        (isBlackview || setIsBlackview(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isAGM && <br />}
                {isAGM && <div>📱AGM</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("AGM") != -1) &&
                        (isAGM || setIsAGM(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isInfinix && <br />}
                {isInfinix && <div>📱Infinix</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("infinix") != -1) &&
                        (isInfinix || setIsInfinix(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isOppo && <br />}
                {isOppo && <div>📱Oppo</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Oppo") != -1) &&
                        (isOppo || setIsOppo(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isHuawei && <br />}
                {isHuawei && <div>📱Huawei</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Huawei") != -1 ||
                          el.Товар.indexOf("HUAWEI") != -1) &&
                        (isHuawei || setIsHuawei(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isRealme && <br />}
                {isRealme && <div>📱Realme</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Realme") != -1) &&
                        (isRealme || setIsRealme(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isTecno && <br />}
                {isTecno && <div>📱Tecno</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Tecno") != -1 ||
                          el.Товар.indexOf("Camon ") != -1 ||
                          el.Товар.indexOf("Spark ") != -1) &&
                        (isTecno || setIsTecno(true)) &&
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

export default NoName;
