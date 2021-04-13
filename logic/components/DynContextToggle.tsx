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
  .extend("DynContextToggle");

const DynContextToggle: (props: {}) => React.ReactElement = (
  props: {}
) => {
  mainDebugger("DynContextToggle function");

  const dynUser : IDynContextDTO = React.useContext(DynamicUserContext);

  return (
    <div>
      <button onClick={dynUser.userToggle}>Change the context</button>
    </div>
  );
};

export { DynContextToggle };
