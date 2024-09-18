import Apple from "./Apple"
import Dyson from "./Dyson"
import GameConsoles from "./GameConsoles"
import GarminGoProDji from "./GarminGoproDji"
import GoogleSonyAsusLenovo from "./GoogleSonyAsusLenovo"
import NoName from "./NoName"
import OnePlusZTENothingHonor from "./OnePlusZTENothingHonor"
import OtherProduct from "./OtherProduct"
import Samsung from "./Samsung"
import Xiaomi from "./Xiaomi"
import style from "./indexPicrForOrder.module.css"


const IndexPriceForOrder = ({ el, handleImport }) => {


    return (
        <div className={style.wrapper}>
            <div className={style.flexbox}>
                <div className={style.wrapper_control}>
                    <div>
                        <div className={style.row}>
                            <div>
                                <div className={style.input_group}>
                                    <div className={style.custom_file}>
                                        <label for="inputGroupFile" className={style.custom_file_upload}>
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

            <div className={style.wrapper_cat}>
                <Dyson el={el} />
                <GarminGoProDji el={el} />
                <NoName el={el} />
                <GoogleSonyAsusLenovo el={el} />
                <OnePlusZTENothingHonor el={el} />
                <GameConsoles el={el} />
                <Samsung el={el} />
                <Xiaomi el={el} />
                <Apple el={el} />
                <OtherProduct el={el} />
            </div>
        </div>
    )
}

export default IndexPriceForOrder