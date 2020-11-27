import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debug = debug.debug("react").extend("HelloComponent");

interface IHelloComponentProps {
  name: string;
}

const HelloComponent: (props: IHelloComponentProps) => React.ReactElement = (
  props: IHelloComponentProps
) => {
  /* Body */

  mainDebugger("HelloComponent function");

  return <div>Hello '{props.name}'</div>;
};

export { HelloComponent };
