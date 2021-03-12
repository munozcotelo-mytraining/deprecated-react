import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("ExerciseEventsComponent");

interface IExerciseEventsComponentProps {
  direction?: string;
}

type MyStateType = {};

class ExerciseEventsComponent extends React.Component<{}, MyStateType> {
  private myProperty1: number = 1000;
  private myProperty2: number = 5000;

  public constructor(props: IExerciseEventsComponentProps) {
    super(props);
    mainDebugger("ExerciseEventsComponent constructor");
    this.handleClickD = this.handleClickD.bind(this);
  }

  private handleClick(event: React.SyntheticEvent) {
    console.info(event.target);
    event.preventDefault;
  }

  private handleClickD(event: React.SyntheticEvent) {
    const me: ExerciseEventsComponent = this;
    console.info(me);
    console.info(event);
    event.preventDefault;
  }

  private methodWithArgs(propertyName: string, event: React.SyntheticEvent) {
    const me: ExerciseEventsComponent = this;
    console.info(event.target, "-", propertyName, "=", Reflect.get(me, propertyName));
  }

  public render(): React.ReactNode {
    const me: ExerciseEventsComponent = this;

    /**
     * Render es llamado cada vez que el estado cambia.
     * Es decir, el componente se renderiza cada vez
     */

    mainDebugger("ExerciseEventsComponent render");

    return (
      <div>
        <p>Ejercicio Eventos.</p>
        <p>
          <button onClick={me.handleClick}>Normal</button>
          <br />

          <button
            onClick={(event: React.SyntheticEvent) =>
              me.methodWithArgs("myProperty1", event)
            }
          >
            Arrow function
          </button>
          <br />

          <button onClick={me.methodWithArgs.bind(me, "myProperty2")}>
            Bind
          </button>
        </p>
      </div>
    );
  }
}

export { ExerciseEventsComponent };
