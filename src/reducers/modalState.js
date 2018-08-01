export default (state = { isOpen: false, errMessage: 'Houston, we have a problem!' }, action) => {
    switch (action.type) {
        case 'SET_MODAL_STATE':
            return action.modalState;
        default:
            return state;
    }
};