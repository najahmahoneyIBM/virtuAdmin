import React from 'react';
import {shallow, configure} from 'enzyme';
import LoginScreen from '../LoginScreen/LoginScreen'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe("render without crashing", function() {
    let mountedLoginScreen;
    beforeEach(()=>{
        mountedLoginScreen = shallow(<LoginScreen />);
    });

it('render without crashing', function() {
    const mountedLoginScreen = shallow(<LoginScreen />);
    expect(mountedLoginScreen.length).toBeGreaterThan(0);
});

it('renders a button with submit', function() {
    const button = mountedLoginScreen.find('button').text();
    expect(button.length).toBeGreaterThan(0);
}); 

})