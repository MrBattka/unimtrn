import React, { useState } from "react";
import TableAllPrice from "../CreateAllPriceTable/TableAllPrice";
import { returnAppleHi } from "../Hi/Apple/apple";
import { returnDysonHi } from "../Hi/Dyson/dyson";
import { returnGarminHi } from "../Hi/Garmin/garmin";
import { returnGoogleHi } from "../Hi/Google/google";
import {
  fixNameHi,
  returnExtraPriceHi,
  returnNameInArrHi,
  returnStockPriceHi,
} from "../Hi/helpers/helpers";
import { returnSamsungHi } from "../Hi/Samsung/samsung";
import style from "../Hi/styles.module.css";
import { returnXiaomiHi } from "../Hi/Xiaomi/xiaomi";
import { returnFixPrice } from "../../../helpers/fixPrice";
import { fixNameUnimtrn } from "../Unimtrn/helpers/helpers";
import { baseFix, baseFixHi } from "../../../helpers/baseFix";
import { returnApple } from "../Unimtrn/Apple/apple";
import { returnDyson } from "../Unimtrn/Dyson/dyson";
import { returnSamsung } from "../Unimtrn/Samsung/samsung";
import { returnXiaomi } from "../Unimtrn/Xiaomi/xiaomi";
import { returnGameConsole } from "../Unimtrn/GameConsole/gameConsole";
import { returnOtherProduct } from "../Unimtrn/OtherProduct/otherProduct";
import { newPrice } from "../../../helpers/newPrice";
import { returnIDApple } from "../../../helpers/returnIDApple";

const AllPriceWithID = ({ dataUnimtrn, dataHi }) => {
  const [isOpen, setIsOpen] = useState(false);
  const allPriceArr = [];

  dataUnimtrn.map((unimtrn) => {
    if (
      unimtrn.Товар &&
      returnIDApple(returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn))) !==
        "No match" &&
      isOpen &&
      baseFix(unimtrn) &&
      (returnApple(unimtrn) ||
        returnDyson(unimtrn) ||
        returnSamsung(unimtrn) ||
        returnXiaomi(unimtrn) ||
        returnGameConsole(unimtrn) ||
        returnOtherProduct(unimtrn))
    ) {
      allPriceArr.push({
        id: returnIDApple(returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn))),
        names: returnFixPrice(unimtrn, fixNameUnimtrn(unimtrn)),
        extraPrice: newPrice(
          unimtrn.Товар,
          unimtrn.Стоимость || unimtrn.Cтоимость
        ),
        stockPrice: unimtrn.Стоимость || unimtrn.Cтоимость,
      });
    }
  });

  dataHi.map((hiEl) => {
    if (
      hiEl.name &&
      typeof hiEl.name === "string" &&
      baseFixHi(hiEl) &&
      isOpen &&
      (returnAppleHi(hiEl.name) ||
        returnSamsungHi(hiEl.name) ||
        returnXiaomiHi(hiEl.name) ||
        returnGoogleHi(hiEl.name) ||
        returnGarminHi(hiEl.name) ||
        returnDysonHi(hiEl.name))
    ) {
      return (
        returnIDApple(fixNameHi(hiEl.name)) !== "No match" &&
        returnExtraPriceHi(hiEl.name) &&
        returnStockPriceHi(hiEl.name) &&
        allPriceArr.push({
          id: returnIDApple(fixNameHi(hiEl.name)),
          names: returnNameInArrHi(fixNameHi(hiEl.name)),
          extraPrice: returnExtraPriceHi(hiEl.name),
          stockPrice: returnStockPriceHi(hiEl.name),
        })
      );
    }
  });

  allPriceArr.sort(function (a, b) {
    return (a.name[4] - b.name[4])
  });

  console.log(allPriceArr);
  

  return (
    <div>
      <div>
        {(dataUnimtrn?.length > 2 || dataHi?.length > 2) && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "All Price ▲" : "All Price ▼"}
          </span>
        )}
      </div>
      {isOpen && <TableAllPrice allPriceArr={allPriceArr} />}
    </div>
  );
};

export default AllPriceWithID;
