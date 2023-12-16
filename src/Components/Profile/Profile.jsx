import { useSelector } from "react-redux"
import logo from './../../img/person-logo.png'
import styles from './Profile.module.css'
const Profile =(props)=>{
    const idUser = useSelector(state=>state.user.userId)
    const state =useSelector(state=>state.personData[idUser-1])
    const user= useSelector(state=>state.user.person[idUser-1])
    const {login,password,tel,email,sernameName} =user.userInfo;
    return(
        <main className={styles.main}>
            <img src={state.img?state.img:logo} alt="" />
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
                        <p>{login}</p>
                        <p>{password}</p>
                        <p>{email}</p>
                        <p>{tel}</p>
                    </div>
                </div>
                <button>Редагувати дані</button>
            </section>
        </main>
    )
}
export {Profile}