const CREATETEST = "CREATETEST"
const BUTTONVALUE = 'BUTTONVALUE'
const DESTROYTEST = "DESTROYTEST"
const TEXTNEWVALUE = 'TEXTNEWVALUE'
const CREATEITEMTEST = 'CREATEITEMTEST'
const TEXTNEWITEMVALUE='TEXTNEWITEMVALUE'
const initialState = {
    id: 1,
    title: "",
    title_text: "",
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
                        },
                    ],

                },

                ]
            };
        case DESTROYTEST:
            return {
                ...state,
                questions: state.questions.filter(item => item.id !== action.id)
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
                                    if(question.id_item===action.id_item){
                                        return {
                                            ...question,
                                            text_question:action.data,
                                        }
                                    }else{
                                        return question
                                    }
                            })
                        }
                    } else {
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
                            },]
                        }
                    } else {
                        return item;
                    }
                })
            }
        default:
            return state;
    }
}
const createItemAC = () => ({
    type: CREATETEST,
})
const createItemTestAC = (id) => ({
    type: CREATEITEMTEST,
    id: id,
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
const textNewItemValueAC = (id,id_item, data) => ({
    type: TEXTNEWITEMVALUE,
    id: id,
    id_item:id_item,
    data: data,
})
const buttonItemAC = (id, data) => ({
    type: BUTTONVALUE,
    id: id,
    data: data,
})
export {
    createReducer,
    createItemAC, createItemTestAC,
    buttonItemAC, textNewValueAC,textNewItemValueAC,
    destroyItemAC
}