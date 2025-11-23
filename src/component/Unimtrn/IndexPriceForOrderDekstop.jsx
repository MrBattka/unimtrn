import { useState } from "react";
import {
  baseFix,
  baseFixBase,
  baseFixGarmin,
  baseFixHi,
  baseFixMiOpts,
  baseFixSunrise,
  baseFixSuperPrice,
} from "../../helpers/baseFix";
import { returnFixPrice } from "../../helpers/fixPrice";
import { newPrice } from "../../helpers/newPrice";
import { returnFixNameBase } from "../Provider/Base/helpers/helpers";
import {
  fixNameHi,
  returnExtraPriceHi,
  returnNameInArrHi,
  returnStockPriceHi,
} from "../Provider/Hi/helpers/helpers";
import {
  fixNameMiOpts,
  returnExtraPriceMiOpts,
  returnNameInArrMiOpts,
  returnStockPriceMiOpts,
} from "../Provider/MiOpts/helpers/helpers";
import { fixNameSuperPrice } from "../Provider/SuperPrice/helpers/helpers";
import { returnApple } from "../Provider/Unimtrn/Apple/apple";
import { returnDyson } from "../Provider/Unimtrn/Dyson/dyson";
import { returnGameConsole } from "../Provider/Unimtrn/GameConsole/gameConsole";
import { returnOtherProduct } from "../Provider/Unimtrn/OtherProduct/otherProduct";
import { returnSamsung } from "../Provider/Unimtrn/Samsung/samsung";
import { returnXiaomi } from "../Provider/Unimtrn/Xiaomi/xiaomi";
import { fixNameUnimtrn, parseNamePrice, parsePrice, returnNameInArrUnimtrn, returnStockPriceUnimtrn, splitNamePrice } from "../Provider/Unimtrn/helpers/helpers";
import Apple from "./Apple";
import Dyson from "./Dyson";
import GameConsoles from "./GameConsoles";
import GarminGoProDji from "./GarminGoproDji";
import GoogleSonyAsusLenovo from "./GoogleSonyAsusLenovo";
import NoName from "./NoName";
import OnePlusZTENothingHonor from "./OnePlusZTENothingHonor";
import Samsung from "./Samsung";
import Xiaomi from "./Xiaomi";
import style from "./indexPicrForOrder.module.css";

import { defaultFixName } from "../../helpers/defaultFixName";
import { returnFixPriceHi } from "../../helpers/fixFlags";
import { getIdByName } from "../../helpers/returnIDByName";
import { changeFlag } from "../PriceFromBase/helpers/fixFlags";
import {
  fixNameMihonor,
  returnExtraPriceMihonor,
  returnNameInArrMihonor,
  returnStockPriceMihonor,
} from "../Provider/MiHonor/helpers/helpers";
import {
  returnFixNameSunrise,
  returnNameInArrSunrise,
  returnStockPriceSunrise,
} from "../Provider/Sunrise/helpers/helpers";
import ProductNotID from "./ProductNotID";
import preloader from "../../source/preloader/preloader.svg"

const IndexPriceForOrderDekstop = ({
  dataUnimtrn,
  hi,
  handleImport,
  sunriseData,
  mioptsData,
  superpriceData,
  baseData,
  garminData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const allPriceArr = [];
  const allPriceArrNotID = [];
  const hiArr = [];
  const garminArr = [];

  const allItems = [];

  const returnNewMiopt = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (
        item.name.includes("₽") &&
        (item.name.includes("GB") || item.name.includes("TRB"))
      ) {
        allItems.push({ name: item.name });
      } else if (!item.name.includes("GB") || !item.name.includes("TRB")) {
        const priceItem = arr[i + 1];
        if (
          priceItem &&
          priceItem.name.includes("₽") &&
          (item.name.includes("GB") || item.name.includes("TRB"))
        ) {
          allItems.push({ name: item.name + " " + priceItem.name });
        } else {
          allItems.push({ name: item.name });
        }
      }
    }
  };

  returnNewMiopt(mioptsData);

  // dataUnimtrn.map((unimtrnEl) => {
  //   if (
  //     unimtrnEl.name &&
  //     getIdByName(
  //       defaultFixName(returnFixPrice(unimtrnEl, fixNameUnimtrn(unimtrnEl)))
  //     ) !== "No match" &&
  //     baseFix(unimtrnEl) &&
  //     (returnApple(unimtrnEl) ||
  //       returnDyson(unimtrnEl) ||
  //       returnSamsung(unimtrnEl) ||
  //       returnXiaomi(unimtrnEl) ||
  //       returnGameConsole(unimtrnEl) ||
  //       returnOtherProduct(unimtrnEl))
  //   ) {
  //     allPriceArr.push({
  //       id: getIdByName(
  //         defaultFixName(returnFixPrice(unimtrnEl, fixNameUnimtrn(unimtrnEl)))
  //       ),
  //       name: fixNameUnimtrn(unimtrnEl),
  //       extraPrice: newPrice(unimtrnEl.name, unimtrnEl.price),
  //       stockPrice: unimtrnEl.price,
  //       provider: "Unimtrn",
  //     });
  //   }
  // });

   dataUnimtrn.map((unimtrn) => {
      if (
        unimtrn.name &&
        getIdByName(
          defaultFixName(fixNameUnimtrn(unimtrn.name))
        ) !== "No match" &&
        baseFix(unimtrn)
      ) {
        allPriceArr.push({
          id: getIdByName(
            defaultFixName(fixNameUnimtrn(unimtrn.name))
          ),
          name: parseNamePrice(unimtrn),
          extraPrice: parsePrice(unimtrn),
          stockPrice: parsePrice(unimtrn),
          provider: "Unimtrn",
        });
      }
    });


  hi.map((hiEl) => {
    return (
      baseFixHi(hiEl) &&
      getIdByName(defaultFixName(returnNameInArrHi(fixNameHi(hiEl.name)))) !==
        "No match" &&
      allPriceArr.push({
        id: getIdByName(
          defaultFixName(returnNameInArrHi(fixNameHi(hiEl.name)))
        ),
        name: returnFixPriceHi(hiEl, returnNameInArrHi(fixNameHi(hiEl.name))),
        extraPrice: returnExtraPriceHi(fixNameHi(hiEl.name)),
        stockPrice: returnStockPriceHi(fixNameHi(hiEl.name)),
        provider: "Hi",
      })
    );
  });

  hi.map((hiEl) => {
    return (
      baseFixHi(hiEl) &&
      // getIdByName(defaultFixName(returnNameInArrHi(fixNameHi(hiEl.name))) !== "No match" &&
      hiArr.push({
        id: getIdByName(
          defaultFixName(returnNameInArrHi(fixNameHi(hiEl.name)))
        ),
        name: returnFixPriceHi(hiEl, returnNameInArrHi(fixNameHi(hiEl.name))),
        extraPrice: returnExtraPriceHi(fixNameHi(hiEl.name)),
        stockPrice: returnStockPriceHi(fixNameHi(hiEl.name)),
        provider: "Hi",
      })
    );
  });

  // sunrise.map((sunrise) => {
  //   baseFixsunrise(sunrise) &&
  //     returnStockPricesunrise(fixNamesunrise(sunrise.name));
  //   baseFixsunrise(sunrise) &&
  //     returnExtraPricesunrise(fixNamesunrise(sunrise.name));
  //   if (
  //     sunrise.name &&
  //     typeof sunrise.name === "string" &&
  //     baseFixsunrise(sunrise)
  //   ) {
  //     return (
  //       getIdByName(defaultFixName(fixNamesunrise(sunrise.name)) !== "No match" &&
  //       returnStockPricesunrise(sunrise.name) &&
  //       allPriceArr.push({
  //         id: getIdByName(defaultFixName(
  //           returnNameInArrsunrise(fixNamesunrise(sunrise.name))
  //         ),
  //         name: returnNameInArrsunrise(fixNamesunrise(sunrise.name)),
  //         extraPrice: returnExtraPricesunrise(fixNamesunrise(sunrise.name)),
  //         stockPrice: returnStockPricesunrise(fixNamesunrise(sunrise.name)),
  //         condition: " - от 3шт.",
  //         provider: "sunrise",
  //       })
  //     );
  //   }
  // });

  sunriseData.map((sunrise) => {
    baseFixSunrise(sunrise) &&
      returnStockPriceSunrise(returnFixNameSunrise(sunrise.name));
    if (
      sunrise.name &&
      typeof sunrise.name === "string" &&
      baseFixSunrise(sunrise) &&
      isOpen
    ) {
      return (
        getIdByName(defaultFixName(returnFixNameSunrise(sunrise.name))) !==
          "No match" &&
        returnStockPriceSunrise(sunrise.name) &&
        allPriceArr.push({
          id: getIdByName(
            defaultFixName(
              returnNameInArrSunrise(returnFixNameSunrise(sunrise.name))
            )
          ),
          name: returnNameInArrSunrise(returnFixNameSunrise(sunrise.name)),
          stockPrice: returnStockPriceSunrise(
            returnFixNameSunrise(sunrise.name)
          ),
          provider: "Sunrise",
        })
      );
    }
  });

  allItems.map((miopts) => {
    baseFixMiOpts(miopts) && returnStockPriceMiOpts(fixNameMiOpts(miopts.name));
    baseFixMiOpts(miopts) && returnExtraPriceMiOpts(fixNameMiOpts(miopts.name));
    if (
      miopts.name &&
      typeof miopts.name === "string" &&
      baseFixMiOpts(miopts)
    ) {
      return (
        getIdByName(defaultFixName(fixNameMiOpts(miopts.name))) !==
          "No match" &&
        returnExtraPriceMiOpts(miopts.name) &&
        returnStockPriceMiOpts(fixNameMiOpts(miopts.name)) > 1000 &&
        (returnNameInArrMiOpts(miopts.name).indexOf("GB") !== -1 ||
          returnNameInArrMiOpts(miopts.name).indexOf("TRB") !== -1) &&
        allPriceArr.push({
          id: getIdByName(
            defaultFixName(returnNameInArrMiOpts(fixNameMiOpts(miopts.name)))
          ),
          name: returnNameInArrMiOpts(fixNameMiOpts(miopts.name)),
          extraPrice: returnExtraPriceMiOpts(fixNameMiOpts(miopts.name)),
          stockPrice: returnStockPriceMiOpts(fixNameMiOpts(miopts.name)),
          condition: " - от 3шт.",
          provider: "MiOpts",
        })
      );
    }
  });

  superpriceData.map((superprice) => {
    if (
      superprice.name &&
      typeof superprice.name === "string" &&
      baseFixSuperPrice(superprice)
    ) {
      return (
        getIdByName(defaultFixName(fixNameSuperPrice(superprice.name))) !==
          "No match" &&
        newPrice(superprice.name, superprice.price) &&
        superprice.price &&
        allPriceArr.push({
          id: getIdByName(defaultFixName(fixNameSuperPrice(superprice.name))),
          name: fixNameSuperPrice(superprice.name),
          stockPrice: superprice.price,
          provider: "SuperPrice",
        })
      );
    }
  });

  baseData.map((base) => {
    if (base.name && typeof base.name === "string" && baseFixBase(base)) {
      return (
        getIdByName(defaultFixName(returnFixNameBase(base.name))) !==
          "No match" &&
        base.price &&
        baseFixBase(base) &&
        allPriceArr.push({
          id: getIdByName(defaultFixName(returnFixNameBase(base.name))),
          name: returnFixNameBase(changeFlag(base.name)),
          stockPrice: base.extra,
          provider: "База",
        })
      );
    }
  });

  dataUnimtrn.map((unimtrn) => {
      if (
        unimtrn.name &&
        getIdByName(
          defaultFixName(returnNameInArrUnimtrn(fixNameUnimtrn(unimtrn.name)))
        ) === "No match" &&
        isOpen &&
        baseFix(unimtrn)
      ) {
        allPriceArrNotID.push({
          id: getIdByName(
            defaultFixName(fixNameUnimtrn(unimtrn.name))
          ),
          name: returnNameInArrUnimtrn(fixNameUnimtrn(unimtrn.name)),
          stockPrice: returnStockPriceUnimtrn(fixNameUnimtrn(unimtrn.name)),
          provider: "Метреон",
        });
      }
    });

  hi.map((hiEl) => {
    if (hiEl.name && typeof hiEl.name === "string" && baseFixHi(hiEl)) {
      return (
        baseFixHi(hiEl) &&
        getIdByName(defaultFixName(returnNameInArrHi(fixNameHi(hiEl.name)))) ===
          "No match" &&
        allPriceArrNotID.push({
          id: getIdByName(
            defaultFixName(returnNameInArrHi(fixNameHi(hiEl.name)))
          ),
          name: returnNameInArrHi(fixNameHi(hiEl.name)),
          extraPrice: returnStockPriceHi(fixNameHi(hiEl.name)),
          stockPrice: returnStockPriceHi(fixNameHi(hiEl.name)),
          provider: "Hi",
        })
      );
    }
  });

  // sunrise.map((sunrise) => {
  //   baseFixsunrise(sunrise) &&
  //     returnStockPricesunrise(fixNamesunrise(sunrise.name));
  //   baseFixsunrise(sunrise) &&
  //     returnExtraPricesunrise(fixNamesunrise(sunrise.name));
  //   if (
  //     sunrise.name &&
  //     typeof sunrise.name === "string" &&
  //     baseFixsunrise(sunrise)
  //   ) {
  //     return (
  //       getIdByName(defaultFixName(fixNamesunrise(sunrise.name)) === "No match" &&
  //       returnStockPricesunrise(sunrise.name) &&
  //       allPriceArrNotID.push({
  //         id: getIdByName(defaultFixName(
  //           returnNameInArrsunrise(fixNamesunrise(sunrise.name))
  //         ),
  //         name: returnNameInArrsunrise(fixNamesunrise(sunrise.name)),
  //         extraPrice: returnExtraPricesunrise(fixNamesunrise(sunrise.name)),
  //         stockPrice: returnStockPricesunrise(fixNamesunrise(sunrise.name)),
  //         condition: " - от 3шт.",
  //         provider: "sunrise",
  //       })
  //     );
  //   }
  // });

  // allItems.map((miopts) => {
  //   baseFixMiOpts(miopts) && returnStockPriceMiOpts(fixNameMiOpts(miopts.name));
  //   baseFixMiOpts(miopts) && returnExtraPriceMiOpts(fixNameMiOpts(miopts.name));
  //   if (
  //     miopts.name &&
  //     typeof miopts.name === "string" &&
  //     baseFixMiOpts(miopts)
  //   ) {
  //     return (
  //       getIdByName(defaultFixName(fixNameMiOpts(miopts.name)) === "No match" &&
  //       returnExtraPriceMiOpts(miopts.name) &&
  //       returnStockPriceMiOpts(miopts.name) &&
  //       allPriceArrNotID.push({
  //         id: getIdByName(defaultFixName(
  //           returnNameInArrMiOpts(fixNameMiOpts(miopts.name))
  //         ),
  //         name: returnNameInArrMiOpts(fixNameMiOpts(miopts.name)),
  //         extraPrice: returnExtraPriceMiOpts(fixNameMiOpts(miopts.name)),
  //         stockPrice: returnStockPriceMiOpts(fixNameMiOpts(miopts.name)),
  //         condition: " - от 3шт.",
  //         provider: "MiOpts",
  //       })
  //     );
  //   }
  // });

  superpriceData.map((superprice) => {
    if (
      superprice.name &&
      typeof superprice.name === "string" &&
      baseFixSuperPrice(superprice)
    ) {
      return (
        getIdByName(defaultFixName(fixNameSuperPrice(superprice.name))) ===
          "No match" &&
        newPrice(superprice.name, superprice.price) &&
        superprice.price &&
        allPriceArrNotID.push({
          id: getIdByName(defaultFixName(fixNameSuperPrice(superprice.name))),
          name: fixNameSuperPrice(superprice.name),
          stockPrice: superprice.price,
          provider: "SuperPrice",
        })
      );
    }
  });

  baseData.map((base) => {
    if (base.name && typeof base.name === "string" && baseFixBase(base)) {
      return (
        getIdByName(defaultFixName(returnFixNameBase(base.name))) ===
          "No match" &&
        base.price &&
        baseFixBase(base) &&
        allPriceArrNotID.push({
          id: getIdByName(defaultFixName(returnFixNameBase(base.name))),
          name: returnFixNameBase(changeFlag(base.name)),
          stockPrice: base.extra,
          provider: "База",
        })
      );
    }
  });

  garminData.map((garminEl) => {
    return (
      baseFixGarmin(garminEl) &&
      /^[a-zA-Z]/.test(garminEl.name) &&
      garminArr.push({
        id: getIdByName(
          defaultFixName(returnNameInArrMihonor(fixNameMihonor(garminEl.name)))
        ),
        name: returnNameInArrMihonor(fixNameMihonor(garminEl.name)),
        extraPrice: returnExtraPriceMihonor(fixNameMihonor(garminEl.name)),
        stockPrice: returnStockPriceMihonor(fixNameMihonor(garminEl.name)),
        provider: "Garmin",
      })
    );
  });

  return (
    <div className={style.wrapper}>
      <div className={style.flexbox}>
        <div className={style.wrapper_control}>
          <div>
            <div className={style.row}>
              <div>
                <div className={style.input_group}>
                  <div className={style.custom_file}>
                    <label
                      for="inputGroupFile"
                      className={style.custom_file_upload}
                    >
                      Select File...
                    </label>
                    <input
                      type="file"
                      name="file"
                      className={style.custom_file_input}
                      id="inputGroupFile"
                      required
                      onChange={handleImport}
                      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!dataUnimtrn && <img className={style.preloader} src={preloader} />}
      <div className={style.wrapper_cat}>
        
        <Dyson
          double={allPriceArr}
          dataUnimtrn={dataUnimtrn}
          sunriseData={sunriseData}
        />
        <GarminGoProDji
          double={allPriceArr}
          superprice={superpriceData}
          dataUnimtrn={dataUnimtrn}
          dataGarmin={garminArr}
        />
        <NoName
          double={allPriceArr}
          dataUnimtrn={dataUnimtrn}
          sunrise={sunriseData}
        />
        <GoogleSonyAsusLenovo
          double={allPriceArr}
          dataUnimtrn={dataUnimtrn}
          superprice={superpriceData}
        />
        <OnePlusZTENothingHonor
          double={allPriceArr}
          dataUnimtrn={dataUnimtrn}
        />
        <GameConsoles double={allPriceArr} />
        <Samsung double={allPriceArr} />
        <Xiaomi double={allPriceArr} />
        <Apple double={allPriceArr} dataUnimtrn={dataUnimtrn} hi={hiArr} />
        <ProductNotID allPriceArr={allPriceArrNotID} />
      </div>
    </div>
  );
};

export default IndexPriceForOrderDekstop;
