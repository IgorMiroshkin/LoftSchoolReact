import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import { Provider } from 'react-redux';

import RootRouter from './Components/RootRouter';
import getStore, { sagaMiddleware } from './Store/store';

import rootSaga from './Store/Middlewares';

const store = getStore();

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <RootRouter/>
    </Provider>,
    document.getElementById('root')
);