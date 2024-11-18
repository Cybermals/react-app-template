/*
 * React App - Entrypoint
 */

import "abortcontroller-polyfill/dist/polyfill-patch-fetch";

import React, {useReducer} from "react";
import {createRoot} from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import {initialState, reducer} from "./reducer";
import App from "./App";


// Define state provider
function StateProvider() {
    // Use reducer
    const [state, dispatch] = useReducer(reducer, initialState);

    // Create browser router
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>
        }
    ]);

    return <RouterProvider router={router}/>
}


// Create React root
const root = createRoot(document.querySelector("#root"));
root.render(
    <React.StrictMode>
        <StateProvider/>
    </React.StrictMode>
);
