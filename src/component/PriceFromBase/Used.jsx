import React, { useRef, useState } from "react";
import { changeFlag, returnFixPrice } from "./helpers/fixFlags";
import { baseFix, baseFixUsed } from "./helpers/baseFix";
import style from "./styles.module.css";
import { copyTable } from "./helpers/copy";

const Used = ({ fullList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isDemo, setIsDemo] = useState(false);
  const [isAwSE, setIsAWSE] = useState(false);
  const [isAwS8, setIsAWS8] = useState(false);
  const [isAwS9, setIsAWS9] = useState(false);
  const [isiPad, setIsIPad] = useState(false);
  const [isMacBook, setIsMacBook] = useState(false);
  const [isiMac, setIsIMac] = useState(false);
  const [isiPhone, setIsIphone] = useState(false);

  const [isSams, setIsSams] = useState(false);

  const [isXiaomi, setIsXiaomi] = useState(false);

  const [isOther, setIsOther] = useState(false);

  const arr = [];

  fullList.map((a) => {
    arr.push({ name: a.Наименование, price: a.Опт });
  });

  const result = arr.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => t.place === value.place && t.name === value.name)
  );

  let wifi = /Wifi/gi;
  let wifi2 = /Wi-fi/gi;
  let corosName = /COROS /gi;

  const fixName = (used) => {
    const fixWifi = used.name.replace(wifi, "Wi-Fi");
    const fixWifi2 = fixWifi.replace(wifi2, "Wi-Fi");
    const fixCoros = fixWifi2.replace(corosName, "");
    const replaceApple = fixCoros.replace("Apple ", "");
    const replaceSams = replaceApple.replace("Samsung ", "");
    const replaceXiaomi = replaceSams.replace("Xiaomi Redmi", "Redmi");
    const fixPoco = replaceXiaomi.replace("Pocophone", "Poco");
    return changeFlag(fixPoco);
  };

  const checkUsed = (used) => {
    return (
      used.name.indexOf('"A-"') !== -1 ||
      used.name.indexOf('"A"') !== -1 ||
      used.name.indexOf('"A+"') !== -1 ||
      used.name.indexOf('"B-"') !== -1 ||
      used.name.indexOf('"B"') !== -1 ||
      used.name.indexOf('"B+"') !== -1 ||
      used.name.indexOf('"C-"') !== -1 ||
      used.name.indexOf('"C"') !== -1 ||
      used.name.indexOf('"C+"') !== -1
    );
  };

  const refWatchSE = useRef();
  const refWatchS9 = useRef();

  return (
    <div>
      <div>
        {result.length > 1 && (
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Б/У ▲" : "Б/У ▼"}
          </span>
        )}
      </div>

      {isOpen && (
        <div>
          <h4
            onClick={() => {
              copyTable();
            }}
          >
            ❐ Copy
          </h4>
          <table>
            <div>👇 Идеальное БУ</div>
            <br />
            {/* <div>🍏 Apple</div> */}
            {/* {result.map((appleUsed, i) => (
              <div key={i}>
                {appleUsed.price &&
                  checkUsed(appleUsed) &&
                  appleUsed.name?.indexOf("Apple") !== -1 &&
                  returnFixPrice(appleUsed, fixName(appleUsed)) + appleUsed.price}
              </div>
            ))}
            <br /> */}

            <div>🍏 Apple</div>
            {result.map((apple, i) => (
              <div key={i}>
                {baseFixUsed(apple) &&
                  apple.price &&
                  checkUsed(apple) &&
                  (apple.name.indexOf("AirPods") !== -1 ||
                    apple.name.indexOf("Pencil") !== -1 ||
                    apple.name.indexOf("Apple Magic") !== -1 ||
                    apple.name.indexOf("Apple Battary") !== -1 ||
                    apple.name.indexOf("Apple TV") !== -1 ||
                    apple.name.indexOf("Apple HomePod") !== -1 ||
                    apple.name.indexOf("Apple AirTag") !== -1) &&
                  returnFixPrice(apple, fixName(apple)) + apple.price}
              </div>
            ))}
            {isiPhone && <br />}
            {isiPhone && <div>📱 Apple iPhone</div>}
            {result.map((iPhone, i) => (
              <div key={i}>
                {baseFixUsed(iPhone) &&
                  iPhone.price &&
                  checkUsed(iPhone) &&
                  iPhone.name.indexOf("iPhone") !== -1 &&
                  (isiPhone || setIsIphone(true)) &&
                  returnFixPrice(iPhone, fixName(iPhone)) + iPhone.price}
              </div>
            ))}
            {isAwSE && <br />}
            {isAwSE && <div>⌚️ Apple Watch SE 2023</div>}
            {result.map((SE, i) => (
              <div key={i} ref={refWatchSE}>
                {baseFixUsed(SE) &&
                  SE.price &&
                  checkUsed(SE) &&
                  (SE.name.indexOf("SE 2023 Gen") !== -1 ||
                    SE.name.indexOf("Watch SE") !== -1) &&
                  (isAwSE || setIsAWSE(true)) &&
                  returnFixPrice(SE, fixName(SE)) + SE.price}
              </div>
            ))}
            {isAwS8 && <br />}
            {isAwS8 && <div>⌚️ Apple Watch S8</div>}
            {result.map((s8, i) => (
              <div key={i}>
                {baseFixUsed(s8) &&
                  s8.price &&
                  checkUsed(s8) &&
                  s8.name.indexOf("Apple Watch S8") !== -1 &&
                  (isAwS8 || setIsAWS8(true)) &&
                  returnFixPrice(s8, fixName(s8)) + s8.price}
              </div>
            ))}
            {isAwS9 && <br />}
            {isAwS9 && <div>⌚️ Apple Watch S9</div>}
            {result.map((s9, i) => (
              <div key={i} ref={refWatchS9}>
                {baseFixUsed(s9) &&
                  s9.price &&
                  checkUsed(s9) &&
                  s9.name.indexOf("Apple Watch S9") !== -1 &&
                  (isAwS9 || setIsAWS9(true)) &&
                  returnFixPrice(s9, fixName(s9)) + s9.price}
              </div>
            ))}
            {isiPad && <br />}
            {isiPad && <div>📟 Apple iPad</div>}
            {result.map((iPad, i) => (
              <div key={i}>
                {baseFixUsed(iPad) &&
                  iPad.price &&
                  checkUsed(iPad) &&
                  iPad.name.indexOf("iPad") !== -1 &&
                  (isiPad || setIsIPad(true)) &&
                  returnFixPrice(iPad, fixName(iPad)) + iPad.price}
              </div>
            ))}
            {isMacBook && <br />}
            {isMacBook && <div>💻 Apple MacBook</div>}
            {result.map((macbook, i) => (
              <div key={i}>
                {baseFixUsed(macbook) &&
                  macbook.price &&
                  checkUsed(macbook) &&
                  macbook.name.indexOf("MacBook") !== -1 &&
                  (isMacBook || setIsMacBook(true)) &&
                  returnFixPrice(macbook, fixName(macbook)) + macbook.price}
              </div>
            ))}
            {isiMac && <br />}
            {isiMac && <div>🖥️ Apple iMac</div>}
            {result.map((iMac, i) => (
              <div key={i}>
                {baseFixUsed(iMac) &&
                  iMac.price &&
                  checkUsed(iMac) &&
                  iMac.name.indexOf("iMac") !== -1 &&
                  (isiMac || setIsIMac(true)) &&
                  returnFixPrice(iMac, fixName(iMac)) + iMac.price}
              </div>
            ))}
            {isSams && <br />}
            {isSams && <div>📱 Samsung</div>}
            {result.map((galaxy, i) => (
              <div key={i}>
                {baseFixUsed(galaxy) &&
                  galaxy.price &&
                  checkUsed(galaxy) &&
                  galaxy.name.indexOf("Samsung") !== -1 &&
                  (isSams || setIsSams(true)) &&
                  returnFixPrice(galaxy, fixName(galaxy)) + galaxy.price}
              </div>
            ))}

            {isXiaomi && <br />}
            {isXiaomi && <div>📱 Xiaomi</div>}
            {result.map((xiaomi, i) => (
              <div key={i}>
                {baseFixUsed(xiaomi) &&
                  xiaomi.price &&
                  checkUsed(xiaomi) &&
                  (xiaomi.name.indexOf("Xiaomi") !== -1 || 
                  xiaomi.name.indexOf("Poco") !== -1) &&
                  (isXiaomi || setIsXiaomi(true)) &&
                  returnFixPrice(xiaomi, fixName(xiaomi)) + xiaomi.price}
              </div>
            ))}

            {isOther && <br />}
            {isOther && <div>📱 Остальные бренды</div>}
            {result.map((other, i) => (
              <div key={i}>
                {baseFixUsed(other) &&
                  other.price &&
                  checkUsed(other) &&
                  other.name.indexOf("Xiaomi") === -1 &&
                  other.name.indexOf("Poco") === -1 &&
                  other.name.indexOf("Samsung") === -1 &&
                  other.name.indexOf("Apple") === -1 &&
                  (isOther || setIsOther(true)) &&
                  returnFixPrice(other, fixName(other)) + other.price}
              </div>
            ))}

            <br />
            <div>🏷 Пломбы</div>
            {result.map((seals, i) => (
              <div key={i}>
                {seals.price &&
                  (seals.name?.indexOf("Пломбa") !== -1 ||
                    seals.name?.indexOf("Пломба") !== -1) &&
                  returnFixPrice(seals, fixName(seals)) + seals.price}
              </div>
            ))}
            {isDemo && <br />}
            {isDemo && <div>🔥 Обменки / Демо</div>}
            {result.map((demo, i) => (
              <div key={i}>
                {demo.price &&
                  (demo.name?.indexOf("Обменка") !== -1 ||
                    demo.name?.indexOf("обменка") !== -1 ||
                    demo.name?.indexOf("Демо") !== -1) &&
                  (isDemo || setIsDemo(true)) &&
                  returnFixPrice(demo, fixName(demo)) + demo.price}
              </div>
            ))}
            <br />
          </table>
        </div>
      )}
    </div>
  );
};

export default Used;
