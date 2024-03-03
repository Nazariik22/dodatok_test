const UPPDATA = 'UPPDATA'
const ADDTEST = 'ADDTEST'
const ADDUSER = 'ADDUSER'
const LOGIN = "LOGIN"
const UPPDATA_USER_INFO = 'UPPDATA_USER_INFO'
const ADDRESALTGAME = 'ADDRESALTGAME'
const DELETE_TEST_USER = 'DELETE_TEST_USER'
const WINDOW = 'WINDOW'
const CLOSEWINDOW = 'CLOSEWINDOW'
const initialState = {
    person: [
        {
            id: 1,
            img: null,
            userInfo: {
                login: "1",
                password: "1",
                sernameName: "Софія Леміщак",
                tel: "+380000000",
                email: "sofia@gmail.com",
            },
            test: [
                {
              
                    id: 1,
                    title: "Test1",
                    title_text: "Test_title_1",
                    game: [
                        { personName: "Софія Леміщак", number: 1 },
                        { personName: "Олена Леміщак", number: 3 },
                        { personName: "Ковалів Руслана", number: 2 },
                        { personName: "Козіцький Роман", number: 4 },
                        { personName: " Романюк Юрій", number: 4 },
                        { personName: " Смага Олександр", number: 1 },
                        { personName: "Чупель Олександр", number: 1 },
                    ],
                    questions: [
                        {
                            id: 0,
                            text: "t1",
                            value: false,
                            questions_items: [
                                {
                                    id_item: 0,
                                    value: false,
                                    text_question: "1",
                                    cheked: false,
                                },
                                {
                                    id_item: 1705919360088,
                                    value: true,
                                    text_question: "2",
                                    cheked: false,
                                },
                                {
                                    id_item: 1705919360920,
                                    value: false,
                                    text_question: "3",
                                    cheked: false,
                                }
                            ]
                        },
                        {
                            id: 0,
                            text: "t1",
                            value: false,
                            questions_items: [
                                {
                                    id_item: 0,
                                    value: false,
                                    text_question: "1",
                                    cheked: false,
                                },
                                {
                                    id_item: 1705919360088,
                                    value: true,
                                    text_question: "4",
                                    cheked: false,
                                },
                                {
                                    id_item: 1705919360920,
                                    value: false,
                                    text_question: "3",
                                    cheked: false,
                                }
                            ]
                        },
                        {
                            id: 0,
                            text: "t1",
                            value: false,
                            questions_items: [
                                {
                                    id_item: 0,
                                    value: false,
                                    text_question: "1",
                                    cheked: false,
                                },
                                {
                                    id_item: 1705919360088,
                                    value: true,
                                    text_question: "2",
                                    cheked: false,
                                },
                                {
                                    id_item: 1705919360920,
                                    value: false,
                                    text_question: "3",
                                    cheked: false,
                                }
                            ]
                        },
                        {
                            id: 1705919360678,
                            text: "t2",
                            value: true,
                            questions_items: [
                                {
                                    id_item: 0,
                                    value: true,
                                    text_question: "1",
                                    cheked: false,
                                },
                                {
                                    id_item: 1705919360367,
                                    value: true,
                                    text_question: "2",
                                    cheked: false,
                                },
                                {
                                    id_item: 1705919360434,
                                    value: false,
                                    text_question: "3",
                                    cheked: false,
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 1705926740705,
                    title: "Test2",
                    title_text: "Title_2",
                    game: [

                    ],
                    questions: [
                        {
                            id: 0,
                            text: "ww",
                            value: false,
                            questions_items: [
                                {
                                    id_item: 0,
                                    value: false,
                                    text_question: "www",
                                    cheked: false,
                                },
                                {
                                    id_item: 1705926740032,
                                    value: false,
                                    text_question: "aaa",
                                    cheked: false,
                                },
                                {
                                    id_item: 1705926740789,
                                    value: false,
                                    text_question: "zzz",
                                    cheked: false,
                                }
                            ]
                        }
                    ]
                }
            ],
            about: "Учениця Бродівської гімназії ім. І. Труша",
        },



    ],
    chekValue: false,
    auto: false,
    userId: 0,
    window: {
        chaked: false,
        id: 0
    },

}
const personReducser = (state = initialState, action) => {
    switch (action.type) {
        case WINDOW:
            return {
                ...state,
                window: {
                    chaked: true,
                    id: action.id
                },
            }
        case CLOSEWINDOW:
            return {
                ...state,
                window: {
                    chaked: false,
                    id: 0,
                },
            }
        case UPPDATA:
            return {
                ...state,
                chekValue: action.data,
            }
        case UPPDATA_USER_INFO:
            return {
                ...state,
                person: state.person.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            userInfo: {
                                ...item.userInfo,
                                ...action.data
                            }
                        }
                    } else {
                        return item;
                    }
                })
            }
        case ADDRESALTGAME:
            return {
                ...state,
                person: state.person.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            test: item.test.map(test_item => {
                                if (test_item.id === action.idTest) {
                                    return {
                                        ...test_item,
                                        game: [...test_item.game, action.data]
                                    }
                                } else {
                                    return test_item
                                }
                            })
                        }
                    } else {
                        return item
                    }
                })
            }
        case ADDTEST:
            const idTest = new Date().setUTCSeconds(20);
            return {
                ...state,
                person: state.person.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            test: [
                                ...item.test, {
                                    ...action.data,
                                    id: idTest
                                }

                            ]
                        }
                    } else {
                        return item
                    }
                })
            }

        case LOGIN:
            return {
                ...state,
                auto: action.auto,
                userId: action.id,
            }
        case ADDUSER:
            const dataId = new Date().setUTCSeconds(20);
            return {
                ...state,
                person: [...state.person,
                {
                    id: dataId,
                    img: null,
                    userInfo: action.data,
                    test: [],
                    about: "",
                },]
            }
        case DELETE_TEST_USER:
            return {
                ...state,
                person: state.person.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            test: item.test.filter(element => element.id !== action.test_id)
                        }

                    }
                    return item
                })
            }
        default:
            return state;
    }
}
const windowAC = (id) => ({
    type: WINDOW,
    id: id
})
const closeWindowAC = () => ({
    type:CLOSEWINDOW,
   
})
const uppDataAC = (data) => ({
    type: UPPDATA,
    data: data,
})
const adDUserAC = (data) => ({
    type: ADDUSER,
    data: data,
})

const addTestAC = (id, data) => ({
    type: ADDTEST,
    id: id,
    data: data,
})
const uppdataUserInfoAC = (id, data) => ({
    type: UPPDATA_USER_INFO,
    id: id,
    data: data,
})
const addResaltGameAC = (id, idTest, data) => ({
    type: ADDRESALTGAME,
    id: id,
    idTest: idTest,
    data: data,
})
const loginAC = (auto, id) => ({
    type: LOGIN,
    auto: auto,
    id: id
})
const deleteTestUserAC = (id, test_id) => ({
    type: DELETE_TEST_USER,
    id: id,
    test_id: test_id,
})
export {
    personReducser, windowAC,closeWindowAC,
    uppDataAC, uppdataUserInfoAC, addResaltGameAC,
    deleteTestUserAC,
    addTestAC, adDUserAC, loginAC
}
