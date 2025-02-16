import React, { useState } from "react";
import style from "./styles.module.css";
import { copyTable } from "../../helpers/copy";

const ProductNotID = ({ allPriceArr }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        {allPriceArr.length > 1 && (
          <div>
            <span
              className={style.title
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Not ID ▲" : "Not ID ▼"}
            </span>
          </div>
        )}
      </div>
      {isOpen && (
        <div className={isOpen ? style.open : style.closed}>
          <div className="col-sm-6 offset-3">
            <table className="table">
              <thead>
                <tr>{/* <th scope="col">Товар</th> */}</tr>
              </thead>
              <h4
                className={style.title}
                onClick={() => {
                  copyTable();
                }}
              >
                ❐ Copy
              </h4>
              <tbody>
                {allPriceArr.length ? (
                  allPriceArr.map((el, index) => (
                    <div key={index}>{el.name}{el.stockPrice} - <span className={style.provider}>{el.provider}</span></div>
                  ))
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductNotID;
