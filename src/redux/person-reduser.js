
const initialState = [
    {
        id: 1,
        img:null,
        test: [
            {id:"test1", title:"Test1", countQuestion:10, play:8},
            {id:"test2", title:"Test2", countQuestion:5, play:0},
            {id:"test3", title:"Test3", countQuestion:15, play:7},
        ],
        about:"Вчитель Бродівської гімназії",
    },
    {
        id: 2, test: [

        ]
    },
]
const personReducser = (state = initialState, action) => {
    switch (action.type) {
        case 'value':
            return state;

        default:
            return state;
    }
}
export { personReducser }