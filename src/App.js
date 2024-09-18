import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { read, utils, writeFile } from "xlsx";
import "./App.css";
import IndexPriceForOrder from "./component/Unimtrn/IndexPriceForOrder";
import icon from "./source/icon/icon.png";
import Header from "./component/Header/Header";

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
    <BrowserRouter>
      <div className="App">
        <Header />

        <img className="img" src={icon} alt="Not found" />

        {/* Metr */}

        <Routes>
          <Route path="/" element={<IndexPriceForOrder el={el} handleImport={handleImport} />} />
          <Route path="/unimtrn" element={<IndexPriceForOrder el={el} handleImport={handleImport} />} />
          <Route path="/price-for-order" element={<IndexPriceForOrder el={el} handleImport={handleImport} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
