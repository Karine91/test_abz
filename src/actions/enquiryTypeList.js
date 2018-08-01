const axios = require("axios");

//SET_ENQUIRY_TYPE_LIST
export const setEnquiryTypeList = enquiryTypeList => ({
  type: "SET_ENQUIRY_TYPE_LIST",
  enquiryTypeList
});

export const startSetEnquiryTypeList = () => {
  return dispatch => {
    return axios.get("directories/enquiry-types").then(response => {
      dispatch(setEnquiryTypeList(response.data.data));
    });
  };
};
