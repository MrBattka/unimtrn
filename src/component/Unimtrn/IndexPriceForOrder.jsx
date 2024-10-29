import { useState } from "react";
import { baseFix, baseFixHi, baseFixMiHonor } from "../../helpers/baseFix";
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
import { fixNameMihonor, returnExtraPriceMihonor, returnNameInArrMihonor, returnStockPriceMihonor } from "../Provider/MiHonor/helpers/helpers";

const IndexPriceForOrder = ({ dataUnimtrn, hi, handleImport, mihonorData }) => {
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
        extraPrice: unimtrnEl.price,
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
    
    baseFixMiHonor(mihonor) && returnStockPriceMihonor(fixNameMihonor(mihonor.name));
    baseFixMiHonor(mihonor) && returnExtraPriceMihonor(fixNameMihonor(mihonor.name));
    if (
      mihonor.name &&
      typeof mihonor.name === "string" &&
      baseFixMiHonor(mihonor) 
    )
     {
      return (
        returnIDApple(fixNameMihonor(mihonor.name)) !== 'No match' &&
        returnStockPriceMihonor(mihonor.name) &&
        allPriceArr.push({
          id: returnIDApple(returnNameInArrMihonor(fixNameMihonor(mihonor.name))),
          name: returnNameInArrMihonor(fixNameMihonor(mihonor.name)),
          extraPrice: returnExtraPriceMihonor(fixNameMihonor(mihonor.name)),
          stockPrice: returnStockPriceMihonor(fixNameMihonor(mihonor.name)),
          provider: "MiHonor",
        })
      );
    }
  });

  const str = 'i am strong'

  console.log(str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));
  

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
