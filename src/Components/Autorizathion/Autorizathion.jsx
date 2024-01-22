import { useState } from 'react';
import styles from './Autorizathion.module.css'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAC } from '../../redux/person-reduser';
const Autorizathion = (props) => {

    const dispatch = useDispatch()
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const loginAuto = () => {
        props.user.map(element => 
            element.userInfo.login === login
                && element.userInfo.password === password
                && dispatch(loginAC(true, element.id))
        );
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
                        value={login} onChange={(e) => setLogin(e.target.value)}
                    />
                </section>
                <section>
                    <p>Пароль:</p>
                    <input type="password" placeholder="Пароль..."
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </section>
                <NavLink to='/'
                    className={styles.button}
                    onClick={loginAuto}
                >Увійти</NavLink>
            </form>
        </div>

    );
}

export { Autorizathion };