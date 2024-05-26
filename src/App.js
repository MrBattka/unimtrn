import React, { useState } from "react";
import { read, utils, writeFile } from "xlsx";
import "./App.css";
import Apple from "./component/Unimtrn/Apple";
import Dyson from "./component/Unimtrn/Dyson";
import GameConsoles from "./component/Unimtrn/GameConsoles";
import GarminGoProDji from "./component/Unimtrn/GarminGoproDji";
import GoogleSonyAsusLenovo from "./component/Unimtrn/GoogleSonyAsusLenovo";
import NoName from "./component/Unimtrn/NoName";
import OnePlusZTENothingHonor from "./component/Unimtrn/OnePlusZTENothingHonor";
import OtherProduct from "./component/Unimtrn/OtherProduct";
import Samsung from "./component/Unimtrn/Samsung";
import Xiaomi from "./component/Unimtrn/Xiaomi";
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
        {/* Metr */}
        <Dyson el={el} />
        <GarminGoProDji el={el} />
        <NoName el={el} />
        <GoogleSonyAsusLenovo el={el} />
        <OnePlusZTENothingHonor el={el} />
        <GameConsoles el={el} />
        <Samsung el={el} />
        <Xiaomi el={el} />
        <Apple el={el} />
        <OtherProduct el={el} />
        {/* Hi */}
        {/* <AppleHi el={el} /> */}
      </div>
    </div>
  );
};

export default App;
