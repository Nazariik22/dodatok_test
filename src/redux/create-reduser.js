
const initialState = [
    {
        userId: 1,
        test: [
            {
                id: 1,
                title: "Test_1",
                title_text: "about",
                questions: [
                    {
                        id: 1,
                        text: "questions_1",
                        value: true,
                    },
                ],
            },
        ],
    },
]
const createReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'value':
            return state;
        default:
            return state;
    }
}
export { createReducer }