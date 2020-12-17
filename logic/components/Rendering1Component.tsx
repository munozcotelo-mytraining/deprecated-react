import * as debug from "debug";
import * as React from "react";

const mainDebugger: debug.Debugger = debug
  .debug("react")
  .extend("Rendering1Component");

interface IRendering1ComponentProps {
  double: boolean;
  numbers: number[];
}

const Rendering1Component: (
  props: IRendering1ComponentProps
) => React.ReactElement = (props: IRendering1ComponentProps) => {
  mainDebugger("Rendering1Component function");

  return (
    <ul>
      {props.double === true
        ? props.numbers.map((num: number) => {
            return <li>{num * 2}</li>;
          })
        : props.numbers.map((num: number) => {
            return <li>{num / 2}</li>;
          })}
    </ul>
  );
};

export { Rendering1Component };
