import { useState } from 'react';
import styles from './Autorizathion.module.css'
import { NavLink } from 'react-router-dom';
const Autorizathion = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const handlLC = (e) => {
        setLogin(e.target.value)
    }
    const handlPC = (e) => {
        setPassword(e.target.value)
    }
    const loginAuto = () => {
        props.user.forEach(element => {
            element.userInfo.login === login
                && element.userInfo.password === password
                && props.login(true, element.id)

        });

    }
    return (
        <div className={styles.container}>
            <form className={styles.login}>
                <NavLink to="/register"
                    className={styles.register}
                >Зареєструватися</NavLink>
                <section>
                    <p >Логін/Електронна адреса:</p>
                    <input type="text" placeholder="Логін..."
                        value={login} onChange={handlLC}
                    />
                </section>
                <section>
                    <p>Пароль:</p>
                    <input type="password" placeholder="Пароль..."
                        value={password} onChange={handlPC} />
                </section>
                <NavLink to={props.auto && '/'}
                    className={styles.button}
                    onClick={loginAuto}
                >Увійти</NavLink>
            </form>
        </div>

    );
}

export { Autorizathion };