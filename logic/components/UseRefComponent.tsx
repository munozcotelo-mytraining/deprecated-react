import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("UseRefComponent");

import { ForwardRefComponent } from "./common/ForwardRefComponent";

const UseRefComponent: (props: {}) => React.ReactElement = (props: {}) => {
    const myReference: React.MutableRefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(
    null
  );

  const refToComponent: React.MutableRefObject<
    React.ReactElement
    > = React.useRef<React.ReactElement>(null);

  /* (1) Como sabemos este codigo se ejecuta "cada vez" */
  let myThing: React.MutableRefObject<number> = React.useRef<number>(null);
  let aRandom: number;

  function changeFocusLocal(): void {
    myReference.current.focus();
  }

  function changeFocusAlsoChildren(): void {
    mainDebugger(`El valor de la referencias es...`);
    console.info(refToComponent.current);
    mainDebugger(
      `Como se aprecia es accesible todo lo que el componente ha definido dentro de 'useImperativeHandle'`
    );
    (refToComponent.current as any).myFocusDefinition();
  }

  React.useEffect(() => {
    /* (3) Printando el valor se puede comprobar que
     * - aRandom ya no toma valor las "siguientes veces"
     * - myThing NO cambia su valor ==> tiene todo el sentido porque si no al usar useRef
     *   con elementos del DOM estaríamos obtiendo una referencia cada vez
     *
     * Las asignaciones de useRef SE PUEDEN VER COMO UNA PROPIEDAD DE CLASE
     */
    console.info("useEffect 1", myReference, myThing, aRandom);
  });

  React.useEffect(() => {
    /* (2) Damos valor la primera vez */
    myThing.current = Math.random();
    aRandom = Math.random();
    console.info("useEffect 2", myThing, aRandom);
  }, []);

  /* (4) La misma explicación que en (3)
   * myThing CONSERVA su valor al ser "como una propiedad de clase"
   */
  console.info("Fuera de todo", myReference, myThing, aRandom);

  return (
    <div style={{ border: "2px solid blue", padding: "15px", margin: "5px" }}>
      <h1>useRef Component</h1>
      <input type="text" ref={myReference} />
      <button onClick={changeFocusLocal}> Change focus local</button>
      <button onClick={changeFocusAlsoChildren}>
        {" "}
        Change focus also with children
      </button>
      <hr />
      <hr />
      <ForwardRefComponent ref={refToComponent} />
    </div>
  );
};

export { UseRefComponent };
