import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';


configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});



it('renders without crashing', () => {
    shallow(<Provider store={store}><App/></Provider>);
});

// test('App matches snapshot', () => {
//     const snap = renderer.create(<Provider store={store}><App/></Provider>).toJSON();
//     expect(snap).toMatchSnapshot();
// });