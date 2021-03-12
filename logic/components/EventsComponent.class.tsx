import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("EventsComponent");

interface IEventsComponentProps {
  direction?: string;
}

type MyStateType = {};

class EventsComponent extends React.Component<{}, MyStateType> {
  public constructor(props: IEventsComponentProps) {
    super(props);
    mainDebugger("EventsComponent constructor");
    this.handleClickD = this.handleClickD.bind(this);
  }

  private handleClickA(event: React.SyntheticEvent) {
    console.info(event);
    event.preventDefault;
  }

  private handleClickB(event: React.SyntheticEvent) {
    const me: EventsComponent = this;
    console.info(me);
    console.info(event);
    event.preventDefault;
  }

  private handleClickC(event: React.SyntheticEvent) {
    const me: EventsComponent = this;
    console.info(me);
    console.info(event);
    event.preventDefault;
  }

  private handleClickD(event: React.SyntheticEvent) {
    const me: EventsComponent = this;
    console.info(me);
    console.info(event);
    event.preventDefault;
  }

  private methodWithArgs(count: number, event: React.SyntheticEvent) {
    //console.info("event", event);
    console.info("count", count);
  }

  public render(): React.ReactNode {
    const me: EventsComponent = this;

    /**
     * Render es llamado cada vez que el estado cambia.
     * Es decir, el componente se renderiza cada vez
     */

    mainDebugger("EventsComponent render");

    return (
      <div>
        <p>Eventos.</p>
        <p>
          <button onClick={me.handleClickA}>
            Capture event without this!!
          </button>
          <br />

          <button onClick={me.handleClickB.bind(me)}>
            Capture event with this (bind)
          </button>
          <br />

          <button
            onClick={(event: React.SyntheticEvent) => me.handleClickC(event)}
          >
            Capture event with this (arrow function)
          </button>
          <br />

          <button onClick={me.handleClickD}>
            Capture event with this (bind en constructor)
          </button>
          <br />
          <br />

          <button
            onClick={(event: React.SyntheticEvent) =>
              me.methodWithArgs(100, event)
            }
          >
            Arguments (arrow function)
          </button>
          <br />

          <button onClick={me.methodWithArgs.bind(me, 50)}>
            Arguments (bind)
          </button>
        </p>
      </div>
    );
  }
}

export { EventsComponent };
