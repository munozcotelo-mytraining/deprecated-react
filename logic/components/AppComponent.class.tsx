import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debug = debug.debug("react").extend("AppComponent");

interface IAppComponentProps {
  compiler?: string;
  framework?: string;
}

class AppComponent extends React.Component<
  IAppComponentProps,
  Record<string, unknown>
> {
  public constructor(props: IAppComponentProps) {
    super(props);
    mainDebugger("AppComponent constructor");
  }

  public render(): React.ReactNode {
    const me: AppComponent = this;

    mainDebugger("AppComponent render");

    return (
      <div>
        Hello compiler '{me.props.compiler}' and framework '{me.props.framework}
        ' from Class Component
      </div>
    );
  }
}

export { AppComponent };
