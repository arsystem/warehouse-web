import React from "react";
import {render} from "react-dom";

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import {BrowserRouter} from "react-router-dom";

import reducers from "./reducers";
import App from "./containers/App";

let store = createStore(reducers, applyMiddleware(thunkMiddleware, logger))

render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>,
    document.getElementById("app")
)