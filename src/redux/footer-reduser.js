import iconInsta from './../img/footer/Instagram_icon.png'
import iconFacebook from './../img/footer/Facebook_f_logo_(2019).svg.png'
const CLOSEMODAL = 'CLOSEMODAL'
const PROBLEM = 'PROBLEM'
const OPENMODAL = 'OPENMODAL'
const MODALITEM = 'MODALITEM'
const initialState = {
    help: [
        { id: 1, text: "Служба підтримки", cheked: false },
        {
            id: 2, text: "Питання", cheked: false,
            question: [
                {
                    title: "Як створити тест?",
                    cheked: false,
                    text: "Оберіть + на шапці сайту"
                },
                {
                    title: "Де переглянути результати?",
                    cheked: false,
                    text: "Для перегляду результатів,на потрібному тесті оберіть значок з молотком"
                },
                {
                    title: "Як запустити тест?",
                    cheked: false,
                    text: "На панелі головна оберіть потрібний тест. Після цього надайте посилання учасникам тестування"
                },
            ]
        },
        {
            id: 3,
            text: "Повідомити про помилку",
            cheked: false,
            message: [],
        },
    ],
    contact: [
        {
            id: 1, link: "https://www.instagram.com/88_sofia_21/",
            img: iconInsta
        },
        {
            id: 2, link: "https://www.facebook.com/profile.php?id=100056744571733",
            img: iconFacebook
        },
    ]
}
const footerReduser = (state = initialState, action) => {
    switch (action.type) {
        case CLOSEMODAL:
            return {
                ...state,
                help: state.help.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            cheked: false,
                        }

                    }
                    return item;



                })
            }
        case MODALITEM:
            return {
                ...state,
                help: state.help.map(item => {
                    if (item.id === 2) {
                        console.log(item)
                        debugger
                        return {
                            ...item,
                            question: item.question.map((element, index) => {
                                if (index === action.id) {
                                    return {
                                        ...element,
                                        cheked: true,
                                    }
                                }
                                return {
                                    ...element,
                                    cheked: false,
                                }
                            }),
                        }
                    }
                    return item;

                })
            }
        case OPENMODAL:
            return {
                ...state,
                help: state.help.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            cheked: true,
                        }
                    }
                    return item;
                })
            }
        case PROBLEM:

            return {
                ...state,
                help: state.help.map(item => {
                    if (item.id === 3) {
                        return {
                            ...item,
                            message: [...item.message, action.data]
                        }

                    }
                    return item;
                })
            }
        default:
            return state;
    }
}
const closeModalAC = (data) => ({
    type: CLOSEMODAL,
    id: data,
})
const modalItemAC = (data) => ({
    type: MODALITEM,
    id: data,
})
const openModalAC = (data) => ({
    type: OPENMODAL,
    id: data,
})
const problemAC = (data) => ({
    type: PROBLEM,
    data: data,
})


export {
    modalItemAC,
    problemAC,
    closeModalAC, openModalAC,
    footerReduser
}