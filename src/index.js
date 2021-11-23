import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createBrowserHistory } from "history";
import { FronteggProvider } from '@frontegg/react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./About";

const history = createBrowserHistory();

const contextOptions = {
    baseUrl: 'https://samples-demo.frontegg.com',
};

// Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

ReactDOM.render(
    <BrowserRouter history={history}>
        <FronteggProvider history={history} contextOptions={contextOptions} headerImage={headerImage}>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route>
                    <App />
                </Route>
            </Switch>
        </FronteggProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
