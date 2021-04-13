import * as debug from "debug";
import * as React from "react";

import { DynContextToggle } from "./DynContextToggle";
import { ContextConsumerComponent } from "./ContextConsumerComponent";
import { ContextConsumerClassComponent } from "./ContextConsumerComponentClass.class";

import { UserContext } from "./../context/UserContext";
import { DynamicUserContext } from "./../context/DynamicUserContext";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("AppComponent");

interface IAppComponentProps {
  compiler?: string;
  framework?: string;
}

class AppComponent extends React.Component<
  IAppComponentProps,
  Record<string, unknown>
> {

  public state : Record<string, unknown> = {

        user: "dyn user 1",
        userToggle: () => {},

  };

  public constructor(props: IAppComponentProps) {
    super(props);
    mainDebugger("AppComponent constructor");

    this.state.userToggle = () => {

      this.setState( ( state : Record<string, unknown> ) => {
      
          let value = ( state.user === "dyn user 1" ) ? "dyn user 2" : "dyn user 1";
          
          return {
              user: value,
          }
      } );
    
    };

  }

  public render(): React.ReactNode {
    const me: AppComponent = this;

    mainDebugger("AppComponent render");

    return (
      <div>

        <DynamicUserContext.Provider value={me.state}>
        <UserContext.Provider value="uno">
          <ContextConsumerComponent />
          <ContextConsumerClassComponent />
          <UserContext.Consumer>
            {value => <p>Leyendo el contexto con un "Consumer" { value }</p>}
          </UserContext.Consumer>
        </UserContext.Provider>
        <hr/>
        <UserContext.Provider value="dos">
          <ContextConsumerComponent />
          <ContextConsumerClassComponent />
        </UserContext.Provider>

        <br/>
        <DynContextToggle/>
      </DynamicUserContext.Provider>

      </div>
    );
  }
}

export { AppComponent };
