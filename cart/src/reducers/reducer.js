const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true }
        case "LOAD_DATA":
            return { ...state, cart: action.payload, loading: false }
        case "CLEAR":
            return { ...state, cart: [] }
        case "REMOVE":
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) }
        case "TOGGLE":
            const cart = state.cart.slice().map((item) => {
                if (item.id === action.payload.id) {
                    if (action.payload.type === "INC") {
                        return { ...item, amount: item.amount + 1 }
                    }
                    if (action.payload.type === "DEC") {
                        return { ...item, amount: item.amount - 1 }
                    }
                }
                return item;
            }).filter((item) => item.amount !== 0);
            return { ...state, cart }
        case "TOTALS":
            const { total, amount } = state.cart.reduce((prevState, item) => {
                prevState.total += item.price * item.amount;
                prevState.amount += item.amount;
                return prevState;
            }, {
                total: 0,
                amount: 0
            })
            return { ...state, total: total.toFixed(2), amount }
        default:
            throw new Error("ACTION TYPE NOT DEFINED");
    }
}



export default reducer