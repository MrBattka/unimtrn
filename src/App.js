import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { read, utils, writeFile } from "xlsx";
import "./App.css";
import IndexPriceForOrder from "./component/Unimtrn/IndexPriceForOrder";
import icon from "./source/icon/icon.png";
import Header from "./component/Header/Header";
import IndexFromBase from "./component/PriceFromBase/IndexPriceFromBase";

const App = () => {
  const [el, setEl] = useState([]);
  const [fullList, setFullList] = useState([]);

  const handleImportForOrder = ($event) => {
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



  const handleImportFromBase = ($event) => {
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

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <img className="img" src={icon} alt="Not found" />

        {/* Metr */}

        <Routes>
          <Route path="/" element={<IndexPriceForOrder el={el} handleImport={handleImportForOrder} />} />
          <Route path="/unimtrn" element={<IndexPriceForOrder el={el} handleImport={handleImportForOrder} />} />
          <Route path="/price-for-order" element={<IndexPriceForOrder el={el} handleImport={handleImportForOrder} />} />
          <Route path="/price-from-base" element={<IndexFromBase el={el} handleImportFromBase={handleImportFromBase} fullList={fullList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
