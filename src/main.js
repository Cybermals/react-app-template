/*
 * main.js
 *
 * Entrypoint for the React application.
 */

import {createRoot} from "react-dom/client";
import React from "react";
import App from "./app";


// Create React root
const root = createRoot(document.querySelector("#root"));
root.render(<App/>);
