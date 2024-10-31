import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { read, utils } from "xlsx";
import "./App.css";
import Header from "./component/Header/Header";
import IndexFromBase from "./component/PriceFromBase/IndexPriceFromBase";
import IndexPriceForOrder from "./component/Unimtrn/IndexPriceForOrder";
import icon from "./source/icon/icon.png";

const App = () => {
  const [dataUnimtrn, setDataUnimtrn] = useState([]);
  const [dataHi, setDataHi] = useState([]);
  const [dataMihonor, setDataMihonor] = useState([]);
  const [dataMiOpts, setDataMiOpts] = useState([]);
  const [dataSuperprice, setDataSuperprice] = useState([]);

  const [fullList, setFullList] = useState([]);

  const unimtrn = [];
  const hi = [];
  const mihonor = [];
  const miopts = [];
  const superprice = [];

  dataUnimtrn.map((unimtrnEl) => {
    unimtrnEl.Товар &&
      unimtrn.push({
        name: unimtrnEl.Товар,
        price: unimtrnEl.Стоимость || unimtrnEl.Cтоимость,
      });
  });

  dataHi.map((hiEl) => {
    hiEl.Hi &&
      typeof hiEl.Hi === "string" &&
      hiEl.Hi.length > 3 &&
      hi.push({ name: hiEl.Hi });
  });

  dataMihonor.map((mihonorEl) => {
    mihonorEl.MiHonor &&
    mihonorEl.MiHonor.length > 3 &&
      typeof mihonorEl.MiHonor === "string" &&
      mihonor.push({ name: mihonorEl.MiHonor });
  });

  dataMiOpts.map((mioptsEl) => {
    mioptsEl.MiOpts &&
    mioptsEl.MiOpts.length > 3 &&
      typeof mioptsEl.MiOpts === "string" &&
      miopts.push({ name: mioptsEl.MiOpts });
  });

  dataSuperprice.map((superpriceEl) => {
    superpriceEl.Название &&
    superpriceEl.Название.length > 3 &&
      typeof superpriceEl.Название === "string" &&
      superprice.push({ name: superpriceEl.Название, price: superpriceEl.Цена });
  });
  
  console.log(superprice);
  

  const handleImportForOrder = ($event) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const unimtrnSheet = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setDataUnimtrn(unimtrnSheet);
          const hiSheet = utils.sheet_to_json(wb.Sheets[sheets[1]]);
          setDataHi(hiSheet);
          const mihonorSheet = utils.sheet_to_json(wb.Sheets[sheets[2]]);
          setDataMihonor(mihonorSheet);
          const mioptsSheet = utils.sheet_to_json(wb.Sheets[sheets[3]]);
          setDataMiOpts(mioptsSheet);
          const superpriceSheet = utils.sheet_to_json(wb.Sheets[sheets[4]]);
          setDataSuperprice(superpriceSheet);
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
          <Route
            path="/"
            element={
              <IndexPriceForOrder
                dataUnimtrn={unimtrn}
                hi={hi}
                el={dataHi}
                mihonorData={mihonor}
                mioptsData={miopts}
                superpriceData={superprice}
                handleImport={handleImportForOrder}
              />
            }
          />
          <Route
            path="/unimtrn"
            element={
              <IndexPriceForOrder
                dataUnimtrn={unimtrn}
                hi={hi}
                el={dataHi}
                mihonorData={mihonor}
                mioptsData={miopts}
                superpriceData={superprice}
                handleImport={handleImportForOrder}
              />
            }
          />
          <Route
            path="/price-for-order"
            element={
              <IndexPriceForOrder
                dataUnimtrn={unimtrn}
                hi={hi}
                el={dataHi}
                mihonorData={mihonor}
                mioptsData={miopts}
                superpriceData={superprice}
                handleImport={handleImportForOrder}
              />
            }
          />
          <Route
            path="/price-from-base"
            element={
              <IndexFromBase
                el={dataUnimtrn}
                handleImportFromBase={handleImportFromBase}
                fullList={fullList}
              />
            }
          />
          {/* <Route
            path="/id-creater"
            element={
              <IDCreater
              hi={hi}
              el={dataUnimtrn}
              handleImport={handleImportForOrder}
              />
            }
          /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
