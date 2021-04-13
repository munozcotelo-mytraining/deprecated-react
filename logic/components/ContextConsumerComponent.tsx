import * as debug from "debug";
import * as React from "react";

import { UserContext } from "./../context/UserContext";
import { DynamicUserContext } from "./../context/DynamicUserContext";

interface IDynContextDTO {
  user : string;
  userToggle : () => {};
}

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("ContextConsumerComponent");

const ContextConsumerComponent: (props: Record<string, unknown>) => React.ReactElement = (
  props: Record<string, unknown>
) => {
  mainDebugger("ContextConsumerComponent function");

  const user : string = React.useContext(UserContext);
  const dynUser : IDynContextDTO = React.useContext(DynamicUserContext);


  return (
    <div style={{backgroundColor: "orange"}}>
      <div style={{color: "red"}}>Un consumidor (ContextConsumerComponent) de contexto "{user}""</div>
      <div style={{color: "brown"}}>Un consumidor (ContextConsumerComponent) de contexto "{dynUser.user}""</div>
    </div>
  );
};

export { ContextConsumerComponent };
