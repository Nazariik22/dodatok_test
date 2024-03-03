import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';
import img from './../../img/logo_header.png';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_blok}>
                <div className={`img ${styles.header_blok_img}`}>
                    <img src={img} alt="" />
                </div>
                <NavLink to='/' >Головна</NavLink>
                <NavLink to='/create' className={styles.button}>+</NavLink>
            </div>
            <div className={styles.header_blok}>
                <div className={styles.search}>
                    {/*<input type="text" />*/}
                    <div className="img"></div>
                </div>
                <NavLink to='/auto' >Увійти</NavLink>
                <NavLink to='/info' >Особистий кабінет</NavLink>
            </div>
        </header>
    );
}

export { Header };