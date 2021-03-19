import * as React from "react";

const Button: (props: { name: string }) => React.ReactElement = (props: {
  name: string;
}) => {
  return <button>The button {props.name}</button>;
};

export { Button };
