import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("LabelWithTextComponent");

class LabelWithTextComponent extends React.Component<{}, {}> {
  private reference: React.RefObject<HTMLInputElement>;

  public constructor(props: {}) {
    super(props);
    mainDebugger("LabelWithTextComponent constructor");
    this.reference = React.createRef();
  }

  public changeFocus(): void {
    const me: LabelWithTextComponent = this;
    me.reference.current.focus();
  }

  public render(): React.ReactNode {
    const me: LabelWithTextComponent = this;

    mainDebugger("LabelWithTextComponent render");

    return (
      <div>
        <label>TheLabel: </label>
        <input type="text" ref={me.reference} />
        <button onClick={me.changeFocus.bind(me)}>
          Focus inside Component
        </button>
      </div>
    );
  }
}

export { LabelWithTextComponent };
