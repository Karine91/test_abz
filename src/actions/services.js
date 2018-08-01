const axios = require('axios');

//SET_SERVICES
export const setServices = (services) => ({
    type: 'SET_SERVICES',
    services
});

export const startSetServices = () => {
    return (dispatch) => {
        return axios.get('services/categories').then((response) => {
            dispatch(setServices(response.data.data));
        });
    };
};
