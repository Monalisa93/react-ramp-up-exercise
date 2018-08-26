// api-test.js

import React from 'react';
import axios from 'axios';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

//const customers = axios.get('https://private-5b0c2-uob1.apiary-mock.com/customers');

const customers = require('../__mockData__/mockCustomer.json');

// sample api test
// describe('get customers using promise', () => {
//     it('should load customer data', () => {
//         return customers
//             .then(data => {
//                 expect(data).toBeDefined();
//                 expect(data.name).toEqual('Tom')
//             })
//     })
// });

// The exact same test using async/await
describe('get customer using async/await', () => {
    it('should load customer data', async () => {
        const data = await customers;
        expect(data).toBeDefined();
        expect(data.map((list,i)=>list))
            // .toEqual('[\n' +
            // '    {\n' +
            // '        "name": "Susan",\n' +
            // '        "address": "One Raffles",\n' +
            // '        "phone": "12121212",\n' +
            // '        "hobbies": ["reading", "eating", "biking"]\n' +
            // '    },\n' +
            // '                {\n' +
            // '        "name": "Tom",\n' +
            // '        "address": "Two Raffles",\n' +
            // '        "phone": "23232323",\n' +
            // '        "hobbies": ["coding", "trading", "swimminng"]\n' +
            // '    },\n' +
            // '                {\n' +
            // '        "name": "Jerry",\n' +
            // '        "address": "Three Raffles",\n' +
            // '        "phone": "12121212",\n' +
            // '        "hobbies": ["learning", "bikinng", "readinng"]\n' +
            // '    }\n' +
            // ']')
    })
})