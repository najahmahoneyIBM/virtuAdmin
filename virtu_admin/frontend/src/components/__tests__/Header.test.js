import React from 'react';
import Header from '../Header';
import { Provider } from 'react-redux';
import { store } from '../../store';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';

test("renders title", () =>{
    render(
    <Provider store={store}>
        <Headers />
    </Provider>
    );
    const linkElement = screen.getByText(/My Profile/i);
    expect(linkElement).toBeInTheDocument();
});