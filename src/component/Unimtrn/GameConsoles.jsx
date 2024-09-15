import React, { useState } from "react";
import { returnFixPrice } from "../../helpers/fixPrice";
import style from "./styles.module.css";
import { baseFix } from "../../helpers/baseFix";
import { newPrice } from "../../helpers/newPrice";
import { copyTable } from "../../helpers/copy";
import Footer from "./Footer";

const GameConsoles = ({ el }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNintendo, setIsNintendo] = useState(false);
  const [isOculus, setIsOculus] = useState(false);
  const [isPlayStation, setIsPlayStation] = useState(false);
  const [isXbox, setIsXbox] = useState(false);
  const [isPico, setIsPico] = useState(false);
  const [isSteam, setIsSteam] = useState(false);

  let gb = /Gb/gi;
  let wiFi = /wifi/gi;
  let playstation = /Playstation/gi;

  const fixName = (el) => {
    const fixGb = el.Товар.replace(gb, "");
    const fixPlaystation = fixGb.replace(playstation, "PlayStation");
    return fixPlaystation.replace(wiFi, "Wi-Fi");
  };

  return (
    <div>
      <div>
        <div>
          {el.length > 1 && (
            <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "Игровые приставки ▲" : "Игровые приставки ▼"}
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

                {isNintendo && <div>🕹️Nintendo</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Nintendo") != -1) &&
                        (isNintendo || setIsNintendo(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isOculus && <br />}
                {isOculus && <div>🥽Oculus</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Oculus") != -1) &&
                        (isOculus || setIsOculus(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isPico && <br />}
                {isPico && <div>🥽Pico</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Pico") != -1) &&
                        (isPico || setIsPico(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isPlayStation && <br />}
                {isPlayStation && <div>🎮PlayStation</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("PlayStation") != -1 ||
                          el.Товар.indexOf("Playstation") != -1 ||
                          el.Товар.indexOf("PS5") != -1) &&
                        (isPlayStation || setIsPlayStation(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isXbox && <br />}
                {isXbox && <div>🎮Xbox</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Xbox") != -1) &&
                        (isXbox || setIsXbox(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}

                {isSteam && <br />}
                {isSteam && <div>🕹️Steam</div>}
                {el.length ? (
                  el.map((el, index) => (
                    <div key={index}>
                      {baseFix(el) &&
                        (el.Товар.indexOf("Steam") != -1) &&
                        (isSteam || setIsSteam(true)) &&
                        returnFixPrice(el, fixName(el)) + newPrice(el)}
                    </div>
                  ))
                ) : (
                  <tr></tr>
                )}
                <Footer />
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameConsoles;
