const ADDUSER = "ADDUSER"
const LOGIN = "LOGIN"
const initialState = {
    person: [
        {
            id: 1,
            userInfo: {
                login: "nazarii",
                password: "123",
                sernameName: "Nazarii Krutiak",
                tel: "+380954670150",
                email: "nazariik20@gmail.com",
            },
        },
        {
            id: 2,
            userInfo: {
                login: "1",
                password: "1",
                sernameName: "Nazarii Krutiak",
                tel: "+380954670150",
                email: "nazariik20@gmail.com",
            },
        },

    ],
    auto: false,
    userId:1,
}

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADDUSER:
            return {
                ...state,
                person: [
                    ...state.person,
                    {
                        id: state.person.length + 1,
                        userInfo: action.data,
                    },
                ],
            }
        case LOGIN:
            return {
                ...state,
                auto: action.auto,
                userId:action.id,
            }
        default:
            return state;
    }
}

const addUserAC = (data) => (
    {
        type: ADDUSER,
        data: data
    }
)
const loginAC = (auto,id) => (
    {
        type: LOGIN,
        auto: auto,
        id:id
    }
)

export { userReduser, addUserAC, loginAC }