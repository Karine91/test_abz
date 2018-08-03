//SET_MODAL_STATE
export const setModalState = ({
  isOpen,
  message = "Houston, we have a problem!",
  title = "Error"
}) => ({
  type: "SET_MODAL_STATE",
  modalState: { isOpen, message, title }
});
