import React from 'react';
import ReactDOM from 'react-dom/client';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { StoreProvider, stores } from './store'

import Home from './containers/home';

import constants from './constants/global';

import 'src/styles/index.scss';

const render = (status) => {
    if (status === Status.LOADING) return "Loading...";
    if (status === Status.FAILURE) return "Error";
    return null;
};

/**
 * 
 * @returns {React.Component} The main application component
 */
const MainApp = () => (
    <Wrapper apiKey={constants.GOOGLE_API_KEY} libraries={["places"]} render={render}>
        <StoreProvider value={stores}>
            <Home />
        </StoreProvider>
    </Wrapper>
);

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(<MainApp />);
