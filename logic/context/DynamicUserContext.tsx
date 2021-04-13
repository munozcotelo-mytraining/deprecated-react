import * as React from "react";

interface IDTO {
  user : string;
  userToggle : () => {};
}

const DynamicUserContext : React.Context<IDTO> = React.createContext({

  user: null,
  userToggle: () => {},
 
});

DynamicUserContext.displayName = "DynamicUserContext";

export { DynamicUserContext };