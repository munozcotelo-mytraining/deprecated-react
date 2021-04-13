import * as debug from "debug";
import * as React from "react";

import { UserContext } from "./../context/UserContext";
import { DynamicUserContext } from "./../context/DynamicUserContext";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("ContextConsumerClassComponent");

interface IContextConsumerClassComponentProps {
  direction?: string;
}

type MyStateType = {};

class ContextConsumerClassComponent extends React.Component<{}, MyStateType> {

  private static contextType = UserContext;

  public constructor(props: IContextConsumerClassComponentProps) {
    super(props);
    mainDebugger("ContextConsumerClassComponent constructor");
  }

  public render(): React.ReactNode {
    const me: ContextConsumerClassComponent = this;

    /**
     * Render es llamado cada vez que el estado cambia.
     * Es decir, el componente se renderiza cada vez
     */

    mainDebugger("ContextConsumerClassComponent render");

    return (
      <div style={{backgroundColor: "lightblue"}}>
        Un consumidor (ContextConsumerClassComponent) de contexto "{me.context}""
      </div>
    );
  }
}

// ContextConsumerClassComponent.contextType = UserContext;

export { ContextConsumerClassComponent };
