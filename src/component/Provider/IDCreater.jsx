import style from "../Unimtrn/indexPicrForOrder.module.css";
import AllPriceWithID from "./AllPrice/AllPriceWithID";
import IndexHi from "./Hi/indexHi";
import IndexUnimtrn from "./Unimtrn/indexUNIMTRN";

const IDCreater = ({ handleImport, hi, el }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.flexbox}>
        <div className={style.wrapper_control}>
          <div>
            <div className={style.row}>
              <div>
                <div className={style.input_group}>
                  <div className={style.custom_file}>
                    <label
                      for="inputGroupFile"
                      className={style.custom_file_upload}
                    >
                      Select File...
                    </label>
                    <input
                      type="file"
                      name="file"
                      className={style.custom_file_input}
                      id="inputGroupFile"
                      required
                      onChange={handleImport}
                      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllPriceWithID dataHi={hi} dataUnimtrn={el} />
      <br />
      {/* <IndexHi hi={hi} />
      <IndexUnimtrn el={el} /> */}
    </div>
  );
};

export default IDCreater;
