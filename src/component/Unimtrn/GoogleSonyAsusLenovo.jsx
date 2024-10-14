import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const GoogleSonyAsusLenovo = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAsus, setIsAsus] = useState(false);
  const [isGoogle, setIsGoogle] = useState(false);
  const [isSony, setIsSony] = useState(false);
  const [isProduct, setIsProduct] = useState(false);

  let gb = /Gb/gi;
  let rog = /Rog/gi;
  let sony = /Sony Xperia/gi;
  let zenFone = /Asus ZenFone/gi;
  let wiFi = /wifi/gi;
  let google = /Google /gi;
  let asus = /Asus /gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixSony = fixGb.replace(sony, "Xperia");
    const fixRog = fixSony.replace(rog, "ROG");
    const fixGoogle = fixRog.replace(google, "");
    const fixZenFone = fixGoogle.replace(zenFone, "ZenFone");
    const fixAsus = fixZenFone.replace(asus, "");
    return fixAsus.replace(wiFi, "Wi-Fi");
  };

  const checkIsProduct = (el) => {
    return (
      el.length &&
      el.map(
        (el, index) =>
          baseFix(el) &&
          (el.Товар.indexOf("Asus") != -1 ||
            el.Товар.indexOf("ZenFone") != -1 ||
            el.Товар.indexOf("ROG") != -1 ||
            el.Товар.indexOf("Rog") != -1 ||
            el.Товар.indexOf("Asus") != -1 ||
            el.Товар.indexOf("Google") != -1 ||
            el.Товар.indexOf("Pixel") != -1 ||
            el.Товар.indexOf("Sony Wireless") != -1 ||
            el.Товар.indexOf("Wireless WH") != -1 ||
            el.Товар.indexOf("Xperia") != -1) &&
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
              {isOpen ? "Google / Sony / Asus ▲" : "Google / Sony / Asus ▼"}
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
                {isAsus && <div>📱Asus</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Asus") != -1 ||
                          el.Товар.indexOf("ZenFone") != -1 ||
                          el.Товар.indexOf("ROG") != -1 ||
                          el.Товар.indexOf("Rog") != -1 ||
                          el.Товар.indexOf("Asus") != -1) &&
                        (isAsus || setIsAsus(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isGoogle && <br />}
                {isGoogle && <div>📱Google</div>}
                Pixel 8 8/256 Obsidian 🇯🇵53500
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Google") != -1 ||
                          el.Товар.indexOf("Pixel") != -1) &&
                          el.Товар.indexOf("Pixel 8 8/256 Obsidian") == -1 &&
                        (isGoogle || setIsGoogle(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isSony && <br />}
                {isSony && <div>📱Sony</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Sony Wireless") != -1 ||
                          el.Товар.indexOf("Wireless WH") != -1 ||
                          el.Товар.indexOf("Xperia") != -1) &&
                        (isSony || setIsSony(true)) &&
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

export default GoogleSonyAsusLenovo;
