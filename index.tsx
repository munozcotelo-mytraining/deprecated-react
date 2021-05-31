/**
 * Import libraries:
 * - React -> JSX
 * - ReactDom -> DOM methods
 */
import * as debug from "debug";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
//import { HashRouter as Router } from "react-router-dom";


/* Comment/Uncomment to use class or functional component */
import { AppComponent } from "./logic/components/AppComponent.class";
import { AppComponent as AppComponentFunction } from "./logic/components/AppComponent";

const mainDebugger: debug.Debugger = debug.debug("react").extend("main");

mainDebugger("Start app");

/**
 * Buscamos el elemento con id="root" de la pagina html
 * y ahi inyectamos
 */
ReactDOM.render(
  <Router><AppComponentFunction compiler="online" framework="REACT" /></Router>,
  //<Router><AppComponent compiler="online" framework="REACT" /></Router>,
  document.getElementById("root")
);

mainDebugger("App rendered");
