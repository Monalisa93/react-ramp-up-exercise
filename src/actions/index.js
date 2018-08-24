import axios from 'axios';

export function fetchCustomers() {
    const request = axios.get('https://private-5b0c2-uob1.apiary-mock.com/customers')

    return (dispatch) => {
        request.then(({data}) => {
            dispatch ({ type: 'FETCH_CUSTOMERS', payload: data})
        });
    };
}