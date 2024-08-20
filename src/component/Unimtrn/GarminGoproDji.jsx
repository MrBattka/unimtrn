import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";

const GarminGoProDji = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);

  let gb = /Gb/gi;
  let watchGarmin = /Watch Garmin/gi;
  let wiFi = /wifi/gi;
  let sunglases = /Sunglases/gi;
  let dji = /Dji/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixWatchGarmin = fixGb.replace(watchGarmin, "Garmin");
    const fixSunglases = fixWatchGarmin.replace(sunglases, "Sunglasses");
    const fixDji = fixSunglases.replace(dji, "DJI");
    return fixDji.replace(wiFi, "Wi-Fi");
  };

  return (
    <div>
      <div>
        <div>
          {el.length > 1 && (
            <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
              {isOpen
                ? "Garmin / GoPro / DJI / JBL ▲"
                : "Garmin / GoPro / DJI / JBL ▼"}
            </span>
          )}
        </div>
      </div>
      {isOpen && (
        <div className={style.row}>
          <div className="col-sm-6 offset-3">
            <table className="table">
              <thead>
                <tr>{/* <th scope="col">Товар</th> */}</tr>
              </thead>
              <h4
                onClick={() => {
                  copyTable();
                }}
              >
                ❐ Copy
              </h4>
              <tbody>
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("DJL ") != -1 ||
                          el.Товар.indexOf("DJI ") != -1 ||
                          el.Товар.indexOf("DJi ") != -1 ||
                          el.Товар.indexOf("Dji ") != -1 ||
                          el.Товар.indexOf("Garmin") != -1 ||
                          el.Товар.indexOf("GoPro") != -1 ||
                          el.Товар.indexOf("JBL") != -1 ||
                          el.Товар.indexOf("Marshall") != -1) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
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

export default GarminGoProDji;
