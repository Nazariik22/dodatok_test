import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { uppDataAC, uppdataUserInfoAC } from "../../redux/person-reduser";
import logo from './../../img/person-logo.png'
import styles from './Profile.module.css'
const Profile = (props) => {
    debugger
    const dispatch = useDispatch();
    const state = useSelector(state => state?.personData?.person[props.idUser])
    const [login, setLogin] = useState(state?.userInfo?.login);
    const [password, setPassword] = useState(state?.userInfo?.password);
    const [tel, setTel] = useState(state?.userInfo?.tel);
    const [email, setEmail] = useState(state?.userInfo?.email);
    //console.clear();
    console.log(state)
    if (!props.auto) return <Navigate to="/auto" replace={true} />
    return (
        <main className={styles.main}>
            <img src={state.img ? state.img : logo} alt="" />
            <div className={styles.title}>{state.userInfo.sernameName}</div>
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
                                    onChange={(e) => setLogin(e.target.value)}
                                />
                                <input type="text" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <input type="text" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <input type="text" value={tel}
                                    onChange={(e) => setTel(e.target.value)} />
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
                    ? <button onClick={() => {
                        dispatch(uppDataAC(false))
                        dispatch(uppdataUserInfoAC(
                            state.id,
                            {
                                login: login,
                                password: password,
                                tel: tel,
                                email: email,
                            }
                        ))
                    }}>Зберегти зміни</button>
                    : <button onClick={() => { dispatch(uppDataAC(true)) }}>Редагувати дані</button>
                }

            </section>
        </main>
    )
}
export { Profile }