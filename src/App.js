import React, { useState } from "react";
import { read, utils, writeFile } from "xlsx";
import "./App.css";
import AGMBeatsFujifilm from "./component/AGMBeatsFujifilm";
import AcerMSIMotorolaNothingPhone from "./component/AcerMSIMotorolaNothingPhone";
import Apple from "./component/Apple";
import Dyson from "./component/Dyson";
import GameConsoles from "./component/GameConsoles";
import GarminGoProDji from "./component/GarminGoproDji";
import GoogleSonyAsusLenovo from "./component/GoogleSonyAsusLenovo";
import HuaweiInfinixMarshallOppo from "./component/HuaweiInfinixMarshallOppo";
import OnePlusZTETecno from "./component/OnePlusZTETecno";
import OtherProduct from "./component/OtherProduct";
import Samsung from "./component/Samsung";
import Xiaomi from "./component/Xiaomi";
import icon from "./source/icon/icon.png";

const App = () => {
  const [el, setEl] = useState([]);

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
          setEl(rows);
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
    utils.sheet_add_json(ws, el, { origin: "A2", skipHeader: true });
    utils.book_append_sheet(wb, ws, "Report");
    writeFile(wb, "Movie Report.xlsx");
  };

  return (
    <div className="App">
      <div className="flexbox">
        <img className="img" src={icon} alt="Not found" />
        <div className="wrapper_control">
          <div className="col-sm-6 offset-3">
            <div className="row">
              <div className="col-md-6">
                <div className="input-group">
                  <div className="custom-file">
                    <label for="inputGroupFile" class="custom-file-upload">
                      Custom Upload
                    </label>
                    <input
                      type="file"
                      name="file"
                      className="custom-file-input"
                      id="inputGroupFile"
                      required
                      onChange={handleImport}
                      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper_cat">
        <Apple el={el} />
        <Dyson el={el} />
        <Samsung el={el} />
        <Xiaomi el={el} />
        <GameConsoles el={el} />
        <GarminGoProDji el={el} />
        <GoogleSonyAsusLenovo el={el} />
        <OnePlusZTETecno el={el} />
        <AcerMSIMotorolaNothingPhone el={el} />
        <AGMBeatsFujifilm el={el} />
        <HuaweiInfinixMarshallOppo el={el} />
        <OtherProduct el={el} />
      </div>
    </div>
  );
};

export default App;
