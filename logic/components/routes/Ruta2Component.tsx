import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("Ruta2Component");

const Ruta2Component: (props: Record<string, unknown>) => React.ReactElement = (
  props: IListComponentProps
) => {
  mainDebugger("Ruta2Component function");

  return (
    <div>
      <h3>Ruta2</h3>
    </div>
  );
};

export { Ruta2Component };