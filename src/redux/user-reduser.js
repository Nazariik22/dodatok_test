const ADDUSER = "ADDUSER"

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
            about: " ",
        },
    ],
    auto: false,
    userId: 1,
}

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}




export { userReduser, }