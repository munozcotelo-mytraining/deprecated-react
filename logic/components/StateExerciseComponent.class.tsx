import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("StateExerciseComponent");

interface IStateExerciseComponentProps {
  amount: number;
  initial: number;
}

type MyStateType = {
  result: number;
};

class StateExerciseComponent extends React.Component<
  IStateExerciseComponentProps,
  MyStateType
> {
  public state: MyStateType = {
    result: 0
  };

  public constructor(props: IStateExerciseComponentProps) {
    super(props);
    mainDebugger("StateExerciseComponent constructor", props);
    this.state = {
      result: props.initial
    };
  }

  private handleClick() {
    const me: StateExerciseComponent = this;

    me.setState((state: MyStateType, props: IStateExerciseComponentProps) => {
      return {
        result: state.result + props.amount
      };
    });
  }

  public componentDidMount(): void {
    const me: StateExerciseComponent = this;

    mainDebugger("Montando StateExerciseComponent");
  }

  public componentWillUnmount(): void {
    const me: StateExerciseComponent = this;

    mainDebugger("Desmontando StateExerciseComponent");
  }

  public render(): React.ReactNode {
    const me: StateExerciseComponent = this;

    /**
     * Render es llamado cada vez que el estado cambia.
     * Es decir, el componente se renderiza cada vez
     */

    mainDebugger("StateExerciseComponent render");

    return (
      <div>
        <p>La vista se actualiza al cambiar el estado.</p>
        <p>Resultado: {me.state.result}</p>
        <p>
          <button onClick={me.handleClick.bind(me)}>Click me!!</button>
        </p>
      </div>
    );
  }
}

export { StateExerciseComponent };
