import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("ListComponent");

interface IListComponentProps {
  names: string[];
}

const ListComponent: (props: IListComponentProps) => React.ReactElement = (
  props: IListComponentProps
) => {
  mainDebugger("ListComponent function");

  return (
    <ul>
      {props.names.map((name: string) => {
        return <li>Hi {name}!!</li>;
      })}
    </ul>
  );
};

export { ListComponent };
