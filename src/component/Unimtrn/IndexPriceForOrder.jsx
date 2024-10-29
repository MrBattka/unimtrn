import { useState } from "react";
import { baseFix, baseFixHi } from "../../helpers/baseFix";
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

const IndexPriceForOrder = ({ dataUnimtrn, hi, handleImport, unimtrn }) => {
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

  

  // const doubleArr = allPriceArr.filter(
  //   (obj1, i, arr) =>
  //     arr.findIndex(
  //       (obj2) =>
  //         ["id"].every((key) => obj2[key] === obj1[key]) &&
  //         ["stockPrice"].every((key) => obj2[key] <= obj1[key])
  //     ) === i
  // );

  

  // allPriceArr.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

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
