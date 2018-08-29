import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {shallow} from "enzyme";
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    shallow(<App/>);
});

test('App matches snapshot', () => {
    const snap = renderer.create(<App/>).toJSON();
    expect(snap).toMatchSnapshot();
});

