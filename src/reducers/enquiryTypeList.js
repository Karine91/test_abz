export default (state = [], action) => {
  switch (action.type) {
    case "SET_ENQUIRY_TYPE_LIST":
      return action.enquiryTypeList;
    default:
      return state;
  }
};
