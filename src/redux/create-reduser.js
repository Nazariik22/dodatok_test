const CREATETEST = "CREATETEST"
const BUTTONVALUE = 'BUTTONVALUE'
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
            return {
                ...state,
                questions: [...state.questions, {
                    id: state.questions.length,
                    text: "",
                    value: false,
                    questions_items: [
                        {
                            value: false,
                            text_question: "",
                        },
                    ],

                },

                ]
            };
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
        default:
            return state;
    }
}
const createItemAC = () => ({
    type: CREATETEST,
})
const buttonItemAC = (id, data) => ({
    type: BUTTONVALUE,
    id: id,
    data: data,
})
export { createReducer, createItemAC, buttonItemAC }