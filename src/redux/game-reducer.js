const PERSON_NAME = 'PERSON_NAME'
const IMPORT_TEST = 'IMPORT_TEST'
const initialState = {
    name: "",
    number:0,
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
                        text_question: "1"
                    },
                    {
                        id_item: 1705919360088,
                        value: true,
                        text_question: "2"
                    },
                    {
                        id_item: 1705919360920,
                        value: false,
                        text_question: "3"
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
            debugger
            return {
                ...state,
                test: action.data,
            };
        default:
            return state;
    }
}

const personNameAC = (data) => ({
    type: PERSON_NAME,
    data: data,
})
const importTestAC = (data) => ({
    type: IMPORT_TEST,
    data: data,
})

export {
    personNameAC, importTestAC,
    gameReducer
}