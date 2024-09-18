import { NavLink } from "react-router-dom"
import style from "./header.module.css";

const Header = () => {


    return (
        <nav className={style.wrapper}>
            <ul>
                <div className={style.button}>
                    <li>
                        <NavLink to="/price-for-order" className={ navData => navData.isActive ? style.button_active_1 : style.button}>
                            Под заказ
                        </NavLink>
                    </li>
                </div>
                <div className={style.button}>
                <li>
                    <NavLink to="/price-from-base" className={ navData => navData.isActive ? style.button_active_2 : style.button}>
                        По наличию
                    </NavLink>
                </li>
            </div>
        </ul>

        </nav >
    )
}

export default Header