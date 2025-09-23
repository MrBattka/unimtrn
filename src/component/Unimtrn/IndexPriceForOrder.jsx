import { useState } from "react";
import {
  baseFix,
  baseFixBase,
  baseFixHi,
  baseFixSunrise,
  baseFixMiOpts,
  baseFixSuperPrice,
} from "../../helpers/baseFix";
import { returnFixPrice } from "../../helpers/fixPrice";
import { newPrice } from "../../helpers/newPrice";
import { returnIDSamsung } from "../../helpers/returnIDSamsung";
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
import { fixNameUnimtrn } from "../Provider/Unimtrn/helpers/helpers";
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

import { changeFlag } from "../PriceFromBase/helpers/fixFlags";
import ProductNotID from "./ProductNotID";
import { returnFixPriceHi } from "../../helpers/fixFlags";
import { returnFixNameSunrise, returnNameInArrSunrise, returnStockPriceSunrise } from "../Provider/Sunrise/helpers/helpers";

const IndexPriceForOrder = ({
  dataUnimtrn,
  hi,
  handleImport,
  sunriseData,
  mioptsData,
  superpriceData,
  baseData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const allPriceArr = [];
  const allPriceArrNotID = [];

  dataUnimtrn.map((unimtrnEl) => {
    if (
      unimtrnEl.name &&
      returnIDSamsung(returnFixPrice(unimtrnEl, fixNameUnimtrn(unimtrnEl))) !==
        "No match" &&
      baseFix(unimtrnEl) &&
      (returnApple(unimtrnEl) ||
        returnDyson(unimtrnEl) ||
        returnSamsung(unimtrnEl) ||
        returnXiaomi(unimtrnEl) ||
        returnGameConsole(unimtrnEl) ||
        returnOtherProduct(unimtrnEl))
    ) {
      allPriceArr.push({
        id: returnIDSamsung(
          returnFixPrice(unimtrnEl, fixNameUnimtrn(unimtrnEl))
        ),
        name: fixNameUnimtrn(unimtrnEl),
        extraPrice: newPrice(unimtrnEl.name, unimtrnEl.price),
        stockPrice: unimtrnEl.price,
        provider: "Unimtrn",
      });
    }
  });

  hi.map((hiEl) => {
    return (
      baseFixHi(hiEl) &&
      returnIDSamsung(returnNameInArrHi(fixNameHi(hiEl.name))) !== "No match" &&
      allPriceArr.push({
        id: returnIDSamsung(returnNameInArrHi(fixNameHi(hiEl.name))),
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
  //       returnIDSamsung(fixNamesunrise(sunrise.name)) !== "No match" &&
  //       returnStockPricesunrise(sunrise.name) &&
  //       allPriceArr.push({
  //         id: returnIDSamsung(
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
        returnIDSamsung(returnFixNameSunrise(sunrise.name)) !== "No match" &&
        returnStockPriceSunrise(sunrise.name) &&
        allPriceArr.push({
          id: returnIDSamsung(
            returnNameInArrSunrise(returnFixNameSunrise(sunrise.name))
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

  mioptsData.map((miopts) => {
    baseFixMiOpts(miopts) && returnStockPriceMiOpts(fixNameMiOpts(miopts.name));
    baseFixMiOpts(miopts) && returnExtraPriceMiOpts(fixNameMiOpts(miopts.name));
    if (
      miopts.name &&
      typeof miopts.name === "string" &&
      baseFixMiOpts(miopts)
    ) {
      return (
        returnIDSamsung(fixNameMiOpts(miopts.name)) !== "No match" &&
        returnExtraPriceMiOpts(miopts.name) &&
        returnStockPriceMiOpts(miopts.name) &&
        returnStockPriceMiOpts(fixNameMiOpts(miopts.name)) > 1000 &&
        allPriceArr.push({
          id: returnIDSamsung(
            returnNameInArrMiOpts(fixNameMiOpts(miopts.name))
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
        returnIDSamsung(fixNameSuperPrice(superprice.name)) !== "No match" &&
        newPrice(superprice.name, superprice.price) &&
        superprice.price &&
        allPriceArr.push({
          id: returnIDSamsung(fixNameSuperPrice(superprice.name)),
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
        returnIDSamsung(returnFixNameBase(base.name)) !== "No match" &&
        base.price &&
        baseFixBase(base) &&
        allPriceArr.push({
          id: returnIDSamsung(returnFixNameBase(base.name)),
          name: returnFixNameBase(changeFlag(base.name)),
          stockPrice: base.extra,
          provider: "База",
        })
      );
    }
  });

  dataUnimtrn.map((unimtrnEl) => {
    if (
      unimtrnEl.name &&
      returnIDSamsung(returnFixPrice(unimtrnEl, fixNameUnimtrn(unimtrnEl))) ===
        "No match" &&
      baseFix(unimtrnEl) &&
      (returnApple(unimtrnEl) ||
        returnDyson(unimtrnEl) ||
        returnSamsung(unimtrnEl) ||
        returnXiaomi(unimtrnEl) ||
        returnGameConsole(unimtrnEl) ||
        returnOtherProduct(unimtrnEl))
    ) {
      allPriceArrNotID.push({
        id: returnIDSamsung(
          returnFixPrice(unimtrnEl, fixNameUnimtrn(unimtrnEl))
        ),
        name: fixNameUnimtrn(unimtrnEl),
        extraPrice: newPrice(unimtrnEl.name, unimtrnEl.price),
        stockPrice: unimtrnEl.price,
        provider: "Unimtrn",
      });
    }
  });

  hi.map((hiEl) => {
    if (hiEl.name && typeof hiEl.name === "string" && baseFixHi(hiEl)) {
      return (
        baseFixHi(hiEl) &&
        returnIDSamsung(returnNameInArrHi(fixNameHi(hiEl.name))) ===
          "No match" &&
        allPriceArrNotID.push({
          id: returnIDSamsung(returnNameInArrHi(fixNameHi(hiEl.name))),
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
  //       returnIDSamsung(fixNamesunrise(sunrise.name)) === "No match" &&
  //       returnStockPricesunrise(sunrise.name) &&
  //       allPriceArrNotID.push({
  //         id: returnIDSamsung(
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

  mioptsData.map((miopts) => {
    baseFixMiOpts(miopts) && returnStockPriceMiOpts(fixNameMiOpts(miopts.name));
    baseFixMiOpts(miopts) && returnExtraPriceMiOpts(fixNameMiOpts(miopts.name));
    if (
      miopts.name &&
      typeof miopts.name === "string" &&
      baseFixMiOpts(miopts)
    ) {
      return (
        returnIDSamsung(fixNameMiOpts(miopts.name)) === "No match" &&
        returnExtraPriceMiOpts(miopts.name) &&
        returnStockPriceMiOpts(miopts.name) &&
        allPriceArrNotID.push({
          id: returnIDSamsung(
            returnNameInArrMiOpts(fixNameMiOpts(miopts.name))
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
        returnIDSamsung(fixNameSuperPrice(superprice.name)) === "No match" &&
        newPrice(superprice.name, superprice.price) &&
        superprice.price &&
        allPriceArrNotID.push({
          id: returnIDSamsung(fixNameSuperPrice(superprice.name)),
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
        returnIDSamsung(returnFixNameBase(base.name)) === "No match" &&
        base.price &&
        baseFixBase(base) &&
        allPriceArrNotID.push({
          id: returnIDSamsung(returnFixNameBase(base.name)),
          name: returnFixNameBase(changeFlag(base.name)),
          stockPrice: base.extra,
          provider: "База",
        })
      );
    }
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

      <div className={style.wrapper_cat}>
        {/* {hi.map((hiel) => (
          <div>
            {baseFixHi(hiel) && returnIDSamsung(returnNameInArrHi(hiel.name))}
            
          </div>
        ))} */}
        <Dyson double={allPriceArr} dataUnimtrn={dataUnimtrn} sunriseData={sunriseData} />
        <GarminGoProDji
          double={allPriceArr}
          superprice={superpriceData}
          dataUnimtrn={dataUnimtrn}
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
        <Apple double={allPriceArr} dataUnimtrn={dataUnimtrn} />
        <ProductNotID allPriceArr={allPriceArrNotID} />
      </div>
    </div>
  );
};

export default IndexPriceForOrder;
