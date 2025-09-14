import { useState } from "react";
import { baseFix, baseFixSuperPrice } from "../../helpers/baseFix";
import { copyTable } from "../../helpers/copy";
import { returnFixPrice } from "../../helpers/fixPrice";
import { additionalCost } from "../../helpers/newPrice";
import Footer from "./Footer";
import style from "./styles.module.css";

const GoogleSonyAsusLenovo = ({ double, dataUnimtrn, superprice }) => {
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
  const [isPixelPhone, setIsPixelPhone] = useState(false);
  const [isPixelWatch, setIsPixelWatch] = useState(false);
  const [isPixelTab, setIsPixelTab] = useState(false);
  const [isPixelBuds, setIsPixelBuds] = useState(false);
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
          "` " + returnFixPrice(productEl, fixName(productEl)) +
            additionalCost(productEl.price)
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
              {isOpen ? "Google / Sony / Asus ▲" : "Google / Sony / Asus ▼"}
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
                {isAsus && <div>📱 **Asus**</div>}

                {dataUnimtrn.length ? (
                  dataUnimtrn.map((asusEl, index) => (
                    <div key={index}>
                      {baseFix(asusEl) &&
                        asusEl.price &&
                        (asusEl.name.indexOf("Asus") != -1 ||
                          asusEl.name.indexOf("ZenFone") != -1 ||
                          asusEl.name.indexOf("ROG") != -1 ||
                          asusEl.name.indexOf("Rog") != -1 ||
                          asusEl.name.indexOf("Asus") != -1) &&
                        (isAsus || setIsAsus(true)) &&
                        "` " + returnFixPrice(asusEl, asusEl.name) +
                          additionalCost(asusEl.price) + "`"}

                      <h3 className="del">
                        {baseFix(asusEl) &&
                          (asusEl.name.indexOf("Asus") != -1 ||
                            asusEl.name.indexOf("ZenFone") != -1 ||
                            asusEl.name.indexOf("ROG") != -1 ||
                            asusEl.name.indexOf("Rog") != -1 ||
                            asusEl.name.indexOf("Asus") != -1) && (
                            <span>{" - " + "Unimtrn"}</span>
                          )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isPixelBuds && <br />}
                {isPixelBuds && <div>🎧 **Pixel Buds**</div>}
                {dataUnimtrn.length ? (
                  dataUnimtrn.map((googleEl, index) => (
                    <div key={index}>
                      {baseFix(googleEl) &&
                        googleEl.name.indexOf("Pixel Buds") != -1 &&
                        (isPixelBuds || setIsPixelBuds(true)) &&
                        "` " + returnFixPrice(googleEl, fixName(googleEl)) +
                          additionalCost(googleEl.price) + "`"}
                      <h3 className="del">
                        {baseFix(googleEl) &&
                          googleEl.name.indexOf("Pixel Buds") != -1 && (
                            <span>{" - " + "Unimtrn"}</span>
                          )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isPixelWatch && <br />}
                {isPixelWatch && <div>⌚ **Pixel Watch**</div>}
                {superprice.length ? (
                  superprice.map((googleEl, index) => (
                    <div key={index}>
                      {baseFixSuperPrice(googleEl) &&
                        googleEl.name.indexOf("Pixel Watch") != -1 &&
                        (isPixelWatch || setIsPixelWatch(true)) &&
                        "` " + returnFixPrice(googleEl, fixName(googleEl)) +
                          additionalCost(googleEl.price) + "`"}
                      <h3 className="del">
                        {baseFixSuperPrice(googleEl) &&
                          googleEl.name.indexOf("Pixel Watch") != -1 && (
                            <span>{" - " + "Super Price"}</span>
                          )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}
                {isPixelPhone && <br />}
                {isPixelPhone && <div>📱 **Pixel Phone**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((googleEl, index) => (
                    <div key={index}>
                      {baseFix(googleEl) &&
                        (googleEl.name.indexOf("Google") != -1 ||
                          googleEl.name.indexOf("Pixel") != -1) &&
                        googleEl.name.indexOf("Pixel Watch") == -1 &&
                        googleEl.name.indexOf("Pixel Buds") == -1 &&
                        googleEl.name.indexOf("Pixel Tablet") == -1 &&
                        (isPixelPhone || setIsPixelPhone(true)) &&
                        "` " + returnFixPrice(googleEl, fixName(googleEl)) +
                          (googleEl.condition
                            ? `${additionalCost(googleEl.extraPrice)} 👉 (${
                                additionalCost(googleEl.stockPrice) +
                                googleEl.condition
                              })`
                            : googleEl.provider !== "База"
                            ? additionalCost(
                                googleEl.condition
                                  ? googleEl.extraPrice
                                  : googleEl.stockPrice
                              )
                            : googleEl.stockPrice) + "`"}
                      <h3 className="del">
                        {baseFix(googleEl) &&
                          (googleEl.name.indexOf("Google") != -1 ||
                            googleEl.name.indexOf("Pixel") != -1) &&
                          googleEl.name.indexOf("Pixel Watch") == -1 &&
                          googleEl.name.indexOf("Pixel Buds") == -1 &&
                          googleEl.name.indexOf("Pixel Tablet") == -1 && (
                            <span>{" - " + googleEl.provider}</span>
                          )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isPixelTab && <br />}
                {isPixelTab && <div>📟 **Pixel Tablet**</div>}
                {dataUnimtrn.length ? (
                  dataUnimtrn.map((googleEl, index) => (
                    <div key={index}>
                      {baseFix(googleEl) &&
                        googleEl.name.indexOf("Pixel Tab") != -1 &&
                        (isPixelTab || setIsPixelTab(true)) &&
                        "` " + returnFixPrice(googleEl, fixName(googleEl)) +
                          additionalCost(googleEl.price) + "`"}
                      <h3 className="del">
                        {baseFix(googleEl) &&
                          googleEl.name.indexOf("Pixel Tab") != -1 && (
                            <span>{" - " + "Unimtrn"}</span>
                          )}
                      </h3>
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isSony && <br />}
                {isSony && <div>📱 **Sony**</div>}
                {allPriceArr.length ? (
                  allPriceArr.map((sonyEl, index) => (
                    <div key={index}>
                      {baseFix(sonyEl) &&
                        (sonyEl.name.indexOf("Sony Wireless") != -1 ||
                          sonyEl.name.indexOf("Wireless WH") != -1 ||
                          sonyEl.name.indexOf("Xperia") != -1) &&
                        (isSony || setIsSony(true)) &&
                        "` " + returnFixPrice(sonyEl, fixName(sonyEl)) +
                          (sonyEl.condition
                            ? `${additionalCost(sonyEl.extraPrice)} 👉 (${
                                additionalCost(sonyEl.stockPrice) +
                                sonyEl.condition
                              })`
                            : sonyEl.provider !== "База"
                            ? additionalCost(
                                sonyEl.condition
                                  ? sonyEl.extraPrice
                                  : sonyEl.stockPrice
                              )
                            : sonyEl.stockPrice) + "`"}
                      <h3 className="del">
                        {baseFix(sonyEl) &&
                          (sonyEl.name.indexOf("Sony Wireless") != -1 ||
                            sonyEl.name.indexOf("Wireless WH") != -1 ||
                            sonyEl.name.indexOf("Xperia") != -1) && (
                            <span>{" - " + sonyEl.provider}</span>
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

export default GoogleSonyAsusLenovo;
