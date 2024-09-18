import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const Xiaomi = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOther, setIsOther] = useState(false);
  const [isRedmi, setIsRedmi] = useState(false);
  const [isMi, setIsMi] = useState(false);
  const [isPoco, setIsPoco] = useState(false);

  let gb = /Gb/gi;
  let wiFi = /wifi/gi;
  let poco = /Poco/gi;
  let poco1 = /poco/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixPoco = fixGb.replace(poco, "POCO");
    const fixPoco1 = fixPoco.replace(poco1, "POCO");
    return fixPoco1.replace(wiFi, "Wi-Fi");
  };

  return (
    <div>
      <div>
        <div>
          {el.length > 1 && (
            <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
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
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Redmi Buds") != -1 ||
                          el.Товар.indexOf("Mi Watch") != -1 ||
                          el.Товар.indexOf("Mi Portable") != -1) &&
                        (isOther || setIsOther(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isRedmi && <br />}
                {isRedmi && <div>📱Redmi</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Redmi Note") != -1 ||
                          el.Товар.indexOf("Note") != -1 ||
                          el.Товар.indexOf("Redmi") != -1) &&
                          el.Товар.indexOf("Redmi Buds") == -1 &&
                        (isRedmi || setIsRedmi(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isMi && <br />}
                {isMi && <div>📱Mi</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Mi ") != -1 ||
                          el.Товар.indexOf("MI ") != -1) &&
                          el.Товар.indexOf("Mi Watch") == -1 &&
                          el.Товар.indexOf("Mi Portable ") == -1 &&
                          el.Товар.indexOf("HDMI") == -1 &&
                        (isMi || setIsMi(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isPoco && <br />}
                {isPoco && <div>📱Poco</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Poco") != -1 ||
                          el.Товар.indexOf("POCO") != -1) &&
                        (isPoco || setIsPoco(true)) &&
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

export default Xiaomi;
