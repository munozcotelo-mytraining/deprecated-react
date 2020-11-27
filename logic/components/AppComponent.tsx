import * as debug from "debug";
import * as React from "react";

import { HelloComponent } from "./HelloComponent";

const mainDebugger: debug.Debug = debug.debug("react").extend("AppComponent");

interface IAppComponentProps {
  compiler?: string;
  framework?: string;
}

const AppComponent: (props: IAppComponentProps) => React.ReactElement = (
  props: IAppComponentProps
) => {
  /* Body */

  mainDebugger("AppComponent function");

  return (
    <div>
      Hello compiler '{props.compiler}' and framework '{props.framework}' from
      Function Component
      <HelloComponent name="React training" />
    </div>
  );
};

export { AppComponent };
