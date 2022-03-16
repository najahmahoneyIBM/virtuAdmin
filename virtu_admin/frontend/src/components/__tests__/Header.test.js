import React from 'react';
import Header from '../Header';
import { Provider } from 'react-redux';
import { store } from '../../store';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react-native';



describe('Testing counter page', () => {
    it('renders the component correctly', () => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        )

    })
})

test("renders title", () =>{
    render(
    <Provider store={store}>
        <Header />
    </Provider>
    );
    const linkElement = screen.getByText(/My Profile/i);
    expect(linkElement).toBeInTheDocument();
});