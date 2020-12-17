import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("ConditionalComponent");

interface IConditionalComponentProps {
  name: string;
  showName: boolean;
  surname: string;
  showSurname: boolean;
  adress: string;
  showAdress: boolean;
}

const ConditionalComponent: (
  props: IConditionalComponentProps
) => React.ReactElement = (props: IConditionalComponentProps) => {
  mainDebugger("ConditionalComponent function");

  let nameNode: React.ReactElement;
  if (props.showName) {
    nameNode = <div>Your name is {props.name}</div>;
  }

  return (
    <div>
      {nameNode}
      {props.showSurname === true ? (
        <div>Your surname is {props.surname}</div>
      ) : null}
      {props.showAdress && <div>Your adress is {props.adress}</div>}
    </div>
  );
};

export { ConditionalComponent };
