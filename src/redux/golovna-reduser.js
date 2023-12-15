
const initialState = {
    pageList: [
        { id: 1, title: "Рекомендовано" },
        { id: 2, title: "Нещодавні" },
        { id: 3, title: "Збережені" },
        { id: 4, title: "Командні тести" },
    ],
}
const golovnaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'value':
            return state;
        default:
            return state;
    }
}
export { golovnaReducer }