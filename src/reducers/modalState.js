export default (
  state = {
    isOpen: false,
    message: "",
    title: ""
  },
  action
) => {
  switch (action.type) {
    case "SET_MODAL_STATE":
      return action.modalState;
    default:
      return state;
  }
};
