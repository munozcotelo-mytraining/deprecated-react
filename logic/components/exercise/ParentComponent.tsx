import * as React from "react";

import { ChildComponent } from "./ChildComponent";

const ParentComponent: (props: {}) => React.ReactElement = (props: {}): React.ReactElement => {
  let refInput: React.MutableRefObject<HTMLInputElement> = React.useRef<
    HTMLInputElement
  >(null);

  let refButton: HTMLButtonElement;

  function theRefButtonCallback(element: HTMLButtonElement): void {
    console.info("Ya me han llamado");
    refButton = element;
  }

  function startAnimation(): void {
    setTimeout(() => {
      refInput.current.focus();
    }, 2000);

    setTimeout(() => {
      refButton.focus();
    }, 5000);
  }

  return (
    <div>
      <ChildComponent refInput={refInput} refButton={theRefButtonCallback} />
      <button onClick={startAnimation}>Start</button>
    </div>
  );
};

export { ParentComponent };
