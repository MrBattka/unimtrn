import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const GoogleSonyAsusLenovo = ({ double }) => {
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
    const fixGb = el.name.replace(gb, "");
    const fixSony = fixGb.replace(sony, "Xperia");
    const fixRog = fixSony.replace(rog, "ROG");
    const fixGoogle = fixRog.replace(google, "");
    const fixZenFone = fixGoogle.replace(zenFone, "ZenFone");
    const fixAsus = fixZenFone.replace(asus, "");
    return fixAsus.replace(wiFi, "Wi-Fi");
  };

  const checkIsProduct = (product) => {
    return (
      product.length &&
      product.map(
        (productEl, index) =>
          baseFix(productEl) &&
          (productEl.name.indexOf("Asus") != -1 ||
            productEl.name.indexOf("ZenFone") != -1 ||
            productEl.name.indexOf("ROG") != -1 ||
            productEl.name.indexOf("Rog") != -1 ||
            productEl.name.indexOf("Asus") != -1 ||
            productEl.name.indexOf("Google") != -1 ||
            productEl.name.indexOf("Pixel") != -1 ||
            productEl.name.indexOf("Sony Wireless") != -1 ||
            productEl.name.indexOf("Wireless WH") != -1 ||
            productEl.name.indexOf("Xperia") != -1) &&
          (isProduct || setIsProduct(true)) &&
          returnFixPrice(productEl, fixName(productEl)) + newPrice(productEl.name, productEl.price)
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
                {allPriceArr.length ? (
                  allPriceArr.map((asusEl, index) => (
                    <div key={index}>
                      {baseFix(asusEl) &&
                        (asusEl.name.indexOf("Asus") != -1 ||
                          asusEl.name.indexOf("ZenFone") != -1 ||
                          asusEl.name.indexOf("ROG") != -1 ||
                          asusEl.name.indexOf("Rog") != -1 ||
                          asusEl.name.indexOf("Asus") != -1) &&
                        (isAsus || setIsAsus(true)) &&
                        returnFixPrice(asusEl, fixName(asusEl)) +
                          newPrice(asusEl.name, asusEl.stockPrice)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}
                {isGoogle && <br />}
                {isGoogle && <div>📱Google</div>}
                Pixel 8 8/256 Obsidian 🇯🇵53500
                {allPriceArr.length ? (
                  allPriceArr.map((googleEl, index) => (
                    <div key={index}>
                      {baseFix(googleEl) &&
                        (googleEl.name.indexOf("Google") != -1 ||
                          googleEl.name.indexOf("Pixel") != -1) &&
                        googleEl.name.indexOf("Pixel 8 8/256 Obsidian") == -1 &&
                        (isGoogle || setIsGoogle(true)) &&
                        returnFixPrice(googleEl, fixName(googleEl)) +
                          newPrice(googleEl.name, googleEl.stockPrice)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}
                {isSony && <br />}
                {isSony && <div>📱Sony</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((sonyEl, index) => (
                    <div key={index}>
                      {baseFix(sonyEl) &&
                        (sonyEl.name.indexOf("Sony Wireless") != -1 ||
                          sonyEl.name.indexOf("Wireless WH") != -1 ||
                          sonyEl.name.indexOf("Xperia") != -1) &&
                        (isSony || setIsSony(true)) &&
                        returnFixPrice(sonyEl, fixName(sonyEl)) +
                          newPrice(sonyEl.name, sonyEl.stockPrice)}
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
