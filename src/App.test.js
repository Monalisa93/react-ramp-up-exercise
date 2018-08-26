import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {shallow} from "enzyme";
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    shallow(<App/>);
});

// test('App renders correctly', () => {
//     const snap = renderer.create(
//         <Router>
//             <App/>
//         </Router>
//     ).toJSON();
//     expect(snap).toMatchSnapshot();
// })

