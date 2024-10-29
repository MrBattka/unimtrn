import React, { useState } from "react";
import { returnIDApple } from "../../../helpers/returnIDApple";
import BasicTable from "../../CreateTable/CreateTable";
import { returnAppleHi } from "./Apple/apple";
import { returnDysonHi } from "./Dyson/dyson";
import { returnGarminHi } from "./Garmin/garmin";
import { returnGoogleHi } from "./Google/google";
import {
  fixNameHi,
  returnExtraPriceHi,
  returnNameInArrHi,
  returnStockPriceHi,
} from "./helpers/helpers";
import { returnSamsungHi } from "./Samsung/samsung";
import style from "./styles.module.css";
import { returnXiaomiHi } from "./Xiaomi/xiaomi";
import { baseFixHi } from "../../../helpers/baseFix";


const IndexHi = ({ hi }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resultArr = [];

  hi.map((hiEl) => {
    if (
      hiEl.name &&
      typeof hiEl.name === "string" &&
      baseFixHi(hiEl) &&
      isOpen 
    ) {
      return (
        returnIDApple(fixNameHi(hiEl.name)) !== "No match" &&
        returnExtraPriceHi(hiEl.name) &&
        returnStockPriceHi(hiEl.name) &&
        resultArr.push({
          id: returnIDApple(fixNameHi(hiEl.name)),
          name: returnNameInArrHi(fixNameHi(hiEl.name)),
          extraPrice: returnExtraPriceHi(hiEl.name),
          stockPrice: returnStockPriceHi(hiEl.name),
          provider: "Hi",
        })
      );
    }})
  

  return (
    <div>
      <div>
        {hi.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Hi (Сема) ▲" : "Hi (Сема) ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div className={style.row}>
          <BasicTable resultArr={resultArr} />
        </div>
      )}
    </div>
  );
};

export default IndexHi;
