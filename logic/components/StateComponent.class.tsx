import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("StateComponent");

interface IStateComponentProps {
  direction?: string;
}

type MyStateType = {
  counter: number;
  random: number;
};

class StateComponent extends React.Component<
  IStateComponentProps,
  MyStateType
> {
  private intervalId: number;
  public state: MyStateType = {
    counter: 0,
    random: 0
  };

  public constructor(props: IStateComponentProps) {
    super(props);
    mainDebugger("StateComponent constructor");
    this.state = {
      counter: 0,
      random: 0
    };
  }

  private handleClick() {
    const me: StateComponent = this;

    me.setState({
      random: Math.random()
    });
  }

  private updateCounter() {
    const me: StateComponent = this;

    me.setState((currentState: MyStateType, props: IStateComponentProps) => {
      if (me.props.direction === "up") {
        return {
          counter: currentState.counter + 1
        };
      } else {
        return {
          counter: currentState.counter - 1
        };
      }
    });
  }

  public componentDidMount(): void {
    const me: StateComponent = this;

    mainDebugger("Montando StateComponent");

    me.intervalId = setInterval(() => {
      me.updateCounter();
    }, 2000);
  }

  public componentWillUnmount(): void {
    const me: StateComponent = this;

    mainDebugger("Desmontando StateComponent");

    clearInterval(me.intervalId);
  }

  public render(): React.ReactNode {
    const me: StateComponent = this;

    /**
     * Render es llamado cada vez que el estado cambia.
     * Es decir, el componente se renderiza cada vez
     */

    mainDebugger("StateComponent render");

    return (
      <div>
        <p>La vista se actualiza al cambiar el estado.</p>
        <p>Counter (each 2 seconds): {me.state.counter}</p>
        <p>
          <button onClick={me.handleClick.bind(me)}>Click me!!</button>
          <p>Random value: {me.state.random}</p>
        </p>
      </div>
    );
  }
}

export { StateComponent };
