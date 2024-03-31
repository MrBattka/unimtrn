import "./App.css";
import Apple from "./component/Apple";
import Dyson from "./component/Dyson";
import React, { useState } from "react";
import { read, utils, writeFile } from "xlsx";
import Samsung from "./component/Samsung";
import Xiaomi from "./component/Xiaomi";
import icon from "./source/icon/icon.png";
import GameConsoles from "./component/GameConsoles";
import GarminGoProDji from "./component/GarminGoproDji";
import GoogleSonyAsus from "./component/GoogleSonyAsus";

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
        <GoogleSonyAsus el={el} />
      </div>
    </div>
  );
};

export default App;
