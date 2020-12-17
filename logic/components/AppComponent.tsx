import * as debug from "debug";
import * as React from "react";

import { ConditionalComponent } from "./ConditionalComponent";
import { ListComponent } from "./ListComponent";
import { Rendering1Component } from "./Rendering1Component";

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

  const listNames: string[] = ["Jon", "Michael", "Paul"];
  const listNumbers: number[] = [2, 4, 6, 8, 10];
  const doubleList: boolean = false;

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
      <Rendering1Component double={doubleList} numbers={listNumbers} />
      <hr />
    </div>
  );
};

export { AppComponent };
