const PERSON_NAME = 'PERSON_NAME'
const IMPORT_TEST = 'IMPORT_TEST'
const ANSWER = 'ANSWER'
const NUMBERADD = 'NUMBERADD'
const UPPDATEGAME='UPPDATEGAME'
const initialState = {
    name: "",
    number: 0,
    test: {
        id: 1,
        title: "Test1",
        title_text: "Test_title_1",
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
                        text_question: "1"
                    },
                    {
                        id_item: 1705919360367,
                        value: true,
                        text_question: "2"
                    },
                    {
                        id_item: 1705919360434,
                        value: false,
                        text_question: "3"
                    }
                ]
            }
        ]
    },

}


const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERSON_NAME:
            return {
                ...state,
                name: action.data,
            };
        case IMPORT_TEST:
            return {
                ...state,
                test: action.data,
            };
        case ANSWER:
            return {
                ...state,
                test: {
                    ...state.test,
                    questions: state.test.questions.map(item => {
                        if (item.id === action.id
                            && item.value === true) {
                            return {
                                ...item,
                                questions_items: item.questions_items.map(questions => {
                                    if (questions.id_item === action.id_item) {
                                        return {
                                            ...questions,
                                            cheked: action.data
                                        }
                                    } else {
                                        return questions
                                    }
                                })
                            }
                        } else if (item.id === action.id) {
                            return {
                                ...item,
                                questions_items: item.questions_items.map(questions => {
                                    if (questions.id_item === action.id_item) {
                                        return {
                                            ...questions,
                                            cheked: true
                                        }
                                    } else {
                                        return {
                                            ...questions,
                                            cheked: false
                                        }
                                    }
                                })
                            }
                        }
                        else {
                            return item
                        }
                    })

                }
            };
        case NUMBERADD:
            return {
                ...state,
                number: state.number + action.data,
            }
        case UPPDATEGAME:
                return state = initialState
        default:
            return state;
    }
}

const personNameAC = (data) => ({
    type: PERSON_NAME,
    data: data,
})
const uppDateGameAC = (data) => ({
    type: UPPDATEGAME,

})
const numberaddAC = (data) => ({
    type: NUMBERADD,
    data: data,
})
const importTestAC = (data) => ({
    type: IMPORT_TEST,
    data: data,
})
const answerAC = (id, id_item, data) => ({
    type: ANSWER,
    id: id,
    id_item: id_item,
    data: data,

})
export {
    personNameAC, importTestAC, answerAC,numberaddAC,uppDateGameAC,
    gameReducer
}