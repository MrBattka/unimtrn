import React, { useState } from "react";
import { read, utils, writeFile } from "xlsx";
import style from "./indexPicrFromBase.module.css";
import Apple from "./Apple";
import NewProduct from "./NewProduct";
import OtherBrands from "./OtherBrands";
import Samsung from "./Samsung";
import Used from "./Used";
import XiaomiYandexJBL from "./XiaomiYandexJBL";

const IndexFromBase = ({ handleImportFromBase, fullList }) => {
  

  return (
    <div className={style.wrapper}>
      <div className={style.flexbox}>
        <div className={style.wrapper_control}>
          <div>
            <div className={style.row}>
              <div>
                <div className={style.input_group}>
                  <div className={style.custom_file}>
                    <label for="inputGroupFile" className={style.custom_file_upload}>
                      Select File...
                    </label>
                    <input
                      type="file"
                      name="file"
                      className={style.custom_file_input}
                      id="inputGroupFile"
                      required
                      onChange={handleImportFromBase}
                      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.wrapper_cat}>
        <Apple fullList={fullList} />
        <Samsung fullList={fullList} />
        <OtherBrands fullList={fullList} />
        <XiaomiYandexJBL fullList={fullList} />
        <Used fullList={fullList} />
        <NewProduct fullList={fullList} />
      </div>
    </div>
  );
};

export default IndexFromBase;
