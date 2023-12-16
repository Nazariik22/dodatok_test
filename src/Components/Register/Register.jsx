import { NavLink } from 'react-router-dom';
import styles from './Register.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserAC } from '../../redux/user-reduser';
const Register = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [sernameName, setSernameName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const dispach = useDispatch();
    const handlLC = (e) => {
        setLogin(e.target.value)
    }
    const handlPC = (e) => {
        setPassword(e.target.value)
    }
    const handlSC = (e) => {
        setSernameName(e.target.value)
    }
    const handlTC = (e) => {
        setTel(e.target.value)
    }
    const handlEC = (e) => {
        setEmail(e.target.value)
    }
    const addUser =()=>{
        dispach(addUserAC({
            login:login,
            password:password,
            sernameName:sernameName,
            tel:tel,
            email:email
        }))
        
    }
    return (
        <div className={styles.container}>
            <form className={styles.register}>
                <h2>Регістрація</h2>
                <section>
                    <p>Введіть логін:*</p>
                    <input type="text"
                        value={login}
                        onChange={handlLC}
                    />
                </section>
                <section>
                    <p>Введіть пароль:*</p>
                    <input type="password"
                        value={password}
                        onChange={handlPC}
                    />
                </section>
                <section>
                    <p>Прізвище та ім’я:*</p>
                    <input type="text"
                        value={sernameName}
                        onChange={handlSC} />
                </section>
                <section>
                    <p>Номер телефону:*</p>
                    <div className={`flex ${styles.flex}`}>
                        <div className={styles.blok}>
                            <div className="img">
                                <img src="" alt="" />
                            </div>
                            <p>+380</p>
                        </div>
                        <input type="tel" placeholder="000 000 000"
                            value={tel}
                            onChange={handlTC}
                        />
                    </div>
                </section>
                <section>
                    <p>Електронна пошта:*</p>
                    <input type="email" placeholder="example@mail.com"
                        value={email}
                        onChange={handlEC} />
                </section>
                <section className={styles.konf}>
                    <input type="checkbox" />
                    <p>Я приймаю умови політики конфіденційності. <span>Докладніше.</span></p>
                </section>
                <NavLink to='/auto' className={styles.button} onClick={addUser}>Зареєструватися</NavLink>
            </form>
        </div>

    );
}

export { Register };