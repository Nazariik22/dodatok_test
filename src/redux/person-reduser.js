const UPPDATA = 'UPPDATA'
const ADDTEST = 'ADDTEST'
const ADDUSER = 'ADDUSER'
const LOGIN = "LOGIN"
const UPPDATA_USER_INFO = 'UPPDATA_USER_INFO'
const ADDRESALTGAME = 'ADDRESALTGAME'
const initialState = {
    person: [
        {
            id: 1,
            img: null,
            userInfo: {
                login: "1",
                password: "1",
                sernameName: "Nazarii Krutiak",
                tel: "+380954670150",
                email: "nazariik20@gmail.com",
            },
            test: [
                {
                    id: 1,
                    title: "Test1",
                    title_text: "Test_title_1",
                    game: [
                        { personName: "User1", number: 11 },
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
            about: "Вчитель Бродівської гімназії",
        },



    ],
    chekValue: false,
    auto: true,
    userId: 1,

}
const personReducser = (state = initialState, action) => {
    switch (action.type) {
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
            debugger
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

        default:
            return state;
    }
}
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
export {
    personReducser,
    uppDataAC, uppdataUserInfoAC, addResaltGameAC,
    addTestAC, adDUserAC, loginAC
}
