import * as React from "react";

interface MyProps {
  refInput: any;
  refButton: (element: HTMLButtonElement) => void;
}

const ChildComponent: (props: MyProps) => React.ReactElement = (
  props: MyProps
): React.ReactElement => {
  return (
    <div>
      <input type="text" ref={props.refInput} />
      <button ref={props.refButton}>Button</button>
    </div>
  );
};

export { ChildComponent };
