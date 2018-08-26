// api-test.js

import React from 'react';
import axios from 'axios';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

const customers = axios.get('https://private-5b0c2-uob1.apiary-mock.com/customers');

// sample test
describe('get customers using promise', () => {
    it('should load customer data', () => {
        return customers
            .then(data => {
                expect(data).toBeDefined();
                expect(data.name).toEqual('Tom')
            })
    })
});