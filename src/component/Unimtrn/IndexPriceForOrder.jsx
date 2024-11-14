import { useState } from "react";
import {
  baseFix,
  baseFixBase,
  baseFixHi,
  baseFixMiHonor,
  baseFixMiOpts,
  baseFixSuperPrice,
} from "../../helpers/baseFix";
import { returnFixPrice } from "../../helpers/fixPrice";
import { newPrice } from "../../helpers/newPrice";
import { returnIDApple } from "../../helpers/returnIDApple";
import {
  fixNameHi,
  returnExtraPriceHi,
  returnNameInArrHi,
  returnStockPriceHi,
} from "../Provider/Hi/helpers/helpers";
import { returnApple } from "../Provider/Unimtrn/Apple/apple";
import { returnDyson } from "../Provider/Unimtrn/Dyson/dyson";
import { returnGameConsole } from "../Provider/Unimtrn/GameConsole/gameConsole";
import { returnOtherProduct } from "../Provider/Unimtrn/OtherProduct/otherProduct";
import { returnSamsung } from "../Provider/Unimtrn/Samsung/samsung";
import { returnXiaomi } from "../Provider/Unimtrn/Xiaomi/xiaomi";
import { fixNameUnimtrn } from "../Provider/Unimtrn/helpers/helpers";
import Apple from "./Apple";
import Dyson from "./Dyson";
import GoogleSonyAsusLenovo from "./GoogleSonyAsusLenovo";
import style from "./indexPicrForOrder.module.css";
import GarminGoProDji from "./GarminGoproDji";
import NoName from "./NoName";
import OnePlusZTENothingHonor from "./OnePlusZTENothingHonor";
import GameConsoles from "./GameConsoles";
import Samsung from "./Samsung";
import Xiaomi from "./Xiaomi";
import {
  fixNameMihonor,
  returnExtraPriceMihonor,
  returnNameInArrMihonor,
  returnStockPriceMihonor,
} from "../Provider/MiHonor/helpers/helpers";
import {
  fixNameMiOpts,
  returnExtraPriceMiOpts,
  returnNameInArrMiOpts,
  returnStockPriceMiOpts,
} from "../Provider/MiOpts/helpers/helpers";
import { fixNameSuperPrice } from "../Provider/SuperPrice/helpers/helpers";
import { returnFixNameBase } from "../Provider/Base/helpers/helpers";
import { changeFlag, returnFixPriceHi } from "../PriceFromBase/helpers/fixFlags";

const IndexPriceForOrder = ({
  dataUnimtrn,
  hi,
  handleImport,
  mihonorData,
  mioptsData,
  superpriceData,
  baseData
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const allPriceArr = [];
  const allPriceArrNotID = [];

  dataUnimtrn.map((unimtrnEl) => {
    if (
      unimtrnEl.name &&
      returnIDApple(returnFixPrice(unimtrnEl, fixNameUnimtrn(unimtrnEl))) !==
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
        id: returnIDApple(returnFixPrice(unimtrnEl, fixNameUnimtrn(unimtrnEl))),
        name: returnFixPrice(unimtrnEl, fixNameUnimtrn(unimtrnEl)),
        extraPrice: newPrice(unimtrnEl.name, unimtrnEl.price),
        stockPrice: unimtrnEl.price,
        provider: "Unimtrn",
      });
    }
  });

  hi.map((hiEl) => {
    if (hiEl.name && typeof hiEl.name === "string" && baseFixHi(hiEl)) {
      return (
        returnIDApple(fixNameHi(hiEl.name)) !== "No match" &&
        returnExtraPriceHi(hiEl.name) &&
        returnStockPriceHi(hiEl.name) &&
        allPriceArr.push({
          id: returnIDApple(fixNameHi(hiEl.name)),
          name: returnNameInArrHi(fixNameHi(hiEl.name)),
          extraPrice: returnExtraPriceHi(hiEl.name),
          stockPrice: returnStockPriceHi(hiEl.name),
          provider: "Hi",
        })
      );
    }
  });

  mihonorData.map((mihonor) => {
    baseFixMiHonor(mihonor) &&
      returnStockPriceMihonor(fixNameMihonor(mihonor.name));
    baseFixMiHonor(mihonor) &&
      returnExtraPriceMihonor(fixNameMihonor(mihonor.name));
    if (
      mihonor.name &&
      typeof mihonor.name === "string" &&
      baseFixMiHonor(mihonor)
    ) {
      return (
        returnIDApple(fixNameMihonor(mihonor.name)) !== "No match" &&
        returnStockPriceMihonor(mihonor.name) &&
        allPriceArr.push({
          id: returnIDApple(
            returnNameInArrMihonor(fixNameMihonor(mihonor.name))
          ),
          name: returnNameInArrMihonor(fixNameMihonor(mihonor.name)),
          extraPrice: returnExtraPriceMihonor(fixNameMihonor(mihonor.name)),
          stockPrice: returnStockPriceMihonor(fixNameMihonor(mihonor.name)),
          condition: " - от 3шт.",
          provider: "MiHonor",
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
    )
     {
      return (
        returnIDApple(fixNameMiOpts(miopts.name)) !== 'No match' &&
        returnExtraPriceMiOpts(miopts.name) &&
        returnStockPriceMiOpts(miopts.name) &&
        allPriceArr.push({
          id: returnIDApple(returnNameInArrMiOpts(fixNameMiOpts(miopts.name))),
          name: returnNameInArrMiOpts(fixNameMiOpts(miopts.name)),
          extraPrice: returnExtraPriceMiOpts(fixNameMiOpts(miopts.name)),
          stockPrice: returnStockPriceMiOpts(fixNameMiOpts(miopts.name)),
          condition: ' - от 3шт.',
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
        returnIDApple(fixNameSuperPrice(superprice.name)) !== "No match" &&
        newPrice(superprice.name, superprice.price) &&
        superprice.price &&
        allPriceArr.push({
          id: returnIDApple(fixNameSuperPrice(superprice.name)),
          name: fixNameSuperPrice(superprice.name),
          stockPrice: superprice.price,
          provider: 'SuperPrice'
        })
      );
    }
  });

  baseData.map((base) => {
    if (
      base.name &&
      typeof base.name === "string" &&
      baseFixBase(base)
    ) {
      return (
        returnIDApple(returnFixNameBase(base.name)) !== "No match" &&
        base.price &&
        baseFixBase(base) &&
        allPriceArr.push({
          id: returnIDApple(returnFixNameBase(base.name)),
          name: returnFixNameBase(changeFlag(base.name)),
          stockPrice: base.extra,
          provider: "База",
        })
      );
    }
  });

  console.log(allPriceArr.map((pr) => {
    return pr.provider === "База"
  }));
  
  

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
        <Dyson double={allPriceArr} />
        <GarminGoProDji double={allPriceArr} />
        <NoName double={allPriceArr} />
        <GoogleSonyAsusLenovo double={allPriceArr} />
        <OnePlusZTENothingHonor double={allPriceArr} />
        <GameConsoles double={allPriceArr} />
        <Samsung double={allPriceArr} />
        <Xiaomi double={allPriceArr} />
        <Apple double={allPriceArr} />
      </div>
    </div>
  );
};

export default IndexPriceForOrder;
