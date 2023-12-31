import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { uppDataAC } from "../../redux/person-reduser";
import logo from './../../img/person-logo.png'
import styles from './Profile.module.css'
const Profile = (props) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.personData.person[props.idUser - 1])
    const user = useSelector(state => state.user.person[props.idUser - 1])
    const {sernameName } = user.userInfo;
    const [login, setLogin] = useState(user.userInfo.login);
    const [password, setPassword] = useState(user.userInfo.password);
    const [tel, setTel] = useState(user.userInfo.tel);
    const [email, setEmail] = useState(user.userInfo.email);
    return (
        <main className={styles.main}>
            <img src={state.img ? state.img : logo} alt="" />
            <div className={styles.title}>{sernameName}</div>
            <div className={styles.about}>{state.about}</div>
            <section className={styles.section}>
                <div className={styles.flex}>
                    <div className={styles.blok_info}>
                        <span>Мої тести</span>
                        <span>Логін</span>
                        <span>Пароль</span>
                        <span>Електронна адреса</span>
                        <span>Номер телефону</span>
                    </div>
                    <div className={styles.blok_info}>
                        <p>{state.test.length}</p>
                        {props.chekValue ?
                            <>
                                <input type="text" value={login}
                                onChange={(e)=>setLogin(e.target.value)}
                                />
                                <input type="text" value={password} 
                                onChange={(e)=>setPassword(e.target.value)}/>
                                <input type="text" value={email}
                                onChange={(e)=>setEmail(e.target.value)} />
                                <input type="text" value={tel} 
                                onChange={(e)=>setTel(e.target.value)}/>
                            </>
                            : <>
                                <p>{login}</p>
                                <p>{password}</p>
                                <p>{email}</p>
                                <p>{tel}</p>
                            </>
                        }
                    </div>
                </div>
                {props.chekValue
                    ? <button onClick={() => { dispatch(uppDataAC(false)) }}>Зберегти зміни</button>
                    : <button onClick={() => { dispatch(uppDataAC(true)) }}>Редагувати дані</button>
                }

            </section>
        </main>
    )
}
export { Profile }