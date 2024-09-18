import React, { useState } from "react";
import { read, utils, writeFile } from "xlsx";
import style from "./indexPicrFromBase.module.css";
import Apple from "./Apple";
import NewProduct from "./NewProduct";
import OtherBrands from "./OtherBrands";
import Samsung from "./Samsung";
import Used from "./Used";
import XiaomiYandexJBL from "./XiaomiYandexJBL";

const IndexFromBase = () => {
  const [fullList, setFullList] = useState([]);

  const handleImport = ($event) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setFullList(rows);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleExport = () => {
    const headings = [["Товар"]];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, fullList, { origin: "A2", skipHeader: true });
    utils.book_append_sheet(wb, ws, "Report");
    writeFile(wb, "Movie Report.xlsx");
  };

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
                      onChange={handleImport}
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
