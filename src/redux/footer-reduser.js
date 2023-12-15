
const initialState = {
    help: [
        { id: 1, text: "Служба підтримки" },
        { id: 2, text: "Питання" },
        { id: 3, text: "Повідомити про помилку" },
    ],
    contact: [
        { id: 1, link: "mail:@gmail.com" },
        { id: 2, link: "tel:+380******" },
    ]
}
const footerReduser = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}
export {footerReduser}