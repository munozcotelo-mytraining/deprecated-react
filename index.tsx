/**
 * Importar librerias:
 * - React -> JSX
 * - ReactDom -> Metodos del DOM
 */
import * as debug from "debug";
import * as React from "react";
import * as ReactDOM from "react-dom";

const mainDebugger: debug.Debug = debug.debug("react").extend("main");

mainDebugger("Start app");

/**
 * Buscamos el elemento con id="root" de la pagina html
 * y ahi inyectamos
 */
ReactDOM.render(<h1>Hello world!!</h1>, document.getElementById("root"));

mainDebugger("App rendered");
