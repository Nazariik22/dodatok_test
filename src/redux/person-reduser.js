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
                        title: "HTML CSS",
                            title_text: "Тест на знання верстки",
                                game: [
                                    { personName: "Софія Леміщак", number: 10 },
                                    { personName: "Олена Леміщак", number: 5 },
                                    { personName: "Ковалів Руслана", number: 4 },
                                    { personName: "Козіцький Роман", number: 4 },
                                    { personName: " Романюк Юрій", number: 4 },
                                    { personName: " Смага Олександр", number: 9 },
                                    { personName: "Чупель Олександр", number: 9 },
                                ],
                                    questions: [
                                        {
                                            id: 0,
                                            text: "Мова розмітку гіпертексту - це",
                                            value: false,
                                            questions_items: [
                                                {
                                                    id_item: 0,
                                                    value: false,
                                                    text_question: "сукупність команд для настраювання Інтернету  ",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628620118,
                                                    value: false,
                                                    text_question: "спеціальні команди для створення зв'язку між певними веб-сторінками",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628620764,
                                                    value: false,
                                                    text_question: "сукупність та правила розташування спеціальних кодів, які керують формування, вставленням ілюстрацій, таблиць і зв'язком з іншими документами",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628620518,
                                                    value: true,
                                                    text_question: " спеціальні команди та правила призначені для створення веб-сторінок",
                                                    cheked: false
                                                }
                                            ]
                                        },
                                        {
                                            id: 1709628620572,
                                            text: " Тег- це",
                                            value: false,
                                            questions_items: [
                                                {
                                                    id_item: 0,
                                                    value: true,
                                                    text_question: "код для визначення структури веб-сторінок",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628680851,
                                                    value: false,
                                                    text_question: "команда у мові HTML",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628680420,
                                                    value: false,
                                                    text_question: "будь-яке текстове повідомлення, що розташоване в кутових дужках",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628680898,
                                                    value: false,
                                                    text_question: "настроювання вигляду частини веб-сторінки за допомогою спеціального коду",
                                                    cheked: false
                                                }
                                            ]
                                        },
                                        {
                                            id: 1709628680557,
                                            text: " Атрибут- це",
                                            value: false,
                                            questions_items: [
                                                {
                                                    id_item: 0,
                                                    value: true,
                                                    text_question: " характеристика тегу, що впливає на створюваний ним ефект",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628680582,
                                                    value: false,
                                                    text_question: "характеристика тегу, що вивчає місце його розташування в HTML- документі",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628740129,
                                                    value: false,
                                                    text_question: "характеристика кольорів тексту та тла веб-сторінки",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628740066,
                                                    value: false,
                                                    text_question: " властивість тегу",
                                                    cheked: false
                                                }
                                            ]
                                        },
                                        {
                                            id: 1709628740268,
                                            text: " Тег <а> призначений для :",
                                            value: false,
                                            questions_items: [
                                                {
                                                    id_item: 0,
                                                    value: false,
                                                    text_question: "позначення нового абзацу",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628740215,
                                                    value: true,
                                                    text_question: "створення гіперпосилання",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628740823,
                                                    value: false,
                                                    text_question: "позначення тексту як заголову",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628740909,
                                                    value: false,
                                                    text_question: "позначення нового абзацу",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628740480,
                                                    value: false,
                                                    text_question: " позначення заголовка для таблиці",
                                                    cheked: false
                                                }
                                            ]
                                        },
                                        {
                                            id: 1709628800209,
                                            text: "Контент - це",
                                            value: false,
                                            questions_items: [
                                                {
                                                    id_item: 0,
                                                    value: false,
                                                    text_question: "одиниця вимірювання інформації",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628800883,
                                                    value: true,
                                                    text_question: "інформаційне наповнення сайту",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628800698,
                                                    value: false,
                                                    text_question: "об'єм інформації, що передається комп'ютерною мережею",
                                                    cheked: false
                                                }
                                            ]
                                        },
                                        {
                                            id: 1709628800182,
                                            text: " За допомогою якого тега слід розділяти абзаци?",
                                            value: true,
                                            questions_items: [
                                                {
                                                    id_item: 0,
                                                    value: true,
                                                    text_question: " <p>",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628800626,
                                                    value: true,
                                                    text_question: " <br>",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628800207,
                                                    value: false,
                                                    text_question: "<paragraph>",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628860812,
                                                    value: false,
                                                    text_question: "<abzac>",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628860569,
                                                    value: false,
                                                    text_question: " <q>",
                                                    cheked: false
                                                }
                                            ]
                                        },
                                        {
                                            id: 1709628860792,
                                            text: " Які теги і в якій послідовності обов'язково повинні бути присутні на будь-якій веб-сторінці?",
                                            value: false,
                                            questions_items: [
                                                {
                                                    id_item: 0,
                                                    value: true,
                                                    text_question: " <html><head></head><body></body></html>",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628860330,
                                                    value: false,
                                                    text_question: "<html><title></title><body><b></body></html>",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628860864,
                                                    value: false,
                                                    text_question: "<head><html><strong></html><body></title><body></head>",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628860563,
                                                    value: false,
                                                    text_question: "<body><html></body></title><strike>",
                                                    cheked: false
                                                }
                                            ]
                                        },
                                        {
                                            id: 1709628860421,
                                            text: "В яких дужках записуються HTML теги?",
                                            value: false,
                                            questions_items: [
                                                {
                                                    id_item: 0,
                                                    value: false,
                                                    text_question: "{ }",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628920742,
                                                    value: true,
                                                    text_question: "< >",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628920002,
                                                    value: false,
                                                    text_question: "( )",
                                                    cheked: false
                                                }
                                            ]
                                        },
                                        {
                                            id: 1709628920049,
                                            text: " Що означає похила лінія / на початку тега ? ",
                                            value: false,
                                            questions_items: [
                                                {
                                                    id_item: 0,
                                                    value: false,
                                                    text_question: "Не використовувати тег",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628920021,
                                                    value: true,
                                                    text_question: " Закриваючий дію тег",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628920932,
                                                    value: false,
                                                    text_question: "Відкриваючий дію тег",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628920842,
                                                    value: false,
                                                    text_question: "Коментар",
                                                    cheked: false
                                                }]
                                        },
                                        {
                                            id: 1709628920606,
                                            text: " Який з рядків змінить колір тексту на червоний для всіх тегів <p>",
                                            value: true,
                                            questions_items: [
                                                {
                                                    id_item: 0,
                                                    value: true,
                                                    text_question: " p {color: red}",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628980445,
                                                    value: false,
                                                    text_question: ".p {color: red}",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628980764,
                                                    value: true,
                                                    text_question: "p {color: #f00}",
                                                    cheked: false
                                                },
                                                {
                                                    id_item: 1709628980550,
                                                    value: false,
                                                    text_question: " #p {color: red}",
                                                    cheked: false
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
    type: CLOSEWINDOW,

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
    personReducser, windowAC, closeWindowAC,
    uppDataAC, uppdataUserInfoAC, addResaltGameAC,
    deleteTestUserAC,
    addTestAC, adDUserAC, loginAC
}
