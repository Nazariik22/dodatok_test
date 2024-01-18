const UPPDATA = 'UPPDATA'
const ADDTEST = 'ADDTEST'
const initialState = {
    person: [
        {
            id: 1,
            img: null,
            test: [

            ],
            about: "Вчитель Бродівської гімназії",
        },
        {
            id: 2, test: [

            ]
        },
    ],
    chekValue: false,


}
const personReducser = (state = initialState, action) => {
    switch (action.type) {
        case UPPDATA:
            return {
                ...state,
                chekValue: action.data,
            }
        case ADDTEST:
            return {
                ...state,
                person: state.person.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            test: [
                                ...item.test,
                                action.data
                            ]
                        }
                    } else {
                        return item
                    }
                })
            }
        default:
            return state;
    }
}
const uppDataAC = (data) => ({
    type: UPPDATA,
    data: data,
})

const addTestAC = (id, data) => ({
    type: ADDTEST,
    id: id,
    data: data,
})
export {
    personReducser,
    uppDataAC, addTestAC
}