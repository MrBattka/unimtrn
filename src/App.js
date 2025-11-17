import { useState } from "react";
import { read, utils } from "xlsx";
import "./App.css";
import IndexPriceForOrderDekstop from "./component/Unimtrn/IndexPriceForOrderDekstop";
import icon from "./source/icon/icon.png";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const [dataUnimtrn, setDataUnimtrn] = useState([]);
  const [dataHi, setDataHi] = useState([]);
  const [dataSunrise, setDataSunrise] = useState([]);
  const [dataMiOpts, setDataMiOpts] = useState([]);
  const [dataSuperprice, setDataSuperprice] = useState([]);
  const [dataBase, setDataBase] = useState([]);
  const [dataGarmin, setDataGarmin] = useState([]);

  const [fullList, setFullList] = useState([]);

  const unimtrn = [];
  const hi = [];
  const sunrise = [];
  const miopts = [];
  const superprice = [];
  const base = [];
  const garmin = [];

  dataUnimtrn.map((unimtrnEl) => {
    (unimtrnEl.Товар || unimtrnEl.Модификация) &&
      unimtrn.push({
        name: unimtrnEl.Товар || unimtrnEl.Модификация,
        price: unimtrnEl.Стоимость || unimtrnEl.Cтоимость || unimtrnEl.Цена,
      });
  });

  dataHi.map((hiEl) => {
    hiEl.Hi &&
      typeof hiEl.Hi === "string" &&
      hiEl.Hi.length > 3 &&
      hi.push({ name: hiEl.Hi });
  });

  dataSunrise.map((sunriseEl) => {
    sunriseEl.Sunrise &&
      sunriseEl.Sunrise.length > 3 &&
      typeof sunriseEl.Sunrise === "string" &&
      sunrise.push({ name: sunriseEl.Sunrise });
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
      superprice.push({
        name: superpriceEl.Название,
        price: superpriceEl.Цена,
      });
  });

  dataBase.map((baseEl) => {
    baseEl.Наименование &&
      baseEl.Наименование.length > 7 &&
      typeof baseEl.Наименование === "string" &&
      base.push({
        name: baseEl.Наименование,
        price: baseEl.Себестоимость,
        extra: baseEl.Опт,
      });
  });

  dataGarmin.map((garminEl) => {
    garminEl.garmin &&
      garminEl.garmin.length > 3 &&
      typeof garminEl.garmin === "string" &&
      garmin.push({ name: garminEl.garmin });
  });

  const deleteDoubleProduct = base.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => t.place === value.place && t.name === value.name)
  );

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
          const sunriseSheet = utils.sheet_to_json(wb.Sheets[sheets[2]]);
          setDataSunrise(sunriseSheet);
          const mioptsSheet = utils.sheet_to_json(wb.Sheets[sheets[3]]);
          setDataMiOpts(mioptsSheet);
          const superpriceSheet = utils.sheet_to_json(wb.Sheets[sheets[4]]);
          setDataSuperprice(superpriceSheet);
          const baseSheet = utils.sheet_to_json(wb.Sheets[sheets[5]]);
          setDataBase(baseSheet);
          const garminSheet = utils.sheet_to_json(wb.Sheets[sheets[6]]);
          setDataGarmin(garminSheet);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  // const handleImportFromBase = ($event) => {
  //   const files = $event.target.files;
  //   if (files.length) {
  //     const file = files[0];
  //     const reader = new FileReader();
  //     reader.onload = (event) => {
  //       const wb = read(event.target.result);
  //       const sheets = wb.SheetNames;

  //       if (sheets.length) {
  //         const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
  //         setFullList(rows);
  //       }
  //     };
  //     reader.readAsArrayBuffer(file);
  //   }
  // };

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  const isPortrait = useMediaQuery({
    query: "(orientation: portrait)",
  });

  const isRetina = useMediaQuery({
    query: "(max-resolution: 300dpi)",
  });

  return (
    <div className="App">
      {(isDesktop && (
        <div>
          <h2 className="title">
            <span className="title_red">Под</span> заказ
          </h2>
          <img className="imgDesktop" src={icon} alt="Not found" />
          <IndexPriceForOrderDekstop
            dataUnimtrn={unimtrn}
            hi={hi}
            el={dataHi}
            sunriseData={sunrise}
            mioptsData={miopts}
            superpriceData={superprice}
            baseData={deleteDoubleProduct}
            garminData={garmin}
            handleImport={handleImportForOrder}
          />
        </div>
      )) ||
        (isMobile && (
          <div>
            <img className="imgMob" src={icon} alt="Not found" />
            <h2 className="titleMob">
              <span className="title_red">Под</span> заказ
            </h2>
            <div className="wrapperMob">
            <IndexPriceForOrderDekstop
              dataUnimtrn={unimtrn}
              hi={hi}
              el={dataHi}
              sunriseData={sunrise}
              mioptsData={miopts}
              superpriceData={superprice}
              baseData={deleteDoubleProduct}
              garminData={garmin}
              handleImport={handleImportForOrder}
            />
            </div>
          </div>
        ))}
    </div>
  );
};

export default App;
