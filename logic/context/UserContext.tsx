import * as React from "react";

const UserContext : React.Context<string> = React.createContext("none yet");
UserContext.displayName = "UserContext";

export { UserContext };