import React, { useState } from "react";
import { baseFixHi } from "../../../helpers/baseFix";
import { returnIDApple } from "../../../helpers/returnIDApple";
import BasicTable from "../../CreateTable/CreateTable";
import {
  fixNameHi,
  returnExtraPriceHi,
  returnNameInArrHi,
  returnStockPriceHi,
} from "./helpers/helpers.js";
import style from "./styles.module.css";


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
        returnExtraPriceHi(fixNameHi(hiEl.name)) &&
        returnStockPriceHi(fixNameHi(hiEl.name)) &&
        resultArr.push({
          id: returnIDApple(fixNameHi(hiEl.name)),
          name: returnNameInArrHi(fixNameHi(hiEl.name)),
          extraPrice: returnExtraPriceHi(fixNameHi(hiEl.name)),
          stockPrice: returnStockPriceHi(fixNameHi(hiEl.name)),
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
