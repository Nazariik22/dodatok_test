const CREATETEST = "CREATETEST"
const BUTTONVALUE = 'BUTTONVALUE'
const DESTROYTEST = "DESTROYTEST"
const TEXTNEWVALUE = 'TEXTNEWVALUE'
const CREATEITEMTEST = 'CREATEITEMTEST'
const TEXTNEWITEMVALUE = 'TEXTNEWITEMVALUE'
const CHEKEDVALUE = 'CHEKEDVALUE'
const DESTROYTESTITEM = 'DESTROYTESTITEM'
const TITLEELEMENTAC = 'TITLEELEMENTAC'
const UPPDATE = 'UPPDATE'

const initialState = {
    id: 1,
    title: "",
    title_text: "",
    game: [
    ],
    questions: [
        {
            id: 0,
            text: "",
            value: false,
            questions_items: [
                {
                    id_item: 0,
                    value: false,
                    text_question: "",
                    cheked: false,
                },
            ],

        },
    ],
}

const createReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATETEST:
            const dataId = new Date().setUTCSeconds(20);
            return {
                ...state,
                questions: [...state.questions, {
                    id: dataId,
                    text: "",
                    value: false,
                    questions_items: [
                        {
                            id_item: 0,
                            value: false,
                            text_question: "",
                            cheked: false,
                        },
                    ],

                },

                ]
            };
        case TITLEELEMENTAC:
            const dataTitle = new Date().setUTCSeconds(20);
            return {
                ...state,
                id: dataTitle,
                title: action.title,
                title_text: action.title_text,
            }
        case DESTROYTEST:
            return {
                ...state,
                questions: state.questions.filter(item => item.id !== action.id)
            }
        case DESTROYTESTITEM:
            return {
                ...state,
                questions: state.questions.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            questions_items: item.questions_items.filter(questions =>
                                questions.id_item !== action.id_item)
                        }
                    } else {
                        return item
                    }
                })
            }
        case BUTTONVALUE:
            return {
                ...state,
                questions: state.questions.map((item, index) => {
                    if (item.id === action.id) {
                        return { ...item, value: action.data }
                    } else {
                        return item;
                    }
                })
            }
        case TEXTNEWVALUE:
            return {
                ...state,
                questions: state.questions.map((item, index) => {
                    if (item.id === action.id) {
                        return { ...item, text: action.data }
                    } else {
                        return item;
                    }
                })
            }
        case TEXTNEWITEMVALUE:
            return {
                ...state,
                questions: state.questions.map((item, index) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            questions_items: item.questions_items.map((question) => {
                                if (question.id_item === action.id_item) {
                                    return {
                                        ...question,
                                        text_question: action.data,
                                    }
                                } else {
                                    return question
                                }
                            })
                        }
                    } else {
                        return item;
                    }
                })
            }
        case CHEKEDVALUE:
            return {
                ...state,
                questions: state.questions.map((item, index) => {
                    if (item.id === action.id
                        && item.value) {
                        return {
                            ...item,
                            questions_items: item.questions_items.map((question) => {
                                if (question.id_item === action.id_item) {
                                    return {
                                        ...question,
                                        value: action.data,
                                    }
                                } else {
                                    return question
                                }
                            })
                        }
                    } else if (item.id === action.id) {
                        return {
                            ...item,
                            questions_items: item.questions_items.map((question) => {
                                if (question.id_item === action.id_item) {
                                    return {
                                        ...question,
                                        value: true,
                                    }
                                } else {
                                    return {
                                        ...question,
                                        value: false,
                                    }
                                }
                            })
                        }
                    }
                    else {
                        return item;
                    }
                })
            }
        case CREATEITEMTEST:
            const dataItemId = new Date().setUTCSeconds(20);
            return {
                ...state,
                questions: state.questions.map((item, index) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            questions_items: [...item.questions_items, {
                                id_item: dataItemId,
                                value: false,
                                text_question: "",
                                cheked: false,
                            },]
                        }
                    } else {
                        return item;
                    }
                })
            }
        case UPPDATE:
            return state = initialState
        default:
            return state;
    }
}
const createItemAC = () => ({
    type: CREATETEST,
})
const uppdateAC = () => ({
    type: UPPDATE,

})
const createItemTestAC = (id) => ({
    type: CREATEITEMTEST,
    id: id,
})
const titleElementAC = (title, title_text) => ({
    type: TITLEELEMENTAC,
    title: title,
    title_text: title_text
})
const destroyItemAC = (id) => ({
    type: DESTROYTEST,
    id: id,
})
const textNewValueAC = (id, data) => ({
    type: TEXTNEWVALUE,
    id: id,
    data: data,
})
const textNewItemValueAC = (id, id_item, data) => ({
    type: TEXTNEWITEMVALUE,
    id: id,
    id_item: id_item,
    data: data,
})
const checkedValueAC = (id, id_item, data) => ({
    type: CHEKEDVALUE,
    id: id,
    id_item: id_item,
    data: data,
})
const buttonItemAC = (id, data) => ({
    type: BUTTONVALUE,
    id: id,
    data: data,
})
const destroyTestItemAC = (id, id_item) => ({
    type: DESTROYTESTITEM,
    id: id,
    id_item: id_item,
})
export {
    createReducer,
    createItemAC, createItemTestAC, titleElementAC, uppdateAC,
    buttonItemAC, textNewValueAC, textNewItemValueAC, checkedValueAC,
    destroyItemAC, destroyTestItemAC
}