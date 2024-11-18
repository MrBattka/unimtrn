import { useState } from "react";
import { copyTable } from "./helpers/copy";
import style from "./styles.module.css";

const HeaderMob = ({ fullList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <div>
      {fullList.length > 2 && (
        <div>
          <span className={style.title} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Header ▲" : "Header ▼"}
          </span>
        </div>
      )}
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
            <div>{`${day}.${month}.${year}`}</div>
            <div>🧑‍💻Работаем с 9:00 до 20:00 </div>
            <div>🚀Доставка</div>
            <div>❗️В наличии в Севастополе</div>
            <div>💸Оплата наличными при получении </div>
            <br />
            <div>💬**ДЛЯ ЗАКАЗА💬**</div>
            <div>📞 WhatsApp: https://wa.me/79787922235</div>
          </table>
        </div>
      )}
    </div>
  );
};

export default HeaderMob;
