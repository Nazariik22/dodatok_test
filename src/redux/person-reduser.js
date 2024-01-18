const UPPDATA = 'UPPDATA'
const ADDTEST = 'ADDTEST'
const ADDUSER = 'ADDUSER'
const LOGIN = "LOGIN"
const initialState = {
    person: [
        {
            id: 1,
            img: null,
            userInfo: {
                login: "nazarii",
                password: "123",
                sernameName: "Nazarii Krutiak",
                tel: "+380954670150",
                email: "nazariik20@gmail.com",
            },
            test: [

            ],
            about: "Вчитель Бродівської гімназії",
        },



    ],
    chekValue: false,
    auto: false,
    userId: "",

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

        case LOGIN:
            debugger
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
const loginAC = (auto, id) => (
    {
        type: LOGIN,
        auto: auto,
        id: id
    }
)
export {
    personReducser,
    uppDataAC, addTestAC, adDUserAC, loginAC
}