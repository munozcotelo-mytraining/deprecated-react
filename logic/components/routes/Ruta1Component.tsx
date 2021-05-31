import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("Ruta1Component");

const Ruta1Component: (props: Record<string, unknown>) => React.ReactElement = (
  props: IListComponentProps
) => {
  mainDebugger("Ruta1Component function");

  return (
    <div>
      <h3>Ruta1</h3>
    </div>
  );
};

export { Ruta1Component };