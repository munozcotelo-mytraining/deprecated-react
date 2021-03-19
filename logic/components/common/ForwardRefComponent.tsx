import * as React from "react";

interface ForwardRefComponentProps {
  ref: React.MutableRefObject<React.ReactElement>;
}

const ForwardRefComponent: (
  props: ForwardRefComponentProps
) => React.ReactElement = React.forwardRef<
  React.ReactElement,
  ForwardRefComponentProps
>(
  (
    props: ForwardRefComponentProps,
    inputRef: React.MutableRefObject<React.ReactElement>
  ) => {
    console.info(props);
    const myReference: React.MutableRefObject<HTMLInputElement> = React.useRef(
      null
    );

    React.useImperativeHandle(inputRef, () => {
      return ({
        myFocusDefinition: () => {
          myReference.current.focus();
        }
      } as unknown) as React.ReactElement;
    });

    function changeFocus(): void {
      myReference.current.focus();
    }

    return (
      <div>
        <h3>ForwardRef</h3>
        <label>The label):</label>
        <input ref={myReference} />
        <button onClick={changeFocus}>Focus inside Component</button>
      </div>
    );
  }
);

export { ForwardRefComponent };
