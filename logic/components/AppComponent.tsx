import * as debug from "debug";
import * as React from "react";
import * as uuid from "uuid";

import { INameDTO } from "./../../dto/INameDTO.class";

import { ConditionalComponent } from "./ConditionalComponent";
import { ListComponent } from "./ListComponent";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("AppComponent");

interface IAppComponentProps {
  compiler?: string;
  framework?: string;
}

const AppComponent: (props: IAppComponentProps) => React.ReactElement = (
  props: IAppComponentProps
) => {
  /* Body */

  mainDebugger("AppComponent function");

  const listNames: INameDTO[] = [
    { id: uuid.v4(), name: "Jon" },
    { id: uuid.v4(), name: "Paul" },
    { id: uuid.v4(), name: "Michael" }
  ];

  return (
    <div>
      Hello compiler '{props.compiler}' and framework '{props.framework}' from
      Function Component
      <hr />
      <ConditionalComponent
        name="John"
        showName={true}
        surname="Doe"
        showSurname={true}
        adress="Main Street"
        showAdress={true}
      />
      <hr />
      <ListComponent names={listNames} />
      <hr />
    </div>
  );
};

export { AppComponent };
