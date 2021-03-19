import * as debug from "debug";
import * as React from "react";

import { LabelWithTextComponent } from "./common/LabelWithTextComponent.class";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("RefComponent");

type MyStateType = {
  value: number;
};

class RefComponent extends React.Component<{}, MyStateType> {
  private reference1: React.RefObject<HTMLInputElement>;
  private reference2: React.RefObject<HTMLInputElement>;
  private refToComponent: React.RefObject<LabelWithTextComponent>;

  public state: MyStateType = {
    value: 0
  };

  public constructor(props: {}) {
    super(props);
    mainDebugger("RefComponent constructor");
    this.reference1 = React.createRef<HTMLInputElement>();
    this.reference2 = React.createRef<HTMLInputElement>();
    this.refToComponent = React.createRef<LabelWithTextComponent>();
    this.state = {
      value: 0
    };
  }

  private changeFocusLocal(): void {
    const me: RefComponent = this;

    me.setState((currentState: MyStateType) => {
      const newValue: number = currentState.value + 1;

      setTimeout(() => {
        if (newValue % 2 === 0) {
          me.reference1.current.focus();
        } else {
          me.reference2.current.focus();
        }
      });

      return {
        value: newValue
      };
    });
  }

  private changeFocusAlsoChildren(): void {
    const me: RefComponent = this;

    me.setState((currentState: MyStateType) => {
      const newValue: number = currentState.value + 1;

      setTimeout(() => {
        if (newValue % 3 === 0) {
          me.reference1.current.focus();
        } else if (newValue % 3 === 1) {
          me.reference2.current.focus();
        } else {
          me.refToComponent.current.changeFocus();
        }
      });

      return {
        value: newValue
      };
    });
  }

  public render(): React.ReactNode {
    const me: RefComponent = this;

    mainDebugger("RefComponent render");

    return (
      <div style={{ border: "2px solid red", padding: "15px", margin: "5px" }}>
        <h1>Ref Component Class</h1>
        <input type="text" ref={me.reference1} />
        <input type="text" ref={me.reference2} />
        <hr />
        <button onClick={me.changeFocusLocal.bind(me)}>
          Change focus local {me.state.value}
        </button>
        <button onClick={me.changeFocusAlsoChildren.bind(me)}>
          Change focus also with children {me.state.value}
        </button>
        <hr />
        <hr />
        <LabelWithTextComponent ref={me.refToComponent} />
      </div>
    );
  }
}

export { RefComponent };
