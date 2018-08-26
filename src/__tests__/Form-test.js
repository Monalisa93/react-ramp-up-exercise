// Form-test.js

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Form from '../Form.js';
import renderer from 'react-test-renderer';


//we are testing form component
    describe('Form Component', () => {
    it('matches the snapshot', () => {
       const tree = renderer.create(<Form/>).toJSON()
    });

    it('should render without throwing an error', () => {
        expect (shallow(<Form/>).find('form.input').exists()).toBe(true)
    });

    //Form components intial rendering of all form components
    it('renders a name textfield', () => {
        expect(shallow(<Form/>).find('name').length).toEqual(0)
    });

    it('renders a address textfield', () => {
        expect(shallow(<Form/>).find('address').length).toEqual(0)
    });
    it('renders a phone textfield', () => {
        expect(shallow(<Form/>).find('phone').length).toEqual(0)
    });
    it('renders a hobbies textfield', () => {
        expect(shallow(<Form/>).find('hobbies').length).toEqual(0)
    });
    it('should render textfields to input when form component renders', ()=> {
        const wrapper = shallow(
            <Form>
                <form className='input'/>
            </Form>
        );
        expect(wrapper.contains(<form className='input'/>)).toBe(false);
    });
    it('can handle submit button click',() => {
        const wrapper = shallow(<Form/>)
        const submitBtn = wrapper.find('RaisedButton.submitBtn')
        submitBtn.simulate('click')
    });
    it('can handle clear button click', () => {
        const wrapper = shallow(<Form/>)
        const submitBtn = wrapper.find('RaisedButton.clearBtn')
        submitBtn.simulate('click')
    });

    //Check is no data then Add should be disabled
    // it('should fail if no data from fields', () => {
    //     const fakeEvent = {preventDefault: () => console.log('preventDefault')};
    //     const formComponent = shallow(<Form/>);
    //     expect(formComponent.find('input').length.toBe(1));
    //     formComponent.find('input').simulate('submit',fakeEvent);
    // })

});