import * as debug from "debug";
import * as React from "react";

import { INameDTO } from "./../../dto/INameDTO.class";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("ListComponent");

interface IListComponentProps {
  names: INameDTO[];
}

const ListComponent: (props: IListComponentProps) => React.ReactElement = (
  props: IListComponentProps
) => {
  mainDebugger("ListComponent function");

  return (
    <ul>
      {props.names.map((name: INameDTO) => {
        return (
          <li key={name.id}>
            Hi {name.name} ({name.id})!!
          </li>
        );
      })}
    </ul>
  );
};

export { ListComponent };
