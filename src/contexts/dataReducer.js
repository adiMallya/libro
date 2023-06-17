const initialState = {
    books: [],
    categories: [],
    search: "",
}

const dataReducer = (state, { type, payload }) => {
    switch (type) {
        case "INIT_DATA":
            return {
                ...state,
                books: [...payload]
            }
        case "INIT_CATEGORIES":
            return {
                ...state,
                categories: [...payload]
            }
        case "MOVE_TO_CATEGORY":
            return {
                ...state,
                books: state.books.map((book) =>
                    book._id === payload._id ?
                        { ...book, category: payload.category } :
                        book
                )
            }
        case "ADD_CATEGORY":
            return {
                ...state,
                category: [...state.category, payload]
            }
        case "SEARCH":
            return {
                ...state,
                search: payload.toLowerCase()
            }
        default: return state;
    }
}

export { initialState, dataReducer };