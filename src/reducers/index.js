const initialState = {
    topTable: [],
    bottomTable: [],
    togglePopup: false,
    play: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_POPUP':
            return {
                ...state,
                togglePopup: action.val
            };

        case 'SAVE_TABLE':
            return {
                ...state,
                topTable: [...state.topTable, action.obj]
            };

        case 'DELETE_ALL':
            return {
                ...state,
                topTable: []
            };

        case 'CLEAN_ALL':
            return {
                ...state,
                bottomTable: []
            };

        case 'GET_DATA_TO_TABLE':
            return {
                ...state,
                bottomTable: [...state.bottomTable, ...action.data],
                play: true
            };

        default:
            return state;
    }
}
